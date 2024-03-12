import ContactCard from "@/components/Cards/ContactCard";
import ArrowLink from "@/components/Links/ArrowLink";
import { CONTACT_CARDS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <section>
      <div className="p-mobile">
        <div className="flex gap-4 buttonXS-text mb-12">
          <Link href={"/"} className="text-neutral_04">
            Home {">"}
          </Link>
          <p>Contact Us</p>
        </div>
        <h6 className="mb-6">
          We believe in sustainable decor. We’re passionate about life at home.
        </h6>
        <p className="regular-body-2 mb-10">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present
        </p>
        <section className="bg-neutral_02 mb-3">
          <Image
            alt="contact-image"
            width={560}
            height={413}
            src={"/room.png"}
            className="mb-16"
          />
          <div className="p-mobile flex gap-4 flex-col mb-6">
            <p className="text-xl font-medium">About Us</p>
            <p className="regular-caption-1">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to support you
              24/7
            </p>
          </div>
          <div className="pb-16 p-mobile">
            <ArrowLink color="black" href="/shop" text="Shop Now" />
          </div>
        </section>
        <section>
          <p className="text-xl font-medium mb-10 text-center">Contact Us</p>

          <div className="flex flex-col gap-4 mb-10">
            {CONTACT_CARDS.map((card) => (
              <ContactCard
                icon={card.icon}
                text={card.text}
                title={card.title}
                key={card.id}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactPage;
