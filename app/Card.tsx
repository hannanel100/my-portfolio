type CardProps = {
  children: React.ReactNode;
  animateTo: "top" | "middle" | "bottom" | "none";
  className?: string;
};
const Card = ({ children, animateTo, className }: CardProps) => {
  const animateToClasses =
    animateTo === "top"
      ? "after:h-32 hover:after:top-0"
      : animateTo === "middle"
      ? "after:h-24 hover:after:top-[30%]"
      : animateTo === "bottom"
      ? "after:h-24 hover:after:top-[90%]"
      : "";
  return (
    <article
      className={`${animateToClasses} relative flex flex-col gap-2 rounded-lg bg-gray-800 p-4 ${
        animateTo !== "none" &&
        "after:absolute after:-left-[1px] after:top-2/3 after:h-32 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:via-orange-500 after:to-transparent after:opacity-0 after:transition-all after:duration-500 after:ease-in-out hover:after:top-0 hover:after:opacity-100"
      }  ${className}`}
    >
      {children}
    </article>
  );
};
export default Card;
