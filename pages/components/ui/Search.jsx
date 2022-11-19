import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50  after:content-[''] after:w-screen after:h-screen after:top-0 after:left-0 after:bg-white after:absolute  after:opacity-40 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative z-50  md:w-[600px] w-[370px] bg-white  border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input placeholder="Search..." className="border w-full my-10" />
            <div>
              <ul className="">
                <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                  <div className="relative flex ">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                  <div className="relative flex ">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                  <div className="relative flex ">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
              <button
                onClick={() => setIsSearchModal(false)}
                className="absolute top-5 right-5"
              >
                <AiOutlineCloseCircle
                  size={25}
                  className="hover:text-primary transition-all  "
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
