/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { crossBrowser } from '../constants';

import { defaultStyleList } from './default';
import { bounceStyleList } from './bounce';

const styleList = [...defaultStyleList, ...bounceStyleList];

export default function makeKeyframes() {
  const keyframes = crossBrowser.map((keyframe: string) => {
    const animation = styleList.map((style: (keyframes: string) => string) =>
      style(keyframe),
    );

    return animation.join(' ');
  });

  return keyframes.join(' ');
}
