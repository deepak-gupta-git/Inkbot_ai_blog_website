import React, { useState } from "react";
import axios from "axios";

const Ai_Feature = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateBlog() {
    if (!question) return alert("Please enter a topic!");
    
    setLoading(true);
    setAnswer("Loading...");

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCw_cqjyic6SN4veFsNl6BRGn7lhgelJUU`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      // Optional Chaining (?.) prevents crashes if the response structure changes
      const result = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setAnswer(result || "No response received.");
    } catch (error) {
      console.error("Error generating content:", error);
      setAnswer("Failed to generate blog. Check console for details.");
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
        placeholder="Enter Your Topic for Blog..."
        rows="4"
      />

      <button
        onClick={generateBlog}
        disabled={loading}
        className="text-white bg-orange-500 px-6 py-2 font-medium rounded hover:bg-orange-600 transition-all disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>

      <textarea
        className="border border-gray-400 p-3 w-full rounded-lg bg-gray-50"
        rows="10"
        placeholder="Your blog will appear here..."
        value={answer}
        readOnly
      />
    </div>
  );
};

export default Ai_Feature;
