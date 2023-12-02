'use client'

import { Carousel } from 'flowbite-react'
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { SiGofundme } from "react-icons/si"

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full mb-10 md:mb-44">
      <article className="flex flex-col text-center pb-24 py-20 relative">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl">We are the <span className="text-pink-500">Chads!</span></h1>
        <h2 className="text-sm sm:text-md mb-12">a family of friends, <span className="text-pink-400 font-bold">not family friendly films</span></h2>
        <img src="/group-photo.png" alt="chad-family-films-group-photo" className="max-h-[920px] min-h-[400px] px-3 sm:px-10 w-full object-cover"></img>
        <p className="mt-12 text-center px-12 md:px-28">Hello, we are Chad Family Films. Our director has the biggest head known to man, and we are dedicated to using all of her brain power for creating amazing short films. Check out our stuff down below!</p>
        <h3 className="text-sm absolute bottom-0 left-0 right-0 mb-4">Based in Salinas, CA</h3>
      </article>
      <div>
        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl my-10 md:my-16 text-center">Latest <span className="text-pink-500">Stuff</span></h1>
        <div className="h-80 sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[900px] mx-2">
          <Carousel slideInterval={5000}>
            <iframe src="https://www.youtube.com/embed/3xedG21lsD0" className="h-full w-full"></iframe>
            <iframe src="https://www.youtube.com/embed/Gftxk1gwLlc" className="h-full w-full"></iframe>
            <iframe src="https://www.youtube.com/embed/66hCjybbQaU" className="h-full w-full"></iframe>
            <iframe src="https://www.youtube.com/embed/BDdyOiLS-0s" className="h-full w-full"></iframe>
            <iframe src="https://www.youtube.com/embed/sACcBsOppII" className="h-full w-full"></iframe>
          </Carousel>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl mt-10 md:mt-36 text-center">Follow <span className="text-pink-500">Us!</span></h1>
        <div className="flex h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 md:mt-44">
          <a href="https://www.instagram.com/chadfamilyfilms/" target="_blank" className="h-full w-full">
            <FaInstagram  className="h-full w-full px-8 hover:text-pink-500"/>
          </a>
          <a href="https://www.youtube.com/channel/UCR_m2VDMGNI8djHjGe3baAQ" target="_blank"  className="h-full w-full">
            <FaYoutube  className="h-full w-full px-8 hover:text-pink-500"/>
          </a>
          <a href="https://www.gofundme.com/f/chad-family-films?utm_campaign=p_lico+share-sheet&utm_medium=copy_link&utm_source=customer" target="_blank"  className="h-full w-full">
            <SiGofundme className="h-full w-full px-8 hover:text-pink-500"/>
          </a>
        </div>
      </div>
    </div>
  )
}
