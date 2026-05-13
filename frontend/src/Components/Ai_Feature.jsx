import React, { useState } from "react";
import axios from "axios";

const Ai_Feature = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  async function generateBlog() {
    if (!question.trim()) {
      alert("Please enter a topic!");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Write a detailed blog on: ${question}`,
                },
              ],
            },
          ],
        }
      );

      const result =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setAnswer(result || "No response received.");
    } catch (error) {
      console.error(error);
      setAnswer("Failed to generate blog.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-5 flex flex-col gap-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">AI Blog Generator</h2>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border border-gray-400 p-3 w-full rounded-lg"
        placeholder="Enter your topic..."
        rows="4"
      />

      <button
        onClick={generateBlog}
        disabled={loading}
        className="text-white bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>

      <textarea
        value={answer}
        readOnly
        rows="12"
        className="border border-gray-400 p-3 w-full rounded-lg bg-gray-50"
        placeholder="Generated blog will appear here..."
      />
    </div>
  );
};

export default Ai_Feature;
