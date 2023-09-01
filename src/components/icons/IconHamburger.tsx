import { SVGProps } from "react";

type IconHamburgerProps = SVGProps<SVGSVGElement> & { size?: number };

export const IconHamburger = ({ size = 1, ...rest }: IconHamburgerProps) => {
  return (
    <svg
      className="hover:fill-calicoRedOrange-400"
      width={24 * size}
      height={24 * size}
      viewBox="0 0 24 24"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4 18L20 18"
        stroke="#F75742"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#F75742"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#F75742"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
