import {StyleSheet} from 'react-native';
import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const DownIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"></G>
      <G id="SVGRepo_iconCarrier">
        {' '}
        <Path
          d="M7 10L12 15L17 10"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></Path>{' '}
      </G>
    </Svg>
  );
};

export default DownIcon;

const styles = StyleSheet.create({});
