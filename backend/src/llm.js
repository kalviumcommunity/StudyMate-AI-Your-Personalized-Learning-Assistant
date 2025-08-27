import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function chatComplete({
  system,
  user,
  temperature = 0.3,
  top_p = 1,
  stop = undefined,
  max_tokens = 256,
  json = false,
  messages = [],
}) {
  const payload = {
    model: "gpt-4o-mini",
    messages: messages.length
      ? messages
      : [
          system ? { role: "system", content: system } : null,
          { role: "user", content: user },
        ].filter(Boolean),
    temperature,
    top_p,
    max_tokens,
    stop,
  };

  // Only add response_format if json=true
  if (json === true) {
    payload.response_format = { type: "json_object" };
  }

  const res = await openai.chat.completions.create(payload);

  console.log("TOKENS:", res.usage);

  const choice = res.choices[0];
  return {
    output: choice.message.content,
    finish_reason: choice.finish_reason,
    usage: res.usage,
  };
}
