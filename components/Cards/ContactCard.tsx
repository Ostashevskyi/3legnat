import Image from "next/image";
import React from "react";

type ContactCardProps = {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
};

const ContactCard = ({ icon, title, text }: ContactCardProps) => {
  return (
    <div className="bg-neutral_02 flex flex-col justify-center items-center p-4 ">
      <Image
        src={icon.src}
        alt={icon.alt}
        width={32}
        height={32}
        className="mb-4"
      />
      <p className="text-base leading-16 font-bold uppercase text-neutral_04 mb-2">
        {title}
      </p>
      <p className="semibold-body-2 text-center">{text}</p>
    </div>
  );
};

export default ContactCard;
