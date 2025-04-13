import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // const { messages } = await req.json();
  const {
    messages,
    data: { model },
  } = await req.json();
  const result = streamText({
    model: anthropic(model || "claude-3-sonnet-20240229"),
    messages,
  });
  console.log(messages);
  return result.toDataStreamResponse();
}
