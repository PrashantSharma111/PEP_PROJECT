import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const getAIResponse = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message.startsWith("@ai")) {
      return res.status(400).json({ error: "Invalid AI command" });
    }

    const prompt = message.replace("@ai", "").trim();

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    res
      .status(500)
      .json({ error: "AI response failed", details: error.message });
  }
};
