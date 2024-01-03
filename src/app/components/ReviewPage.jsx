"use client "

import ReviewPageData from "./ReviewPageData"



const ReviewPage = () => {

  const slides = [
    {
      text: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."',
      name: 'John Doe',
    },
    {
      text: 'Sometimes you may want to optimize a remote image, but still use the built-in Next.js Image Optimization API.',
      name: 'Akash',
    },
    // Add more slides as needed
  ];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
          <div className="w-[850px] h-[250px] bg-blue-200 rounded-sm flex items-center justify-center mx-auto mt-14 mb-4">
          <ReviewPageData slides={slides}/>
          </div>
      </div>
    </div>
  )
}

export default ReviewPage