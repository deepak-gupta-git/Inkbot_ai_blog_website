import React, { useState } from "react";
import axios from "axios";

const Ai_Feature = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  async function generateBlog() {
    // Check if topic is empty
    if (!question.trim()) {
      alert("Please enter a topic!");
      return;
    }

    // Check if API key exists
    if (!API_KEY) {
      alert("API Key not found. Check your .env file.");
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
                  text: `Write a professional and detailed blog on the topic: ${question}`,
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
      console.error("Full Error:", error);

      const errorMessage =
        error?.response?.data?.error?.message ||
        "Failed to generate blog.";

      setAnswer(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-5 flex flex-col gap-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center">
        AI Blog Generator
      </h2>

      {/* Input Box */}
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border border-gray-400 p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Enter your blog topic..."
        rows="4"
      />

      {/* Generate Button */}
      <button
        onClick={generateBlog}
        disabled={loading}
        className="text-white bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition-all disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>

      {/* Output Box */}
      <textarea
        value={answer}
        readOnly
        rows="14"
        className="border border-gray-400 p-4 w-full rounded-lg bg-gray-50 outline-none"
        placeholder="Generated blog will appear here..."
      />
    </div>
  );
};

export default Ai_Feature;
