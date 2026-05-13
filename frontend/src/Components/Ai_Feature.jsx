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

    if (!API_KEY) {
      alert("API Key not found. Check your .env file.");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Write a small blog on the topic: ${question}`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      const result =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setAnswer(result || "No response received.");
    } catch (error) {
      console.error("Gemini Error:", error);

      const errorMessage =
        error?.response?.data?.error?.message ||
        "Failed to generate blog.";

      setAnswer(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-5 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">
        AI Blog Generator
      </h1>

      <textarea
        rows="4"
        placeholder="Enter your blog topic..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border border-gray-400 p-3 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
      />

      <button
        onClick={generateBlog}
        disabled={loading}
        className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-all disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>

      <textarea
        rows="14"
        readOnly
        value={answer}
        placeholder="Generated blog will appear here..."
        className="border border-gray-400 p-4 rounded-lg bg-gray-50 outline-none"
      />
    </div>
  );
};

export default Ai_Feature;
