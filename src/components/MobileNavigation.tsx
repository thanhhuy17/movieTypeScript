import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../navigations/navigations";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full z-40 backdrop-blur-2xl">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              to={nav.href}
              key={nav.label + index + "mobileNavige"}
              className={({ isActive }) =>
                `px-3 flex items-center flex-col justify-center ${
                  isActive && "text-orange-400"
                }`
              }
            >
              <div className="text-xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
