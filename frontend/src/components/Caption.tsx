interface CaptionProps {
  cap: string;
}

const Caption = ({ cap }: CaptionProps) => {
  return (
    <div className="w-fit bg-blue-200 text-xs px-2 py-1 rounded mb-3 font-extrathin text-gray-700">
      {cap}
    </div>
  );
};

export default Caption;