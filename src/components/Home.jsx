import React from "react"
import voice_image from "../assets/voice_image.png"
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='md:flex justify-center items-center  '>
          <div className='w-[50%] m-5 ml-28 text-white flex flex-col  items-start gap-10'>
            <h1 className='text-3xl font-bold '>
              High Quality, human-Like Ai VoiceGenerator
            </h1>
            <p className=' text-sm'>
              Our Ai Text-to-speech technology offers thousands of high-quality
              human-Like voices in 32 languages whther you need a free
              text-to-speech solution or premium voice Ai service for commercial
              project our tools can fulfill you requirements.
            </p>
            <Link to = "/Voice">
             <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
              Get Started
            </button>
            </Link>
           
          </div>
          <div className='w-[35%] mb-34'>
            <img
              src={voice_image}
              alt=''
              className='w-[70%]'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
