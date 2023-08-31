import React, { SVGProps } from "react";

type IconInstaProps = SVGProps<SVGSVGElement> & { size?: number };

export const IconInsta = ({ size = 1, ...rest }: IconInstaProps) => {
  return (
    <svg
      className="hover:fill-calicoRedOrange-400"
      width={95 * size}
      height={95 * size}
      viewBox="0 0 95 95"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        id="Path_53"
        data-name="Path 53"
        d="M157.525,148.352h-.131a9.926,9.926,0,0,0,0,19.852h.131a9.926,9.926,0,0,0,0-19.852"
        transform="translate(-110.112 -110.723)"
        fill="#fff"
        fill-rule="evenodd"
      />
      <path
        id="Path_54"
        data-name="Path 54"
        d="M132.1,97.556H106.992a10.268,10.268,0,0,0-10.255,10.255v24.98a10.268,10.268,0,0,0,10.255,10.255H132.1a10.268,10.268,0,0,0,10.255-10.255v-24.98A10.268,10.268,0,0,0,132.1,97.556m-12.49,37.733h-.131a14.988,14.988,0,0,1,0-29.976h.131a14.988,14.988,0,1,1,0,29.976m14.725-26.557a3.155,3.155,0,1,1,0-6.311,3.155,3.155,0,1,1,0,6.311"
        transform="translate(-72.2 -72.811)"
        fill="#fff"
        fill-rule="evenodd"
      />
      <path
        id="Path_55"
        data-name="Path 55"
        d="M47.347,0A47.348,47.348,0,1,0,94.7,47.348,47.347,47.347,0,0,0,47.347,0M74.891,60.111A14.926,14.926,0,0,1,60.035,74.967H34.66A14.926,14.926,0,0,1,19.8,60.111V34.868A14.926,14.926,0,0,1,34.66,20.012H60.035A14.926,14.926,0,0,1,74.891,34.868Z"
        fill="#fff"
        fill-rule="evenodd"
      />
    </svg>
  );
};
