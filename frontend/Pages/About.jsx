import React from 'react'
import aboutImage from "../public/about.png"

const About = () => {
  return (
    <div>
       <div className='bg-black py-32 px-4 mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:7xl leading-snug font-bold mb-5'>Welcome to About Page</h1>
        </div>
    </div>

      <div className="aboutSecion text-center p-5">
     <h1 className='text-3xl font-bold mt-5'>Who We Are</h1>
    <p className='text-xl mt-3'>Welcome to Inkbot – a modern space for sharing knowledge, stories, and fresh perspectives. We are a team of tech enthusiasts, creators, and writers committed to bringing valuable content to curious minds across the globe.

At the heart of our platform is a simple goal: to make quality blogging accessible, engaging, and enjoyable. Whether you're here to read, learn, or share your own voice — you've come to the right place.

Built by a passionate Full Stack Developer, this platform leverages cutting-edge web technologies to ensure a smooth, fast, and user-friendly experience. From sleek interfaces to robust backend systems, everything has been crafted with care and purpose.

We believe in the power of writing — to educate, to inspire, and to connect. Dive into blogs across categories like Technology, Health, Lifestyle, Education, and more, and be part of a growing community of readers and thinkers.

Thanks for being here. Let’s grow, learn, and write — together.</p>
    <img className='w-full p-5' src={aboutImage} alt="" />
   </div>
    </div>
  )
}

export default About
