const Icon = ({
  children,
  padding,
}: {
  children: any;
  padding?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-2 bg-[#030712] hover:bg-[#1f2937] border border-[#1f2937] w-fit rounded-md cursor-pointer text-sm group duration-100 ${padding ? "px-2 py-1.5" : "p-2"}`}
    >
      {children}
    </div>
  );
};

export default Icon;
