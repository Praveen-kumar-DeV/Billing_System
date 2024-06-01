import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Button,
  useScrollTrigger,
} from "@mui/material";
import logo from "../assests/11.png";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  
  
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/history" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/cashbox" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ marginLeft: "auto" ,p:2}}
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab label="HOME" component={Link} to="/" />
        <Tab label="History" component={Link} to="/history" />
        <Tab label="CashBox" component={Link} to="/cashbox" />
      </Tabs>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" sx={{ zIndex: "1201" }}>
          <Toolbar disableGutters>
            <Button component={Link} to="/ ">
              <img alt="CampusCloud" src={logo} />
            </Button>
            {tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Offset />
    </React.Fragment>
  );
};

export default Navbar;
