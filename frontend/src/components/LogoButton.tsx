interface LogoButtonProps {
  style?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const LogoButton = ({ style, onClick, children }: LogoButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 border broder-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 dark:border-gray-800 cursor-pointer ${
        style ? style : "p-2"
      }`}
    >
      {children}
    </div>
  );
};

export default LogoButton;
