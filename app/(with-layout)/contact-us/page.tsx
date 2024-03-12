import ContactCard from "@/components/Cards/ContactCard";
import ContactUsForm from "@/components/Forms/ContactUsForm";
import ArrowLink from "@/components/Links/ArrowLink";
import GoogleMaps from "@/components/Map/GoogleMap";
import Values from "@/containers/home-page/values";
import { CONTACT_CARDS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <section>
      <div className="p-mobile max-container">
        <div className="flex gap-4 buttonXS-text mb-12">
          <Link href={"/"} className="text-neutral_04">
            Home {">"}
          </Link>
          <p>Contact Us</p>
        </div>
        <h6 className="mb-6 lg:text-54 lg:leading-58 max-w-[834px] ">
          We believe in sustainable decor. We’re passionate about life at home.
        </h6>
        <p className="regular-body-2 mb-10">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present
        </p>
        <section className="bg-neutral_02 mb-3 lg:flex lg:items-center lg:gap-16 lg:mb-12">
          <Image
            alt="contact-image"
            width={560}
            height={413}
            src={"/room.png"}
            className="mb-16 w-full lg:mb-0 lg:max-w-[560px]"
          />
          <div className="p-mobile flex gap-4 flex-col mb-6 lg:max-w-[452px]">
            <p className="text-xl font-medium lg:text-40 lg:leading-44 lg:tracking-tighter">
              About Us
            </p>
            <p className="regular-caption-1 lg:text-base">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to support you
              24/7
            </p>
            <div className="pb-16">
              <ArrowLink color="black" href="/shop" text="Shop Now" />
            </div>
          </div>
        </section>
        <section>
          <p className="text-xl font-medium mb-10 text-center lg:text-40 lg:leading-44 lg:tracking-tighter">
            Contact Us
          </p>

          <div className="flex flex-col gap-4 mb-10 lg:flex-row lg:justify-between">
            {CONTACT_CARDS.map((card) => (
              <ContactCard
                icon={card.icon}
                text={card.text}
                title={card.title}
                key={card.id}
              />
            ))}
          </div>

          <div className="lg:hidden">
            <GoogleMaps />
          </div>

          <div className="flex gap-7 lg:mb-20">
            <ContactUsForm />
            <div className="hidden lg:block flex-1">
              <GoogleMaps />
            </div>
          </div>
        </section>
        <Values />
      </div>
    </section>
  );
};

export default ContactPage;
