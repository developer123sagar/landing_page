import React, { useState } from "react";
import "./Popup.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

function PopUp() {
  const [popup, setPop] = useState(true);
  const closePopup = () => {
    setPop(false);
  };
  return (
    <div>
      <div>
        {popup ? (
          <div className="h-full w-full mt-40 px-2 font-primary z-20">
            <div className="relative bg2 md:bg1 h-[430px] w-full lg:w-[900px] lg:mx-auto rounded p-4 lg:p-0 h">
              <div className="popup-header">
                <RxCross1
                  onClick={closePopup}
                  color="blue"
                  className="absolute top-0 right-2 lg:-right-12 font-bold hover:cursor-pointer py-1 lg:mr-52"
                  size={30}
                />
              </div>
              <div>
                <Link
                  to="special"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closePopup}
                >
                  <button className="bg-primary px-10 py-4 rounded-[30px] text-white absolute bottom-12 left-14 lg:left-72">GRAB NOW !</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default PopUp;
