import * as React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Button from '@mui/material/Button';
import Download from '@mui/icons-material/Download';
import { Element } from 'react-scroll';

const skills = [
  { name: 'Javascript', rate: 90 },
  { name: 'React', rate: 85 },
  { name: 'HTML 5', rate: 95 },
  { name: 'CSS', rate: 90 },
  { name: 'JQuery', rate: 90 },
  { name: 'Typescript', rate: 80 },
  { name: 'Tailwind', rate: 90 },
  { name: 'Bootstrap', rate: 95 },
  { name: 'Djano', rate: 80 },
  { name: 'English', rate: 90 },
];

const MyResume: React.FC = () => {
  return (
    <Element id="MY RESUME" name="MY RESUME">
      <div className="w-full ml-auto mr-auto sm:container xs:px-5 sm:px-10 py-5 pt-20 bg-slate-300 ">
        <div className="text-left">
          <h1 className="text-7xl font-semibold">My Resume</h1>
        </div>
        <div className="flex xs:flex-col sm:flex-row mt-5">
          <div className="xs:w-full sm:w-0 lg:w-1/4"></div>
          <div className="xs:w-full lg:w-3/4 sm:mt-5 text-xl lg:border-l-4 px-5 sm:py-6">
            <p className=" text-justify text-2xl">
              I have more than a year experience working as a web developer. I
              have worked at FG company as front-end developer and I developed,
              tested, deployed, and maintained their web applicaiton. I am also
              studying computer engineering at BIHE university and I am in my
              seventh semester. I have experience working with HTML 5, CSS,
              JavaScript, React js, JQuery, typescript, etc. I also got my FCE
              degree in English a few years back.
            </p>
            <div className="flex flex-col mt-5">
              <h1 className="text-5xl font-semibold text-left">Skills</h1>
              <div className="flex flex-col gap-4 mt-5 sm:px-5">
                {skills &&
                  skills.map((skill) => {
                    return (
                      <div
                        className="w-full flex flex-row gap-4 items-center justify-between"
                        key={skill.name}
                      >
                        <ProgressBar
                          className="xs:w-2/3 sm:w-5/6"
                          completed={skill.rate}
                          bgColor="black"
                          animateOnRender
                        />
                        <p className="xs:w-1/3 sm:w-1/6 xs:text-right text-2xl font-semibold">
                          {skill.name}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flex xs:flex-col sm:flex-row justify-between mt-5">
              <div className="xs:w-full sm:w-auto">
                <h1 className="text-5xl font-semibold text-left">Education</h1>
                <div className="pl-5 pt-5">
                  <p className="text-left">2020 - now</p>
                  <p className="text-left font-semibold text-2xl">
                    Bachelors of Computer Engineering
                  </p>
                  <p className="text-left font-semibold">BIHE University</p>
                </div>
              </div>
              <div className="xs:w-full sm:w-2/5 xs:mt-5 sm:mt-0">
                <h1 className="text-5xl font-semibold text-left">Experience</h1>
                <div className="pl-5 pt-5">
                  <p className="text-left">2022 - 2023</p>
                  <p className="text-left font-semibold text-2xl">
                    Front-end Developer
                  </p>
                  <p className="text-left font-semibold">FG Iran Inc.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <Button
                className="hover:text-gray-400"
                style={{ backgroundColor: 'white' }}
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Download />}
              >
                <a href="/resume.pdf" download="HoomanShahidi_Resume.pdf">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default MyResume;
