import { getAbout } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
type CtaButtonProps = {
  text: "projects" | "technologies" | "blog" | "contact";
};
const CtaButtons = ({ text }: CtaButtonProps) => {
  return (
    <button className="w-32 rounded-full border border-solid border-slate-950 bg-gradient-to-tr from-teal-500 to-orange-500 px-4 py-2 font-bold text-white transition duration-500 ease-in-out hover:border hover:border-solid hover:border-teal-200 hover:bg-white hover:bg-clip-text hover:text-transparent">
      <Link href={`/${text}`} className="uppercase">
        {text}
      </Link>
    </button>
  );
};

export default async function Home() {
  const about = await getAbout();
  const socials = about.map((item) =>
    item.socials.map((social) => {
      const obj = {
        social: social.name,
        link: social?.url,
        icon:
          social.name === "Github" ? (
            <FaGithub className="text-2xl text-orange-300" />
          ) : social.name === "Linkedin" ? (
            <FaLinkedin className="text-2xl text-orange-300" />
          ) : (
            <FaEnvelope className="text-2xl text-orange-300" />
          ),
        id: social._key,
        email: social?.email,
      };
      return obj;
    })
  )[0];
  console.log("🚀 ~ file: page.tsx:40 ~ Home ~ socials:", socials);

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-7xl">
          Hello I&apos;m{" "}
          <span className="bg-gradient-to-tr  from-teal-500 to-orange-500 bg-clip-text text-transparent">
            Hannanel!
          </span>
        </h1>
        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="me"
          className="hidden sm:block"
        />
      </div>
      <section id="about" className="mt-8">
        <h2 className="text-3xl font-bold text-gray-400">About Me</h2>
        <div className="mt-5">
          {about &&
            about.map((item) => (
              <div key={item._id}>
                <PortableText value={item.text} />
                {socials && (
                  <div className="mt-4 flex gap-4">
                    {socials.map((element) => (
                      <span key={element.id}>
                        <a href={element.link ? element.link : element.email}>
                          {element.icon}
                        </a>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>
      {/* put in cta buttons to link to different pages */}
      <section>
        <h2 className="mt-16 text-3xl font-bold text-gray-400">
          Some more stuff to check out...
        </h2>
        {/* pretty tailwindcss button, with appropriate colors and subtle animation */}
        <div className="mx-auto mt-5 flex flex-wrap items-center justify-between gap-4">
          <CtaButtons text="projects" />
          <CtaButtons text="technologies" />
          <CtaButtons text="blog" />
          <CtaButtons text="contact" />
        </div>
      </section>
    </div>
  );
}
