import dotenv from "dotenv";
dotenv.config();
import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Fetch the API key from the .env file

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,
      max_tokens: 7,
      temperature: 0,
    });
    if (data && data.choices[0].text) {
      return res.status(200).json(data.choices[0].text);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a detail paragraph about \n${text}`,
      max_tokens: 500,
      temperature: 0,
    });
    if (data && data.choices[0].text) {
      return res.status(200).json({ answer: data.choices[0].text });
    } else {
      return res.status(500).json({ message: 'Error generating the paragraph. Please try again.' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};



export const chatbotController = async (req, res) => {
  try {
    const { question } = req.body;

    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({ prompt: question, max_tokens: 4000, temperature: 0 }),
    });
    const data = await response.json();
    const answer = data?.choices?.[0]?.text;

    res.json({
      answer,
      prompt: question,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};


export const jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;

    // Improved prompt: Providing clearer instructions for the AI model
    const prompt = `Please convert the following code into JavaScript:\n\n${text}`;

    const { data } = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt,
      max_tokens: 400,
      temperature: 0,
    });

    if (data && data.choices && data.choices.length > 0) {
      // Find the best completion among the choices
      let bestCompletion = data.choices[0].text;

      // Filter out any irrelevant results by checking if the completion contains specific keywords
      // relevant to the JavaScript conversion
      const relevantKeywords = ['function', 'const', 'let', 'var', 'return', 'document', 'createElement'];

      for (let i = 0; i < data.choices.length; i++) {
        const completion = data.choices[i].text;
        if (relevantKeywords.some(keyword => completion.includes(keyword))) {
          bestCompletion = completion;
          break;
        }
      }

      return res.status(200).json({ answer: bestCompletion });
    }

    return res.status(500).json({ message: 'Conversion failed. Please try again.' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server Error' });
  }
};

export const ImageController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createImage({
      prompt: `${text}`,
      n: 1,
      size: "512x512",
    });
    if (data && data.data && data.data.length > 0 && data.data[0].url) {
      return res.status(200).json({ imageUrl: data.data[0].url });
    } else {
      return res.status(500).json({ message: 'Error generating the image. Please try again.' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};
