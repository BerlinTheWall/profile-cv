import * as React from 'react';
import { Element } from 'react-scroll';
import fgLoginPage from '../assets/images/project/fg-loginPage.png';
import fgMainPage from '../assets/images/project/fg-mainPage.png';
import fgProgramModal from '../assets/images/project/fg-programModal.png';
import fgProgramPage from '../assets/images/project/fg-programPage.png';
import fgLicensePage from '../assets/images/project/fg-licensePurchase.png';
import fgMainMobile from '../assets/images/project/fg-mainPageMobile.png';
import fgDetailsMobile from '../assets/images/project/fg-detailsMobile.png';
import fgTableMobile from '../assets/images/project/fg-tableMobile.png';

import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

const MyProject: React.FC = () => {
  return (
    <Element id="MY PROJECTS" name="MY PROJECTS">
      <div className="w-full ml-auto mr-auto sm:container xs:px-5 sm:px-10 py-5 pt-20 bg-amber-400 bg-green-brown2">
        <div className="text-left">
          <h1 className="text-7xl font-semibold">My Projects</h1>
        </div>
        <div className="mt-10">
          <div className="text-left sm:pl-5 mb-5">
            <h1 className="text-5xl font-semibold">FG Iran project</h1>
          </div>
          <SlideshowLightbox className="grid xs:grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            <img className="w-full rounded-lg" src={fgLoginPage} alt="FG 1" />
            <img
              className="w-full rounded-lg h-96"
              src={fgMainPage}
              alt="FG 2"
            />
            <img
              className="w-full rounded-lg h-96"
              src={fgProgramModal}
              alt="FG 3"
            />
            <img className="w-full rounded-lg" src={fgProgramPage} alt="FG 4" />
            <img className="w-full rounded-lg" src={fgLicensePage} alt="FG 5" />
            <img className="w-full rounded-lg" src={fgMainMobile} alt="FG 6" />
            <img
              className="w-full rounded-lg"
              src={fgDetailsMobile}
              alt="FG 7"
            />
            <img className="w-full rounded-lg" src={fgTableMobile} alt="FG 8" />
          </SlideshowLightbox>
        </div>
      </div>
    </Element>
  );
};
export default MyProject;
