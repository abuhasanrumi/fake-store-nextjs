import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Smartwatch", doc_count: 11 },
  { id: 2, name: "Laptop", doc_count: 8 },
  { id: 3, name: "Television", doc_count: 64 },
  { id: 4, name: "Fashion", doc_count: 107 },
];

const Menu = ({ showCategoryMenu, setShowCategoryMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {data.map((item) => {
        return (
          <span key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCategoryMenu(true)}
                onMouseLeave={() => setShowCategoryMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCategoryMenu && (
                  <ul className="bg-white text-black absolute top-6 left-0 min-w-[250px] p-2 shadow-lg rounded-[2px]">
                    {subMenuData.map((subItem) => {
                      return (
                        <Link key={subItem.id} href="/">
                          <li className="cursor-pointer h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {subItem.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </span>
        );
      })}
    </ul>
  );
};

export default Menu;
