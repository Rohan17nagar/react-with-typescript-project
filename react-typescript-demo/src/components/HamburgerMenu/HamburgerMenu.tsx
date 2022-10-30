import { Grid } from "@mui/material";
import React from "react";
import { allImages } from "../../assets/images/allImages";
import "./HamburgerMenu.scss";

const HamburgerMenu = (props: hamburgerMenuProps) => {
  return (
    <Grid className="hamburger-container">
      <div className="hamburger-logo header-logo">
        MyCart
        <img
          className="hamburger-close-icon"
          src={allImages.Close}
          alt=""
          onClick={(e) => props?.onClose(e)}
        />
      </div>

      <div className="hamburger-items">
        <div className="hamburger-menu-items">
          {props?.headerMenus?.map((item) => (
            <div className="item">{item}</div>
          ))}
        </div>
      </div>
    </Grid>
  );
};

type hamburgerMenuProps = {
  headerMenus: Array<String>;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
};

export default HamburgerMenu;
