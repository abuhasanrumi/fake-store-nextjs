import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/Io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavScroll = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex justify-between items-center z-10 sticky top-0 transition-transform duration-600 ${show}`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <div className="logo w-[40px] md:w-[60px]">
          <Link href="/">
            <p className="text-xl md:text-2xl font-bold">FakeStore</p>
          </Link>
        </div>
        <div className="menu">
          <Menu
            showCategoryMenu={showCategoryMenu}
            setShowCategoryMenu={setShowCategoryMenu}
          />

          {mobileMenu && (
            <MobileMenu
              showCategoryMenu={showCategoryMenu}
              setShowCategoryMenu={setShowCategoryMenu}
              setMobileMenu={setMobileMenu}
            />
          )}
        </div>
        <div className="flex items-center gap-2 text-black">
          {/* heart Icon starts here  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex items-center justify-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>
          {/* heart icon ends here  */}

          {/* cart Icon starts here  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex items-center justify-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>
          {/* cart icon ends here  */}

          {/* mobile menu Icon starts here  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* mobile menu icon ends here  */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
