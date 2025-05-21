# ✍️ InkBot - AI-Powered Blogging Platform

InkBot is an advanced blogging platform that leverages the power of **Google Gemini AI** to help users effortlessly write, edit, and publish engaging blog posts. With a sleek and intuitive UI, InkBot offers smart writing assistance, real-time previews, and a seamless content creation experience.

## 🚀 Features

- 🤖 **AI Blog Generation**: Create blog content with the help of Google Gemini AI.
- 📝 **Rich Blog Editor**: Fully-featured text editor with support for headings, lists, formatting, images, and more.
- 🔄 **AI-Assisted Rewrites & Suggestions**: Improve your writing with smart suggestions and auto-rewrites.
- 🧠 **Contextual Understanding**: Gemini understands your blog topic to generate relevant and coherent content.
- 📅 **Post Scheduling**: Schedule your blog posts to be published at a future date.
- 🗂️ **Blog Management Dashboard**: View, edit, or delete your posts from an intuitive dashboard.
- 🔍 **Search & Filter**: Quickly find posts with built-in search and category/tag filtering.
- 🌐 **SEO-Optimized**: Ensures blogs are optimized for discoverability on search engines.
- 🧑‍💻 **User Authentication**: Secure login and signup system to manage individual blog spaces.
- 🖼️ **Media Uploads**: Add images or media files to your blog with ease.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **AI Integration**: Google Gemini API
- **Authentication**: JWT or Firebase Auth (adjust based on your setup)
- **Deployment**: Vercel / Netlify (Frontend), Render / Railway / Heroku (Backend)

## 📦 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or cloud)
- Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inkbot.git
   cd inkbot

2.Install dependencies for both frontend and backend:

    cd frontend
    npm install

    cd ../backend
    npm install
    
3. Create environment variable files .env in both folders:

Backend .env:

    MONGO_URI=your_mongo_db_uri
    GEMINI_API_KEY=your_gemini_api_key
    JWT_SECRET=your_jwt_secret

4. Run the app:
   
Backend:
node index.js

Frontend:
cd client
npm run dev
