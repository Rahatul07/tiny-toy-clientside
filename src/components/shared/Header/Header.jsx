import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import Hamburger from "hamburger-react";
const Header = () => {
  const user = { rahat: 20 };
  const logOut = () => {};
  const [isOpen, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className=" mx-auto  px-10 bg-black -mb-3 shadow-lg shadow-slate-400 ">
        <div className="navbar   text-white ">
          <div className="navbar-start">
            <img className="h-14 w-20 " src={logo} alt="" />
          </div>
          <div className="navbar-center text-xl 2xl:text-2xl uppercase h-12 pr-10 hidden lg:flex">
            <ul className="pl-3 menu-horizontal px-1">
              <li className="ml-5">
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="ml-5  ">
                <NavLink
                  to="/blogs"
                  aria-label="blogs"
                  title="blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="ml-5">
                    <NavLink
                      aria-label="logOut"
                      title="logOut"
                      onClick={handleLogOut}
                      className={({ isActive }) =>
                        isActive ? "default" : "active"
                      }
                    >
                      LogOut
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="ml-5">
                    <NavLink
                      to="/logIn"
                      aria-label="logIn"
                      title="logIn"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      LogIn
                    </NavLink>
                  </li>
                  <li className="ml-5">
                    <NavLink
                      to="/register"
                      aria-label="register"
                      title="register"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      REGISTER
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="navbar-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </label>
          </div>

          <div className="ml-10 mr-5 lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition text-primary duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 border-2 border-primary  w-full">
                <div className="p-5   bg-gray-700 rounded shadow-sm">
                  <div className="flex items-center  justify-between mb-4">
                    <div>
                      <div className="navbar-start ">
                        <img className="h-14 w-20 ml-40" src={logo} alt="" />
                      </div>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition text-primary duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline "
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <div className="text-xl  uppercase h-full pr-10 navbar-center bg-gray-700  ">
                      <ul className="pl-3  px-1">
                        <li className="ml-5 mb-3 hover:border-2 border-primary hover:bg-primary hover:bg-opacity-30 px-5 py-3 rounded-xl  ">
                          <NavLink
                            to="/"
                            aria-label="Home"
                            title="Home"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            Home
                          </NavLink>
                        </li>

                        <li className="ml-5 mb-3 hover:border-2 border-primary hover:bg-primary hover:bg-opacity-30 px-5 py-3 rounded-xl ">
                          <NavLink
                            to="/blogs"
                            aria-label="blogs"
                            title="blogs"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            Blogs
                          </NavLink>
                        </li>
                        {user ? (
                          <>
                            <li className="ml-5 mb-3 hover:border-2 border-primary hover:bg-primary hover:bg-opacity-30 px-5 py-3 rounded-xl ">
                              <NavLink
                                aria-label="logOut"
                                title="logOut"
                                onClick={handleLogOut}
                                className={({ isActive }) =>
                                  isActive ? "default" : "active"
                                }
                              >
                                LogOut
                              </NavLink>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="ml-5 mb-3 hover:border-2 border-primary hover:bg-primary hover:bg-opacity-30 px-5 py-3 rounded-xl ">
                              <NavLink
                                to="/logIn"
                                aria-label="logIn"
                                title="logIn"
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                LogIn
                              </NavLink>
                            </li>
                            <li className="ml-5 mb-3 hover:border-2 border-primary hover:bg-primary hover:bg-opacity-30 px-5 py-3 rounded-xl ">
                              <NavLink
                                to="/register"
                                aria-label="register"
                                title="register"
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                REGISTER
                              </NavLink>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
