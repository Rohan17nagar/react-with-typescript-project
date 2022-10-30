import { Grid } from "@mui/material";
import React, { useState } from "react";
import "./Header.scss";
import { allImages } from "../../assets/images/allImages";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = (props: HeaderProps) => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const headerMenus = ["men", "women", "kids"];

  return (
    <Grid className="header-container">
      <img
        onClick={() => setOpenHamburger(true)}
        className="header-menu-icon"
        src={allImages.Menu}
        alt=""
      />
      <div className="header-logo">MyCart</div>

      <div className="header-menus">
        {headerMenus.map((item) => (
          <div className="header-menu">{item}</div>
        ))}
      </div>

      <div className="header-icons">
        <img className="disabled" src={allImages.Profile} alt="" />
        <img src={allImages.Cart} alt="" />
      </div>

      {openHamburger && (
        <HamburgerMenu
          headerMenus={headerMenus}
          onClose={() => setOpenHamburger(false)}
        />
      )}
    </Grid>
  );
};

type HeaderProps = {};

export default Header;
