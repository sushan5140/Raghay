import { NextRequest, NextResponse } from "next/server";

// Uses Azure AI Speech's dedicated Marathi neural voices (mr-IN-AarohiNeural,
// mr-IN-ManoharNeural) — trained specifically on Marathi speech, unlike a
// generic browser TTS voice that just sounds out Latin letters.
// Requires AZURE_SPEECH_KEY + AZURE_SPEECH_REGION env vars (see README).

export const runtime = "nodejs";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function POST(req: NextRequest) {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;

  if (!key || !region) {
    return NextResponse.json(
      {
        error:
          "Azure Speech not configured. Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION (see README).",
      },
      { status: 501 }
    );
  }

  let body: { text?: string; voice?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const text = body.text?.trim();
  if (!text) {
    return NextResponse.json({ error: "Missing text" }, { status: 400 });
  }

  // Default to the female voice; caller can pass voice: "mr-IN-ManoharNeural" for male.
  const voice = body.voice === "mr-IN-ManoharNeural" ? "mr-IN-ManoharNeural" : "mr-IN-AarohiNeural";

  const ssml = `<speak version="1.0" xml:lang="mr-IN"><voice name="${voice}">${escapeXml(
    text
  )}</voice></speak>`;

  const endpoint = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;

  let azureRes: Response;
  try {
    azureRes = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-64kbitrate-mono-mp3",
        "User-Agent": "marathi-mate",
      },
      body: ssml,
    });
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to reach Azure Speech: ${err instanceof Error ? err.message : "unknown error"}` },
      { status: 502 }
    );
  }

  if (!azureRes.ok) {
    const detail = await azureRes.text().catch(() => "");
    return NextResponse.json(
      { error: `Azure Speech returned ${azureRes.status}: ${detail}` },
      { status: 502 }
    );
  }

  const audio = await azureRes.arrayBuffer();
  return new NextResponse(audio, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
