/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { ScreenClasses } from '../types/ScreenClasses';
import useScreenClasses from '../utils/hooks/useScreenClasses';
import IconTag from './IconTag';
import ProgressBar from '@ramonak/react-progress-bar';
import Button from '@mui/material/Button';
import Download from '@mui/icons-material/Download';
import { Element } from 'react-scroll';
import fgLoginPage from '../assets/images/project/fg-loginPage.png';
import fgMainPage from '../assets/images/project/fg-mainPage.png';
import fgProgramModal from '../assets/images/project/fg-programModal.png';
import fgProgramPage from '../assets/images/project/fg-programPage.png';
import fgLicensePage from '../assets/images/project/fg-licensePurchase.png';
import fgMainMobile from '../assets/images/project/fg-mainPageMobile.png';
import fgDetailsMobile from '../assets/images/project/fg-detailsMobile.png';
import fgTableMobile from '../assets/images/project/fg-tableMobile.png';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

const IntroSize: ScreenClasses = {
  lg: 'w-1/4 max-w-min mr-52 mt-36',
  sm: 'w-1/2 max-w-min mr-10 mt-36',
  xs: 'w-full mr-5 ml-5 mt-44',
};

const MyProject: React.FC = () => {
  return (
    <Element id="MY PROJECTS" name="MY PROJECTS">
      <div className="w-full ml-auto mr-auto sm:container xs:px-5 sm:px-10 py-5 pt-20 bg-amber-400">
        <div className="text-left">
          <h1 className="text-7xl font-semibold">My Projects</h1>
        </div>
        <div className="mt-10">
          <div className="text-left sm:pl-5 mb-5">
            <h1 className="text-5xl font-semibold">FG Iran project</h1>
          </div>
          <SlideshowLightbox className="grid xs:grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            <img className="w-full rounded-lg" src={fgLoginPage} />
            <img className="w-full rounded-lg h-96" src={fgMainPage} />
            <img className="w-full rounded-lg h-96" src={fgProgramModal} />
            <img className="w-full rounded-lg" src={fgProgramPage} />
            <img className="w-full rounded-lg" src={fgLicensePage} />
            <img className="w-full rounded-lg" src={fgMainMobile} />
            <img className="w-full rounded-lg" src={fgDetailsMobile} />
            <img className="w-full rounded-lg" src={fgTableMobile} />
          </SlideshowLightbox>
        </div>
      </div>
    </Element>
  );
};
export default MyProject;
