import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  
  return (
    <div>
      <Toaster></Toaster>

      {/* Navbar */}
      <Navbar></Navbar>
      
      {/* Dynamic section*/}
      <div className="bg-gray-100 pb-10">
        <div className="min-h-[calc(100vh-418px)]  ">
          <Outlet></Outlet>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;