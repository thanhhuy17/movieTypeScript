import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

import { useInitialPage } from "../Hooks/useInitialPage";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../navigations/navigations";

const Header = () => {
  // useLocation Xóa khoảng trắng khi nhập input
  const location = useLocation();
  const removeSpace = location?.search.slice(3).split("%20").join(" ");

  // Lấy giá trị input
  const [searchInput, setSearchInput] = useState(removeSpace);
  const updateSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Chặn Load Page
  const handleSunmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Link Input to Search
  const navigate = useNavigate();
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  return (
    <div className="fixed top-0 w-full h-16 bg-black bg-opacity-75 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>

        <nav
          className="hidden lg:flex items-center ml-5 gap-5"
          onClick={useInitialPage}
        >
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label + "header" + index}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-orange-400 transition-colors duration-400 ${
                      isActive && "text-orange-400"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <form className="flex items-center gap-2" onSubmit={handleSunmit}>
            <input
              type="text"
              placeholder="Search here ..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              value={searchInput}
              onChange={updateSearchInput}
              // onChange={(e)=>e.target.value}
            />
            <button className="text-2xl text-white hover:text-orange-400 transition-colors duration-400">
              <IoSearchOutline />
            </button>

            <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
              <img src={user} alt="user" width="w-full h-full" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
