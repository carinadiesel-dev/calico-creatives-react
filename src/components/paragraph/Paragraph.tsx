type ParagraphProps = {
  text: string;
};

export const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="text-2xl xl:text-[40px] leading-relaxed font-brilon text-calicoGray-400 text-center px-12 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-20">
          {text}
        </p>
      </div>
    </div>
  );
};
