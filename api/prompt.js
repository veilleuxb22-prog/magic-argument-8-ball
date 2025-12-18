export default async function handler(req, res) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "Generate a concise argumentative speech prompt with a clear stance. Max 2 sentences."
        },
        {
          role: "user",
          content:
          "Create a fresh, controversial argument prompt. \
          15–20% chance include modern slang. \
          Avoid labeling ideology. \
          Sound like real internet discourse."
        }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json({ prompt: data.choices[0].message.content });
}
