import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Divider } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import Home from "./Home";
import Skills from "./Skills";
import Work from "./Work";
import ContactMe from "./ContactMe";

const drawerWidth = 300;

function MainPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const style = {
    backgroundColor: "#C69749",
    paddingX: 5,
    paddingY: 1,
    color: "black",
    fontWeight: 600,
    fontSize: "1.1rem",
  };

  const drawer = (
    <div className="h-full w-full flex justify-center items-center bg-[#121212] border-r-[1px] border-[#1F1F1F] font-opensans relative">
      <div className="absolute top-5">
        <p className="text-[#8C8C8C]">Designed by Adejumo Iyinoluwa</p>
      </div>
      <List sx={{ width: "100%" }}>
        {[
          { name: "Home", id: "Home" },
          { name: "Skills", id: "Skills" },
          { name: "Work", id: "Work" },
          { name: "Contact", id: "Contact" },
        ].map((item, index) => (
          <ListItem
            key={index + 1}
            disablePadding
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              offset={-64}
              className="w-full"
            >
              <ListItemButton sx={{ width: "100%" }}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: "1.3rem",
                    textAlign: "center",
                    color: "#B0B0B0",
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="absolute bottom-5">
        <Stack spacing={2} direction="column">
          <Button variant="contained" sx={style} href="/resume/Resume.pdf">
            <ReceiptIcon sx={{ mr: 1 }} />
            Resume
          </Button>
          <Button
            variant="contained"
            sx={style}
            href="https://github.com/Rum2y"
            target="blank"
          >
            <GitHubIcon sx={{ mr: 1 }} />
            Github
          </Button>
        </Stack>
      </div>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#121212",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 0, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <div className="w-full flex xs:justify-end lg:justify-between">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#B0B0B0", display: { xs: "none", md: "block" } }}
            >
              Edmonton, AB Canada
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "#B0B0B0",
                paddingX: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              <a
                href="mailto:iyinade64@gmail.com"
                className="px-4 hover:text-[#C69749]"
              >
                iyinade64@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/iyinoluwa-adejumo-b7137b241/"
                target="blank"
                className="hover:text-[#C69749]"
              >
                LinkedIn
              </a>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: "none",
              borderRight: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 10 },
          width: { xs: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Home />
        <Skills />
        <Work />
        <ContactMe />
      </Box>
    </Box>
  );
}

export default MainPage;
