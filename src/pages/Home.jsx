import { Link, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import { useEffect } from "react";

const Home = () => {
  
  useEffect(() => {
    document.title = "Home | Gadget heaven";
  });
  const categories = useLoaderData();
  return (
    <div className="w-11/12  mx-auto">
      <div className="bg-violet-500 pt-7   pb-56 rounded-b-xl">
        <div className="  text-center w-11/12 lg:w-9/12 mx-auto lg:space-y-7 space-y-3">
          <h2 className="lg:text-5xl text-3xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="text-white lg:w-9/12 mx-auto pb-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="bg-white py-2 px-6 rounded-full font-bold ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto border lg:p-4 p-1  rounded-md blur-bg relative md:-top-44 -top-32 ">
        <img
          className="rounded-xl lg:h-[450px] w-full"
          src="https://i.ibb.co/tX0q7t7/banner.jpg"
          alt=""
        />
      </div>

      <h3 className="text-3xl font-bold text-center pb-5">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="flex  lg:flex-row flex-col gap-6">
        <div className="lg:w-1/5 h-full bg-white flex flex-col gap-3 p-5 rounded-lg">

          {/* dynamic */}
          
          <Categories categories={categories}></Categories>
        </div>
        <div className="lg:w-4/5 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;