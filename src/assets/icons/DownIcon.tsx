import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DownIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7 10L12 15L17 10"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DownIcon;
