import React from "react";

const ClimbSection: React.FC = () => {
  return (
    <section className="h-200 w-screen">
      <div className="container px-80 width75 flex flex-col md:flex-row gap-5">
        <div className="flex">
          <div className="flex justify-end">
            <span className="text-9xl text-bombay-500 font-bold">02</span>
          </div>
          <div className="flex justify-end flex-col pb-3">
            <span id="team" className="text-3xl font-bold text-fiord-500">
              CLIMB
            </span>
            <span className="bg-bombay-500 w-5 h-5"></span>
          </div>
        </div>
        <div className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
          cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
          blanditiis dolorem modi! Officiis accusamus ducimus in pariatur.
        </div>
      </div>
    </section>
  );
};

export default ClimbSection;
