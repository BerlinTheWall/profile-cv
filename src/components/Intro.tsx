import * as React from 'react';
import { ScreenClasses } from '../types/ScreenClasses';
import useScreenClasses from '../utils/hooks/useScreenClasses';
import myProfile from '../assets/images/profile/my-profile2.jpg';
import ScrollAnimationItem from '../ScrollAnimationItem';
import Tag from './Tag';
import IconTag from './IconTag';
import LinkedInIcon from '../assets/images/icon/linkedin.svg';
import GithubIcon from '../assets/images/icon/github.svg';
import TelegramIcon from '../assets/images/icon/telegram.svg';
import EmailIcon from '../assets/images/icon/envelope.svg';
import { Alert, Snackbar, Tooltip } from '@mui/material';

const IntroSize: ScreenClasses = {
  lg: '',
  sm: '',
  xs: 'flex-col-reverse w-full',
};

const Intro: React.FC = () => {
  const IntroClasses = useScreenClasses(IntroSize);
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = (): void => {
    navigator.clipboard.writeText('hooman.ksh@gmail.com');
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div
        className={`flex justify-center items-center ml-auto mr-auto sm:container px-5 py-5 ${IntroClasses}`}
      >
        <div
          className={`w-1/2 flex flex-col px-5 justify-center xs:w-full xs:mt-5`}
        >
          <div className="flex flex-col text-left xs:gap-3">
            <h1 className="text-5xl">Web Developer</h1>
            <h2 className="text-6xl font-semibold">Hooman Shahidi</h2>
          </div>
          <div className="mt-5 text-xl">
            <p className=" text-justify">
              Passionate and motivated web developer seeking better
              opportunities. I have worked for about a year as a front-end
              developer at FG company. I am studying computer engineering at
              BIHE university. I am hardworking and dedicated to my job, and
              always trying to improve my skills.
            </p>
          </div>
          <div className="flex justify-evenly pt-10">
            <IconTag
              href="https://linkedin.com/in/hooman-shahidi-5927b4103"
              title="Linked In"
              className="hover:scale-110 ease-in-out duration-200"
              icon={LinkedInIcon}
              text={'2'}
            ></IconTag>
            <IconTag
              href="https://github.com/BerlinTheWall"
              title="Github"
              className="hover:scale-110 ease-in-out duration-200"
              icon={GithubIcon}
              text={'2'}
            ></IconTag>
            <IconTag
              href="https://t.me/TheWhoman"
              title="Telegram"
              className="hover:scale-110 ease-in-out duration-200"
              icon={TelegramIcon}
              text={'2'}
            ></IconTag>
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isOpen}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                Email address is copied to clipboard.
              </Alert>
            </Snackbar>
            <Tooltip title="Copy Email Address" arrow>
              <div>
                <IconTag
                  onClick={handleClick}
                  title="Email"
                  className="hover:scale-110 ease-in-out duration-200"
                  icon={EmailIcon}
                  text={'2'}
                ></IconTag>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="w-1/2 px-5 xs:w-full">
          <img
            className="w-full rounded-3xl"
            src={myProfile}
            alt="my profile"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-left container ml-auto mr-auto py-5 xs:ml-10 sm:ml-auto xs:gap-6 xs:border-l-4 xs:pl-5 sm:border-0 xs:flex-col sm:flex-row">
        <ScrollAnimationItem path={'top'} offsetHeight={100} duration={1000}>
          <Tag title={'City'} text={'Tehran'} />
        </ScrollAnimationItem>
        <ScrollAnimationItem path={'top'} offsetHeight={100} duration={1500}>
          <Tag title={'Experience'} text={'1+ Year'} />
        </ScrollAnimationItem>
        <ScrollAnimationItem path={'top'} offsetHeight={100} duration={2000}>
          <Tag title={'Date of Birth'} text={'5 Feb 2001'} />
        </ScrollAnimationItem>
      </div>
    </>
  );
};
export default Intro;
