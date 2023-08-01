import React from "react";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const Skill = () => {
  return (
    <div name="skill" className="flex justify-center bg-gray-100 w-full py-10 px-8 mb-10 h-screen">
      <div className="flex flex-col justify-center w-full">
        <div>
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="text-gray-600 pb-8">These are the technologies I've worked with.</p>
        </div>
        <div className="w-full mx-auto grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          <div >
            <SiCplusplus className="mx-auto text-6xl text-blue-800"/>
          </div>
          <div >
            <SiHtml5 className="mx-auto text-6xl text-orange-600" />
          </div>
          <div >
            <SiCss3 className="mx-auto text-6xl text-blue-600" />
          </div>
          <div >
            <SiTailwindcss className="mx-auto text-6xl text-blue-600" />
          </div>
          <div >
            <SiJavascript className="mx-auto text-6xl text-yellow-500" />
          </div>
          <div >
            <SiReact className="mx-auto text-6xl text-blue-500" />
          </div>
          <div >
            <SiNodedotjs className="mx-auto text-6xl text-green-800" />
          </div>
          <div >
            <SiMongodb className="mx-auto text-6xl text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
