import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/Io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex justify-between items-center z-10 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <div className="logo w-[40px] md:w-[60px]">
          <Link href="/">
            <p className="text-2xl font-bold">FakeStore</p>
          </Link>
        </div>
        <div className="menu">
          <Menu
            showCategoryMenu={showCategoryMenu}
            setShowCategoryMenu={setShowCategoryMenu}
          />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
