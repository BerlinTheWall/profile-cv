/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { ScreenClasses } from '../types/ScreenClasses';
import useScreenClasses from '../utils/hooks/useScreenClasses';

const IntroSize: ScreenClasses = {
  lg: 'w-1/4 max-w-min mr-52 mt-36',
  sm: 'w-1/2 max-w-min mr-10 mt-36',
  xs: 'w-full mr-5 ml-5 mt-44',
};

interface Props {
  title: string;
  text: string;
  className?: string;
}

const Tag: React.FC<Props> = ({ title, text, className }) => {
  return (
    <div className={`flex flex-col text-left gap-3 ${className}`}>
      <div className="text-4xl font-semibold">{title}</div>
      <div className="text-4xl font-bold italic">{text}</div>
    </div>
  );
};
export default Tag;
