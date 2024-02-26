import NewsletterForm from "@/components/Forms/NewsletterForm";
import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-newsletter-bg bg-center py-24">
      <div className="p-mobile text-center">
        <p className="text-28 leading-34 tracking-tighter mb-2 font-medium lg:text-40 lg:leading-44 ">
          Join Our Newsletter
        </p>
        <p className="text-sm leading-22 mb-8 text-center lg:text-lg lg:leading-30">
          Sign up for deals, new products and promotions
        </p>
      </div>
      <NewsletterForm />
    </section>
  );
};

export default Newsletter;
