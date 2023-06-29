import React, { useState } from "react";
import { Navitems } from "constant/Navbar/text";
import { Link } from "react-scroll";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { HiMenuAlt1 } from "react-icons/hi";

const MenuDrawer = () => {
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="h-full drawerBg"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Navitems.map((text, id) => (
          <Link to={text.to} key={text.name + id}>
            <ListItem className="w-full border-b-[1px] ">
              <ListItemButton onClick={toggleDrawer(anchor, false)}>
                <Typography variant="body1" style={{ fontSize: "16px", fontFamily:'cursive' }}>
                  {text.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <img
          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123145321929768970/My_project.png"
          alt="sasurali"
          className="w-full h-[220px] mt-10 object-contain"
        />
      </List>
    </div>
  );
  return (
    <>
      {["left"].map((anchor, id) => (
        <React.Fragment key={`left ${id}.${anchor}`}>
          <HiMenuAlt1
            onClick={toggleDrawer(anchor, true)}
            color="white"
            className="text-[40px] lg:hidden hover:cursor-pointer"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              style: {
                width: "80%",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default MenuDrawer;
