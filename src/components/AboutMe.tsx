/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import ScrollAnimationItem from '../ScrollAnimationItem';
import { ScreenClasses } from '../types/ScreenClasses';
import useScreenClasses from '../utils/hooks/useScreenClasses';
import IconTag from './IconTag';
import { Element } from 'react-scroll';
import CheckIcon from '../assets/images/icon/check-circle-fill.svg';

const AboutMe: React.FC = () => {
  return (
    <>
      <Element id="ABOUT ME" name="ABOUT ME">
        <div className="w-full ml-auto mr-auto sm:container xs:px-5 sm:px-10 py-5 pt-20 bg-teal-600">
          <div className="text-left">
            <h1 className="text-7xl font-semibold">About Me</h1>
          </div>
          <div className="flex xs:flex-col sm:flex-row mt-5">
            <div className="xs:w-full sm:w-1/4 flex xs:flex-row sm:flex-col xs:gap-2 sm:gap-5 py-6 justify-evenly">
              <ScrollAnimationItem
                path={'top'}
                offsetHeight={200}
                duration={1000}
              >
                <IconTag
                  title="Hardworking"
                  icon={CheckIcon}
                  text={'2'}
                  disabled
                ></IconTag>
              </ScrollAnimationItem>
              <ScrollAnimationItem
                path={'top'}
                offsetHeight={200}
                duration={1500}
              >
                <IconTag
                  title="Ambitious"
                  icon={CheckIcon}
                  text={'2'}
                  disabled
                ></IconTag>
              </ScrollAnimationItem>
              <ScrollAnimationItem
                path={'top'}
                offsetHeight={200}
                duration={2000}
              >
                <IconTag
                  title="Motivated"
                  icon={CheckIcon}
                  text={'2'}
                  disabled
                ></IconTag>
              </ScrollAnimationItem>
            </div>
            <div className="xs:w-full sm:w-3/4 mt-5 text-xl sm:border-l-4 px-5 sm:py-6">
              <p className=" text-justify text-2xl">
                Since I was in the middle class, I had a great passion for
                computers and technology. I chose computer engineering as my
                course in university without any hesitation and since then I
                have always tried to learn new subjects about computers and
                programming. After my first semester, I started self-studying
                web programming and watched many videos online, and created some
                projects for myself.
                <br />
                <br /> I love using my creativity and imagination in programming
                so I think web development is a proper field for me. I also love
                to meet new people and work with them. I had a great experience
                at my last job and made really good friends there. I am
                motivated and if I start something new, I don’t quit it until I
                reach the level I want to be at. I really like learning new
                things, and I use my free time to learn new language programs
                and improve my skills.
              </p>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};
export default AboutMe;
