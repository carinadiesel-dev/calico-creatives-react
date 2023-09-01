import { IconEmail } from "../icons/IconEmail";
import { IconWeb } from "../icons/IconWeb";
import { IconFacebook } from "../icons/IconFacebook";
import { IconInsta } from "../icons/IconInsta";
import { IconWhatsapp } from "../icons/IconWhatsapp";

type FooterProps = {
  backgroundColor:
    | "bg-calicoPink-400"
    | "bg-calicoOrange-400"
    | "bg-calicoPeach-300";
};

export const Footer = ({ backgroundColor }: FooterProps) => {
  return (
    <div
      className={`${backgroundColor} flex flex-col justify-around items-center lg:items-center lg:justify-around h-96 sm:h-64 xl:h-72 w-full`}
    >
      <div className="flex flex-wrap justify-center gap-3 py-5 sm:gap-2 md:gap-4">
        <a href="mailto:info@calicocreatives.net">
          <IconEmail />
        </a>
        <a href="#">
          <IconWeb />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089310905944&mibextid=LQQJ4d">
          <IconFacebook />
        </a>
        <a href="https://instagram.com/calico.creatives?igshid=NTc4MTIwNjQ2YQ==">
          <IconInsta />
        </a>
        <a href="https://wa.me/27763124321">
          <IconWhatsapp />
        </a>
      </div>
      <div>
        <span className="text-2xl text-calicoWhite-400">
          Created by Calico Creatives
        </span>
      </div>
    </div>
  );
};
