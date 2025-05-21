import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-black py-32 px-4 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:7xl leading-snug font-bold mb-5">
            Welcome to Service Page
          </h1>
        </div>
      </div>
      <div className="servicesCard text-center p-5">
        <h1 className="text-3xl font-bold mt-3">Our Services</h1>
        <p className="text-xl mt-3">
          At Inkbot, we’re more than just a blog — we’re a platform built to
          support creators, inspire readers, and power meaningful content.
          Whether you’re an individual looking to share your voice or a business
          aiming to reach a broader audience, we offer services designed to help
          you succeed in the digital space.
        </p>
      </div>

      <div className="border border-gray-700 p-5 shadow-lg mt-5">
        <h3 className="text-xl font-bold">Content Publishing</h3>
        <p className="mt-3">
          Easily create, manage, and publish blogs with our intuitive,
          user-friendly editor. Share your thoughts with a global audience in
          just a few clicks.
        </p>
      </div>

      <div className="border border-gray-700 p-5 shadow-lg  mt-5">
        <h3 className="text-xl font-bold">
          {" "}
          Website Development & Maintenance
        </h3>
        <p className="mt-3">
          As a Full Stack Developer–led platform, we offer custom web
          development services for bloggers and small businesses looking to
          build or upgrade their own websites.{" "}
        </p>
      </div>

      <div className="border border-gray-700 p-5 shadow-lg  mt-5">
        <h3 className="text-xl font-bold">SEO Optimization</h3>
        <p className="mt-3">
          We help you structure your blog posts for maximum visibility with
          built-in tools and best practices that improve your search engine
          rankings organically.{" "}
        </p>
      </div>

      <div className="border border-gray-700 p-5 shadow-lg  mt-5">
        <h3 className="text-xl font-bold">Full Platform Support</h3>
        <p className="mb-5">
          From UI/UX improvements to backend optimization — we ensure the
          platform remains fast, secure, and always improving with the latest
          web technologies.
        </p>
      </div>
    </div>
  );
};

export default Services;
