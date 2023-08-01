import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="w-80 pt-4 pb-8 md:w-full">
          <img
            className="object-cover"
            src="https://static.vecteezy.com/system/resources/previews/005/879/568/non_2x/web-designer-modern-flat-concept-for-web-banner-design-man-working-with-website-layout-places-images-and-other-graphic-elements-optimized-page-code-illustration-with-isolated-people-scene-vector.jpg"
            alt=""
          />
        </div>

        <div className="flex w-full flex-col justify-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-slate-600 pt-1 pb-4">
            Welcome! to my portfolio. This portfolio was designed using Tailwind
            CSS for learning purpose.
          </p>

          <div>
            <Link to="skill" smooth duration={500} className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Scroll Down
              <span className="group-hover:rotate-90 duration-300 pl-0.5 text-2xl">
                <BsArrowRightShort />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
