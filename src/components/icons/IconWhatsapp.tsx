import { SVGProps } from "react";

type IconWhatsappProps = SVGProps<SVGSVGElement> & { size?: number };

export const IconWhatsapp = ({ size = 1, ...rest }: IconWhatsappProps) => {
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
        d="M95.933,119.507a23.52,23.52,0,0,0,3.627,12.414l-.279,2.092-.558,4.184-.418,3.208,3.347-.558,3.905-.7,2.371-.419a22.682,22.682,0,0,0,11.019,2.79c18.079,0,31.347-20.94,16.831-39.846-18.906-14.516-39.846-1.247-39.846,16.831M131.5,129.689l-1.255,1.534c-1.813,2.232-3.348,2.371-5.719,1.813a26.227,26.227,0,0,1-18.691-17.854,6.989,6.989,0,0,1,3.348-8.229c1.534-.976,2.511-.279,3.069,1.255l1.395,3.627s.976,1.953-1.534,3.905c-.419.279-.419.279-.279.976.558,1.674,2.79,6.7,9.9,10.6.7.419.837.419,1.534-.14l1.813-1.813c1.255-1.116,1.953-1.534,3.068-.7.837.558,1.674,1.255,2.511,1.813.837.7,2.232,1.534.837,3.208"
        transform="translate(-71.6 -72.017)"
        fill="#fff"
        fill-rule="evenodd"
      />
      <path
        id="Path_52"
        data-name="Path 52"
        d="M47.348,0A47.348,47.348,0,1,0,94.7,47.348,47.348,47.348,0,0,0,47.348,0m0,74.967a26.55,26.55,0,0,1-11.577-2.511L21.125,74.967l1.953-14.506-.14-.279A27.5,27.5,0,1,1,47.348,74.967"
        fill="#fff"
        fill-rule="evenodd"
      />
    </svg>
  );
};