import { SVGProps } from "react";

type IconFacebookProps = SVGProps<SVGSVGElement> & { size?: number };

export const IconFacebook = ({ size = 1, ...rest }: IconFacebookProps) => {
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
        d="M47.348,0A47.348,47.348,0,1,0,94.7,47.348,47.348,47.348,0,0,0,47.348,0M59.881,28.469h-4.9c-2.71,0-5.55,1.678-5.55,4.646v8H59.494L57.816,51.7H49.428V77.9H38.071V51.7h-9.55V41.116h9.55V33.244c0-7.872,4.646-14.454,13.034-13.938l8.776.387Z"
        transform="translate(-0.001)"
        fill="#fff"
        fill-rule="evenodd"
      />
    </svg>
  );
};
