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
          <div className="h-full w-full absolute top-0 ">
            <div className='bg2 md:bg1 h-[950px] lg:h-[400px] lg:w-[50%] w-[700px]  absolute top-[16rem] left-[6rem] lg:top-[14rem] lg:left-[30rem] rounded-xl p-4'>
              <div className="popup-header">
                <h1>&nbsp;</h1>
                <h1 className="hover:cursor-pointer py-4" onClick={closePopup}>
                  <RxCross1 color="gray" className="w-28 h-24 lg:h-12" />
                </h1>
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
                  <button className="lg:w-[180px] w-[243px] text-[25px] md:text-2xl px-2 py-4 bg-primary rounded-[30px] absolute top-[83rem] left-[24rem] lg:top-[31.5rem] lg:left-[45rem] font-bold">
                    GRAB NOW !
                  </button>
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
