import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me!",
  description: "This is a contact page for Hannanel's work.",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">Contact me</h1>
      {children}
    </div>
  );
};

export default ContactLayout;
