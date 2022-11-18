import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";

import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary  ">
      <div className="container text-white mx-auto  flex justify-between items-center h-full">
        <Logo />
        <nav>
          <ul className="flex gap-x-2">
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
          <a href="">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
