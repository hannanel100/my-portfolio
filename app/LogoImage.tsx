import Image from "next/image";
const LogoImage = ({ size }: { size: "sm" | "lg" }) => {
  return (
    <Image
      src={size === 'sm' ? "https://res.cloudinary.com/divvyla3a/image/upload/c_scale,w_50/v1695197330/logo_sm.avif" : "/logo.avif"}
      width={size === "sm" ? 50 : 300}
      height={size === "sm" ? 50 : 300}
      alt="me"
      className={`${size === "lg" ? "hidden sm:block" : ""}`}
      loading="lazy"
    />
  );
};

export default LogoImage;
