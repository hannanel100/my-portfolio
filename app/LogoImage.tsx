import Image from "next/image";
const LogoImage = ({ size }: { size: "sm" | "lg" }) => {
  return (
    <Image
      src={"/logo.avif"}
      width={size === "sm" ? 50 : 300}
      height={size === "sm" ? 50 : 300}
      alt="me"
      className={`${size === "lg" ? "hidden sm:block" : ""}`}
      loading="lazy"
    />
  );
};

export default LogoImage;
