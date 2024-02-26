import Image from "next/image";
import React from "react";
import StarsRating from "./StarsRating";

const ReviewTemplate = () => {
  return (
    <section className="border-b pb-4 mb-6">
      <div className="flex gap-4 mb-4">
        <Image src={"/review.png"} alt="alt" width={72} height={72} />
        <div className="flex flex-col gap-4">
          <p className="semibold-body-1">Sofia Harvetz</p>
          <StarsRating readOnly />
        </div>
      </div>
      <p className="regular-body-2 text-neutral_05">
        I bought it 3 weeks ago and now come back just to say “Awesome Product”.
        I really enjoy it. At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et
        quas molestias excepturi sint non provident.
      </p>
    </section>
  );
};

export default ReviewTemplate;
