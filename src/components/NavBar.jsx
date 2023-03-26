import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import "../Styles/NavBar.scss";
import { IconContext } from "react-icons";
import Logo from "../assets/img/Logo.svg";

const NavBar = () => {
  let [checked, setChecked] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  useEffect(() => {
    const body = document.getElementById("navbar").parentNode;

    mobileMenu ? (body.className = "menu-open") : (body.className = "");
  }, [mobileMenu]);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar" id="navbar">
        <div className="wrapper">
          <div className="navbar-container">
            <div className="nav-logo">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="menu-icon" onClick={toogleMenu}>
              {mobileMenu ? <FaTimes /> : <HiBars2 />}
            </div>
            <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  THE RACE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  TEAMS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  PARTNER WITH US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  NEWS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-links activated" : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
