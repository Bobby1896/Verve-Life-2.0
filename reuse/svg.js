import React from 'react-native';
import {Svg, Path} from 'react-native-svg';

export default function ChevronRight(props) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.573751 14.9826C0.130121 15.4313 0.116188 16.1734 0.542819 16.6404C0.761569 16.8795 1.05388 17 1.34648 17C1.62458 17 1.90269 16.8916 2.11893 16.6729L9.36414 9.34528C9.58261 9.12428 9.70605 8.81886 9.70605 8.49997C9.70605 8.18136 9.58261 7.87595 9.36414 7.65495L2.11893 0.32733C1.6753 -0.121413 0.969451 -0.107051 0.542819 0.359865C0.116188 0.82678 0.130121 1.56892 0.573751 2.01766L6.98325 8.49997L0.573751 14.9826Z"
        fill="white"
      />
    </Svg>
  );
}
