import { getAbout } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default async function Home() {
  const about = await getAbout();
  const socials = about.map((item) =>
    item.socials.map((social) => {
      const obj = {
        social: social.name,
        link: social.url,
        icon:
          social.name === "Github" ? (
            <FaGithub className="text-2xl text-orange-300" />
          ) : (
            <FaLinkedin className="text-2xl text-orange-300" />
          ),
        id: social._key,
      };
      return obj;
    })
  )[0];

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
                        <a href={element.link}>{element.icon}</a>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>
      {/* put in cta buttons to link to different pages */}
    </div>
  );
}
