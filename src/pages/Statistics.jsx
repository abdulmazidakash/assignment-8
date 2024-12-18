import { useEffect } from "react";

const Statistics = () => {
  
  useEffect(() => {
    document.title = " Statistics| Gadget heaven";
  });
  return (
    <div>
      <div className="bg-violet-500 py-6 ">
        <div className="text-center ">
          <h3 className="text-3xl font-bold text-white">Statistics </h3>
          <p className="text-white w-11/12 md:w-1/2 mx-auto mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <h4 className="text-violet-500 text-6xl font-bold text-center py-8">No data show statistics</h4>
    </div>
  );
};

export default Statistics;