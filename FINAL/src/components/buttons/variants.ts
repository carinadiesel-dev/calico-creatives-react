const text = "text-calicoGray-400";
const hoverText = "hover:text-calicoWhite-400";

const buttonCustomVariants = {
  pink: {
    base: `bg-calicoPink-100 ${text}`,
    border: "border-calicoPink-400",
    hover: `hover:bg-calicoPink-400 ${hoverText}`,
  },
  pinkFocus: {
    base: "bg-calicoPink-400 text-calicoWhite-400",
    border: "border-calicoPink-400",
    hover:
      "hover:bg-calicoRedOrange-400 hover:text-calicoWhite-400 hover:border-calicoRedOrange-400",
  },
  orange: {
    base: `bg-calicoWhite-400/80 ${text}`,
    border: "border-calicoOrange-400",
    hover: `hover:bg-calicoOrange-400 hover:text-calicoWhite-400 ${hoverText}`,
  },
  peach: {
    base: `bg-calicoWhite-400/80 ${text}`,
    border: "border-calicoPeach-300",
    hover: `hover:bg-calicoPeach-300 hover:text-calicoWhite-400 ${hoverText}`,
  },
};

export default buttonCustomVariants;
