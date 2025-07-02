// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
   className="py-24 pb-24 px-[2vw] md:px-[2vw] lg:px-[4vw] font-sans bg-skills-gradient clip-path-custom"

  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects .
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 lg:gap-10 py-10 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[47%] lg:w-[45%]
 rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-sm sm:text-base text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

// import React, { useState, useEffect } from 'react';
// import '../Skills/Skills.css'

// const initialSkills = [
//   { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//   { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//   { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   { name: "GitHub", img: "https://dev-diwa.vercel.app/static/media/github.3b9e32903aa89111875d.png" },
//   { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
//   { name: "jQuery", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
//   { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
// ];

// const Skills = () => {
//   const [skills, setSkills] = useState([]);  

//   useEffect(() => {
//     setTimeout(() => {
//       setSkills(initialSkills);
//     }, 1000); 
//   }, []); 

//   return (
//     <section className="skills-section py-5 text-white bg-black" id="skills">
//       <div className="container text-center">
//         <h2 className="section-title mb-3">Skills</h2>
//         <p className="mb-5">These are the technologies I've worked with</p>

//         {skills.length === 0 ? (
//           <p>Loading skills...</p> 
//         ) : (
//           <div className="row justify-content-center g-4">
//             {skills.map((skill, index) => (
//               <div className="col-6 col-md-3" key={index}>
//                 <div className="skill-card p-3 rounded-3">
//                   <img
//                     src={skill.img}
//                     alt={skill.name}
//                     className="img-fluid mb-2"
//                     style={{ height: "60px" }}
//                   />
//                   <h6 className="mt-2">{skill.name}</h6>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Skills;


