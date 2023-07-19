import React from "react";

const ClimbSection: React.FC = () => {
  return (
    <section className="w-full h-48 flex justify-center items-center md:px-4 lg:px-72">
      <div className="flex justify-center align-bottom h-32">
        <div className="flex justify-end items-end h-full">
          <div className="text-9xl text-bombay-500 font-bold">02</div>
        </div>
        <div className="flex flex-col justify-end items-star h-full pb-3">
          <div id="team" className="text-3xl font-bold text-fiord-500">
            CLIMB
          </div>
          <div className="bg-bombay-500 w-5 h-5"></div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center md:items-start text-center md:text-left lg:ml-10 md:ml-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        voluptas, fugit illo ea totam atque quia explicabo sequi nostrum. Odit
        cum nobis perspiciatis beatae facilis, ducimus reprehenderit eveniet
        blanditiis dolorem modi! Officiis accusamus ducimus in pariatur.
      </div>
    </section>
  );
};

export default ClimbSection;
