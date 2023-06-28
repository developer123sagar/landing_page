import { Navitems } from "constant/Navbar/text";
import { FiUser, FiSearch } from "react-icons/fi";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { Link as Scroll } from "react-scroll";
// import MenuDrawer from "./MenuDrawer";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between fixed top-0 right-0 w-full h-[12rem] sm:h-[9rem] py-2 px-10 lg:px-16 shadow-lg z-10 bg-slate-100">
      {/* logo */}
      <img
        src="https://cdn.discordapp.com/attachments/1123144974683361401/1123145321929768970/My_project.png"
        alt="logo"
        className="object-contain w-32 h-fit"
      />
      {/* navitems */}
      <div className="hidden lg:flex justify-between basis-1/2">
        {Navitems.map((item, id) => (
          <Scroll
            key={`${item.name}.${id}`}
            to={item.to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="nav uppercase">{item.name}</button>
          </Scroll>
        ))}
      </div>

      {/* navicons */}
      <div className="flex justify-between basis-[13%]">
        <FiSearch className="hidden md:block" size={25} />
        <HiShoppingCart className="hidden md:block" size={25} />
      </div>
        <Link to={"/login"}>
          <FiUser className="hidden md:block" size={25} />
        </Link>
      <FiUser className="md:hidden w-16 h-20" />
      <HiMenu className="w-24 h-28 md:hidden" />
      {/* <MenuDrawer /> */}
    </div>
  );
};
