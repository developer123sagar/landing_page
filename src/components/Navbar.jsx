import { Navitems } from "constant/Navbar/text";
import { FiUser, FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between fixed top-0 right-0 w-full h-[9rem] py-2 px-16 shadow-lg z-10 bg-slate-100">
      {/* logo */}
      <img src="https://cdn.discordapp.com/attachments/1123144974683361401/1123145321929768970/My_project.png" alt="logo" className="object-contain w-32 h-fit" />
      {/* navitems */}
      <div className="flex justify-between basis-1/2 font-primary">
        {Navitems.map((item, id) => (
          <Link
            key={`${item.name}.${id}`}
            to={item.to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="nav">{item.name}</button>
          </Link>
        ))}
      </div>
      {/* navicons */}
      <div className="flex justify-between basis-[13%]">
        <FiSearch size={25} />
        <HiShoppingCart size={25} />
        <FiUser size={25} />
      </div>
    </div>
  );
};
