import { Navitems } from "constant/Navbar/text";
import { FiUser, FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { Link as Scroll } from "react-scroll";
import MenuDrawer from "./MenuDrawer";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center text-white justify-between fixed top-0 left-0 w-full h-[83px] py-2 px-5 lg:px-16 shadow-lg z-30 background font-primary">
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123145321929768970/My_project.png"
          alt="logo"
          className="object-cover w-32 h-fit"
        />
      </Link>
      {/* navitems */}
      <div className="hidden lg:flex gap-36  ml-40">
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
            <button className="nav uppercase font-bold">{item.name}</button>
          </Scroll>
        ))}
      </div>

      {/* navicons */}
      <div className="flex gap-12 basis-[13%]">
        <FiSearch className="hidden md:block" size={25} />
        <HiShoppingCart className="hidden md:block" size={25} />
      <Link to={"/login"}>
        <FiUser className="hidden md:block" size={25} />
      </Link>
      <Link className="md:hidden" to={"/login"}>
        <FiUser color="white" className="md:hidden w-12 h-12 mt-2" />
      </Link>
      <MenuDrawer />
      </div>
    </div>
  );
};
