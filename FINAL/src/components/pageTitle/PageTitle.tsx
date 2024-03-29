type PageTitleProps = {
  title: string;
  titleColor: "text-calicoPink-400" | "text-calicoPeach-400";
  backgroundGradient:
    | "bg-gradient-to-r from-calicoWhite-200 to-calicoPink-400"
    | "bg-gradient-to-r from-calicoWhite-100 to-calicoOrange-400"
    | "bg-gradient-to-r from-calicoWhite-300 to-calicoPeach-300";
};

export const PageTitle = ({
  title,
  titleColor,
  backgroundGradient,
}: PageTitleProps) => {
  return (
    <div
      className={`flex flex-wrap items-end ${backgroundGradient} h-36 md:h-44 lg:h-64 xl:h-72`}
    >
      <h2
        className={`flex font-brilon text-4xl md:text-6xl xl:text-7xl pb-10 pl-6 xl:pl-12 ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
};
