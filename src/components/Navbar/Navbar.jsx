import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 200 }} onClick={() => setOpen(false)}>
      <List>
        {menuOptions.map((optin, index) => (
          <ListItem key={optin.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{optin.icon}</ListItemIcon>
              <ListItemText primary={optin.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div className="container">
        <header>
          <img src={logo} alt="logo" className="logo" />
          {!isMobile ? (
            <nav>
              <ul>
                {menuOptions.map((l, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }} // ظهور متسلسل للروابط
                    style={{ cursor: "pointer" }}
                  >
                    {l.text === "Cart" ? l.icon : l.text}
                  </motion.li>
                ))}
              </ul>
            </nav>
          ) : (
            <>
              <Button
                onClick={() => setOpen(true)}
                style={{ color: "#ff9800" }}
              >
                <MenuIcon fontSize="large" />
              </Button>
              <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                  },
                }}
              >
                {DrawerList}
              </Drawer>
            </>
          )}
        </header>
      </div>
    </div>
  );
}
