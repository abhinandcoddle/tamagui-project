import React from 'react';
import Svg, {Path} from 'react-native-svg';

const notification = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">

      <Path
        d="M17.7338 9.69045C17.467 9.78918 17.2687 10.0354 17.2687 10.32V11.7998C17.2687 12.1949 17.3501 12.6504 17.4629 13.0619C17.576 13.4742 17.737 13.9016 17.9291 14.2346L17.9362 14.2466L19.0856 16.1556C19.4993 16.846 19.1641 17.7395 18.4133 17.9877L18.411 17.9884C14.2558 19.3767 9.77316 19.3769 5.61782 17.9889C5.16105 17.8339 4.89821 17.5487 4.78829 17.2518C4.6786 16.9556 4.69238 16.5703 4.94123 16.1566L6.09123 14.2466L6.09292 14.2438C6.29321 13.9079 6.45791 13.4774 6.57263 13.0641C6.68728 12.6511 6.76871 12.1951 6.76871 11.7998V8.90978C6.76871 6.45563 8.45959 4.39046 10.738 3.81762C10.9933 3.75345 11.2022 3.55952 11.291 3.31178C11.4745 2.80015 11.1219 2.19683 10.5906 2.31155C7.55081 2.9679 5.26871 5.67545 5.26871 8.90978V11.7998C5.26871 12.0144 5.22013 12.3284 5.12728 12.6629C5.03471 12.9964 4.91476 13.2903 4.80526 13.4745L4.80449 13.4757L3.65618 15.3829C3.19514 16.1491 3.09883 17.009 3.38162 17.7727C3.66409 18.5356 4.29585 19.1251 5.13826 19.4102L5.14104 19.4111C9.60492 20.9025 14.4213 20.9027 18.8852 19.4115C20.5535 18.8592 21.2774 16.8932 20.3718 15.3839L19.2252 13.4795C19.1181 13.2922 19.0005 12.9971 18.9095 12.6652C18.8173 12.3291 18.7687 12.0146 18.7687 11.7998V10.3321C18.7687 9.83234 18.2025 9.51706 17.7338 9.69045Z"
        fill="black"
      />
      <Path
        d="M15.0195 19.0596C15.0195 20.7096 13.6695 22.0596 12.0195 22.0596C11.1995 22.0596 10.4395 21.7196 9.89953 21.1796C9.35953 20.6396 9.01953 19.8796 9.01953 19.0596"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M16 8C17.6569 8 19 6.65685 19 5C19 3.34315 17.6569 2 16 2C14.3431 2 13 3.34315 13 5C13 6.65685 14.3431 8 16 8Z"
        stroke="green"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default notification;