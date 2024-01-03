import { FaCheck } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <div className="mt-6 -ml-10">
        <h1 className="text-2xl font-bold text-black">About the course</h1>

        <div className="max-w-[380px] mt-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            rem temporibus accusantium quasi at eligendi debitis fuga nulla
            provident ex, libero blanditiis. Est eligendi iste corporis nulla?
            Commodi, nostrum temporibus?
          </p>
        </div>

        <div className="max-w-[380px] mt-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            rem temporibus accusantium quasi at eligendi debitis fuga nulla
            provident ex, libero blanditiis.{" "}
          </p>
        </div>

        <div className="max-w-[380px] mt-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            rem temporibus accusantium quasi at eligendi debitis fuga nulla
            provident ex, libero blanditiis. Est eligendi iste corporis nulla?
            Commodi, nostrum temporibus?
          </p>
        </div>

        <div className="mt-8">
          <p className="text-[20px] font-bold">
            What to expect from the course
          </p>

          <div className="flex items-center mt-5 mb-3  ">
            <FaCheck className="mr-6" />
            Learn to manage your relationships
          </div>

          <div className="flex items-center mt-5 mb-3  ">
            <FaCheck className="mr-6" />
            Better communication
          </div>

          <div className="flex items-center mt-5 mb-3  ">
            <FaCheck className="mr-6" />
            Time management
          </div>

          <div className="flex items-center mt-5 mb-3  ">
            <FaCheck className="mr-6" />
            Forgiveness
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[20px] font-bold">Key topics covered</p>

          <div className="max-w-[380px] mt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              rem quae quisquam eveniet sint distinctio recusandae nisi saepe,
              cum odit quia reprehenderit facere fugit, enim obcaecati,
              doloribus eligendi. Laboriosam, ab.sint distinctio recusandae nisi
              saepe
            </p>
          </div>

          <div className="flex mt-5 mb-3 max-w-[380px]  ">
            <div className="mt-1">
              <FaCheck className="mr-6" />
            </div>
            <div>
              <span className="font-bold">
                10 written and audio sessions guiding
              </span>{" "}
              you in decoding the language of numbers so that you can easily
              receive their insights and messages.
            </div>
          </div>

          <div className="flex mt-5 mb-3 max-w-[380px]  ">
            <div className="mt-1">
              <FaCheck className="mr-6" />
            </div>
            <div>
              <span className="font-bold">
              Intuitive exercises and homework 
              </span>{" "}
              walk you through the energies and values of numbers and number sequences so you can become your own authority.
            </div>
          </div>

          <div className="flex mt-5 mb-3 max-w-[380px]  ">
            <div className="mt-1">
              <FaCheck className="mr-6" />
            </div>
            <div>
              <span className="font-bold">
              A Handy reference
              </span>{" "}
              to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.
            </div>
          </div>

          <div className="flex mt-5 mb-3 max-w-[380px]  ">
            <div className="mt-1">
              <FaCheck className="mr-6" />
            </div>
            <div>
              <span className="font-bold">
              Expert techniques
              </span>{" "}
              for manifestation offer simple ways to use numbers to co-create with the universe.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
