import React, { useState } from "react";
import axios from "axios";
// import { useState } from "react";

const Ai_Feature = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

  async function generateBlog() {
    setAnswer("Loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCz0Xc8UYT7h8I-gjkaAi8yhkoKMsE2yxQ",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
      },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
  }
  return (
    <div className="p-5">
      <textarea 
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
        className="border border-gray-950 p-3 w-full rounded-lg mt-5"
        placeholder="Enter Your Topic for Blog..."
        name=""
        id=""
      ></textarea>
      <button onClick={generateBlog}
        className='className="text-white mt4 bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
'
      >
        Generate Blog
      </button>
      <textarea
        className="border border-gray-950 p-3 w-full rounded-lg mt-5"
        rows="10"
        placeholder="You Will Get Answer Here..."
        name=""
        id=""
        value={answer}
      ></textarea>
      {/* <p>{answer}</p> */}
    </div>
  );
};

export default Ai_Feature;
