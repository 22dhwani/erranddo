import { NavLink } from "react-router-dom";
import Heading from "../UI/Heading";

function SettingsLink() {
  return (
    <div className="w-full items-center flex justify-center">
      <div className=" grid grid-cols-3 py-10  lg:w-3/5 xs:w-full">
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit "
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/settings/personal-info"
          >
            <Heading
              text={"Personal Info"}
              variant="subHeader"
              headingclassName=" !font-semibold tracking-wide md:text-xl  xs:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit lg:mx-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/settings/contact-details"
          >
            <Heading
              text={"Contact Details"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-xl  xs:text-sm dark:text-white"
            />
          </NavLink>
        </div>
        <div className="w-full  ">
          <NavLink
            className="hover:text-primaryBlue  flex  w-fit  ml-auto"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0003FF",
                    borderBottom: "3px #0003FF  solid",
                  }
                : {}
            }
            to="/settings/reset-password"
          >
            <Heading
              text={"Reset Password"}
              variant="subHeader"
              headingclassName="dark:hover:text-primaryBlue !font-semibold tracking-wide md:text-xl  xs:text-sm dark:text-white"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SettingsLink;
