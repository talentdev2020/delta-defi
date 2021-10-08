import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 70 70" {...props}>
      <path d="M25.1926 40.962V36.1965C28.7041 35.7838 31.4165 33.2735 31.4165 30.2387C31.4165 27.2066 28.7041 24.6977 25.1926 24.285V16.2949C27.5861 16.6569 29.3975 18.2792 29.3975 20.2212C29.3975 20.7791 29.8491 21.2307 30.407 21.2307C30.9649 21.2307 31.4165 20.7791 31.4165 20.2212C31.4165 17.1863 28.7034 14.6754 25.1926 14.2648V9.49781C25.1926 8.93989 24.741 8.48828 24.1831 8.48828C23.6251 8.48828 23.1735 8.93989 23.1735 9.49781V14.2655C19.6593 14.6761 16.9434 17.187 16.9434 20.2226C16.9434 23.2546 19.6593 25.7628 23.1735 26.1734V34.1684C20.7772 33.8078 18.9624 32.1841 18.9624 30.2393C18.9624 29.6814 18.5108 29.2298 17.9529 29.2298C17.395 29.2298 16.9434 29.6814 16.9434 30.2393C16.9434 33.277 19.6593 35.7893 23.1735 36.1986V40.9627C23.1735 41.5206 23.6251 41.9723 24.1831 41.9723C24.741 41.9723 25.1926 41.5199 25.1926 40.962ZM29.3975 30.2387C29.3975 32.1806 27.5868 33.8029 25.1926 34.1663V26.3152C27.5868 26.6786 29.3975 28.2988 29.3975 30.2387ZM18.9624 20.2219C18.9624 18.2792 20.7765 16.6569 23.1735 16.2956V24.1426C20.7765 23.7813 18.9624 22.1617 18.9624 20.2219Z" fill={props.color || "white"}/>
      <path d="M45.5182 25.2287C45.5182 13.4618 35.9447 3.88965 24.1771 3.88965C12.4094 3.88965 2.83594 13.4618 2.83594 25.2287C2.83594 36.9957 12.4094 46.5692 24.1771 46.5692C35.9447 46.5692 45.5182 36.9957 45.5182 25.2287ZM4.85499 25.2287C4.85499 14.5755 13.5225 5.90871 24.1771 5.90871C34.8317 5.90871 43.4992 14.5755 43.4992 25.2287C43.4992 35.8826 34.8317 44.5501 24.1771 44.5501C13.5225 44.5501 4.85499 35.8833 4.85499 25.2287Z" fill={props.color || "white"}/>
      <path d="M66.6129 44.6997L64.4945 36.4477C64.357 35.9092 63.8053 35.5847 63.2689 35.7202L55.0739 37.7956C54.5333 37.9317 54.2061 38.4813 54.343 39.0219C54.4791 39.5624 55.0308 39.889 55.5693 39.7528L61.4284 38.2694L50.7724 54.8498L43.8947 44.8233C43.6981 44.5371 43.382 44.3933 43.0179 44.3856C42.6698 44.4009 42.3544 44.5948 42.1828 44.8977L32.9358 61.269L23.1657 54.1203C22.7488 53.8153 22.1666 53.8744 21.8192 54.26L11.6614 65.5531C11.2883 65.9679 11.3223 66.6064 11.7371 66.9788C11.9303 67.1525 12.1713 67.2379 12.4117 67.2379C12.6883 67.2379 12.9634 67.1254 13.1628 66.9037L22.7099 56.2895L32.66 63.5702C32.8927 63.7404 33.1887 63.8043 33.4687 63.7418C33.7508 63.6813 33.9933 63.5028 34.135 63.2519L43.145 47.3024L49.9672 57.2469C50.1582 57.5255 50.4709 57.6915 50.8148 57.6853C51.1532 57.6797 51.4665 57.506 51.6493 57.2212L63.1494 39.3276L64.6578 45.2027C64.7745 45.6585 65.1851 45.9614 65.6347 45.9614C65.7174 45.9614 65.8021 45.951 65.8862 45.9295C66.426 45.7898 66.7519 45.2395 66.6129 44.6997Z" fill={props.color || "white"}/>
    </Svg>
  );
};

export default Icon;
