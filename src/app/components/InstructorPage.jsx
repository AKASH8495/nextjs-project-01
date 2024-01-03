import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const InstructorPage = () => {
  return (
    <div>
        <div className="flex flex-col items-center  mt-8">
            <h1 className="text-2xl font-bold text-black -ml-[570px] mb-5">About the Instructor</h1>
            <div className="flex items-center justify-between gap-10">
                <div className=" flex ml-32">
                    <Image src="/images/img-2.jpg" width={100} height={100} className="img-1"/>
                    <p className="max-w-[380px] ml-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quos necessitatibus eius odit recusandae odio blanditiis. Fugit voluptatibus quos minima velit. Ipsam quisquam earum quas odit soluta qui eius dolore!</p>
                </div>

                <div className="max-w-[380px]">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus harum soluta sunt laboriosam, magni eligendi quas voluptate illum qui laudantium molestias omnis itaque deserunt fuga! Vel perferendis sed quisquam!</p>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-5 gap-12">

            <div className="flex items-center">
            <FaFacebook className="mr-2 text-blue-600"/> Facebook
            </div>

            <div className="flex items-center">
            <FaSquareXTwitter className="mr-2"/> Twitter
            </div>

            <div className="flex items-center">
            <FaYoutube className="mr-2 text-red-500"/> Youtube
            </div>

            <div className="flex items-center">
            <FaInstagram  className="mr-2 text-pink-500"/> Instagram
            </div>


        </div>
    </div>
  )
}

export default InstructorPage