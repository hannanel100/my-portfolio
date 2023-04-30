type TooltipProps = {
  children: React.ReactNode;
  text: string;
  location: "top" | "bottom";
};

const Tooltip = ({ children, text, location }: TooltipProps) => {
  const tooltipLocation = {
    top: "-translate-y-16",
    bottom: "translate-y-full",
  };
  return (
    <div className="group relative flex">
      {children}
      <span
        className={`absolute left-1/2 m-4 mx-auto -translate-x-1/2 ${tooltipLocation[location]} rounded-md bg-gray-800 px-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
