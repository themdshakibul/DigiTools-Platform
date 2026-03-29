import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
const Navbar = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="border-b border-gray-300">
        <div className="flex items-center justify-between container mx-auto px-2 py-5">
          {/* navlogo */}
          <div className="flex items-center gap-2">
            <div className="lg:hidden" onClick={() => setActive(!active)}>
              {active ? (
                <RiMenu2Fill className="text-2xl" />
              ) : (
                <MdOutlineClear className="text-2xl" />
              )}
              <ul className={` absolute font-semibold card card-body shadow-sm  ${active ? "-top-50" : "top-20"}  `}>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <h2 className=" text-2xl md:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </h2>
          </div>
          <ul className="hidden lg:flex items-center gap-5 font-semibold">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <CiShoppingCart className="text-2xl font-bold" />
            <span className="font-semibold">Login</span>
            <button className="btn font-bold text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
