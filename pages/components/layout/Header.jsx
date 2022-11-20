import React, { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { useRouter } from "next/router";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/Gi";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      } `}
    >
      <div className="container text-white mx-auto  flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0  sm:w-auto w-full h-screen sm:text-white text-black 
          sm:bg-transparent bg-white sm:flex hidden  ${
            isMenuModal === true && " !flex justify-center "
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center justify-center">
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary">
              <a href="">HOME</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary">
              <a href="">MENU</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary">
              <a href="">ABOUT</a>
            </li>
            <li className="px-[5px] py-[20px] uppercase cursor-pointer hover:text-primary">
              <a href="">BOOK TABLE</a>
            </li>
          </ul>
          {isMenuModal && (
            <button
              onClick={() => setIsMenuModal(false)}
              className="sm:hidden inline-block"
            >
              <AiOutlineCloseCircle
                size={25}
                className="hover:text-primary transition-all absolute top-5 right-5 "
              />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="" className="hover:text-primary transition-all">
            <FaUserAlt />
          </a>
          <a href="" className="hover:text-primary transition-all">
            <FaShoppingCart />
          </a>
          <button
            onClick={() => setIsSearchModal(true)}
            className="hover:text-primary transition-all"
          >
            <FaSearch />
          </button>
          <a href="" className="md:inline-block hidden">
            {/* md ye kadar inline block, daha sonra gizlen. */}
            <button className="btn-primary">Order Online</button>
          </a>

          <button
            onClick={(e) => setIsMenuModal(true)}
            className="sm:hidden inline-block"
          >
            <GiHamburgerMenu
              size={24}
              className="hover:text-primary transition-all "
            />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
