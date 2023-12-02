'use client'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function Home() {
  const slideLeft = () => {
    let slider: HTMLElement | null = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 400
  }

  const slideRight = () => {
    let slider: HTMLElement | null = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 400
  }

  return (
    <div className="flex flex-col w-full">
      <article className="flex flex-col bg-indigo-900 text-center shadow-lg py-24 relative">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl">We are the Chads!</h1>
        <h2 className="text-sm sm:text-md mb-12">a family of friends, not family friendly films</h2>
        <img src="/group-photo.png" alt="chad-family-films-group-photo" className="max-h-[920px] min-h-[400px] px-3 sm:px-10 w-full object-cover"></img>
        <p className="mt-12 text-center px-12 md:px-28">Hello, we are Chad Family Films. Our director has the biggest head known to man, and we are dedicated to using all of her brain power for creating amazing short films. Check out our stuff down below!</p>
        <h3 className="text-sm absolute bottom-0 left-0 right-0 mb-4">Based in Salinas, CA</h3>
      </article>
      <div>
        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl my-10 md:my-44 text-center">Watch our Latest Work:</h1>
        <div className="relative">
          <MdChevronLeft size={70} onClick={slideLeft} className="absolute top-1/2 z-10 hover:cursor-pointer hover:bg-pink-300 rounded-full"/>
          <div id="slider" className="relative scrollbar-hide mx-3 sm:mx-10 py-5 sm:py-14 shadow-inner rounded-2xl flex overflow-x-auto scroll whitespace-nowrap scroll-smooth bg-pink-600">
            <iframe src="https://www.youtube.com/embed/3xedG21lsD0" className="min-h-[200px] min-w-[400px] sm:min-h-[450px] sm:min-w-[800px] rounded-xl mx-6"></iframe>
            <iframe src="https://www.youtube.com/embed/Gftxk1gwLlc" className="min-h-[200px] min-w-[400px] sm:min-h-[450px] sm:min-w-[800px] rounded-xl mx-6"></iframe>
            <iframe src="https://www.youtube.com/embed/66hCjybbQaU" className="min-h-[200px] min-w-[400px] sm:min-h-[450px] sm:min-w-[800px] rounded-xl mx-6"></iframe>
            <iframe src="https://www.youtube.com/embed/BDdyOiLS-0s" className="min-h-[200px] min-w-[400px] sm:min-h-[450px] sm:min-w-[800px] rounded-xl mx-6"></iframe>
            <iframe src="https://www.youtube.com/embed/sACcBsOppII" className="min-h-[200px] min-w-[400px] sm:min-h-[450px] sm:min-w-[800px] rounded-xl mx-6"></iframe>
          </div>
          <MdChevronRight size={70} onClick={slideRight} className="absolute top-1/2 z-10 right-0 hover:cursor-pointer hover:bg-pink-300 rounded-full"/>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl mt-10 md:mt-44 text-center">Follow us!</h1>
      </div>
    </div>
  )
}
