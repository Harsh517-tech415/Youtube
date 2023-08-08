import {
  Autocomplete,
  BottomNavigation,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTube from "../Media/YouTube.webp";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';

import { ColorModeContext } from "../App";
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const drawerWidth = 240;
const Navbar = () => {
  const { colorMode, theme } = useContext(ColorModeContext);
  const [clicked, setClicked] = useState(false);
  function Search() {}
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const options=[1,2,3,4]
  const [value,setValue]=useState('')
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "background.default",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction="row">
          <Button>
            <MenuIcon sx={{ color: "text.primary" }}  onClick={handleDrawerOpen}/>
          </Button>
          <Stack direction="row" sx={{ alignItems: "Center" }}>
            <CardMedia
              component="img"
              src={YouTube}
              sx={{ maxWidth: "80px", p: "0px 0px", m: "0px 0px" }}
            />
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "'Fjalla One', sans-serif",
                color: "text.primary",
              }}
            >
              YouTube
            </Typography>{" "}
          </Stack>
        </Stack>
        <form onSubmit={Search}>
          <Stack direction="row" spacing={2}>
            <Stack direction="row">
              <div class="input-container">
                <span class="icon-container">
                  {/* <Button
                  type="submit"
                  onSubmit={Search}
                  variant="outlined"
                  sx={{
                    backgroundColor: "transparent",
                    border: `1px solid ${
                      theme.palette.mode === "light" ? "black" : "grey"
                    }`,
                    borderLeft: "0px",
                    borderRight: "0px",
                    ml: "1px",
                  }}
                > */}
                  <SearchIcon sx={{ color: "text.primary" }} />
                  {/* </Button> */}
                </span>
                <input
                  type="text"
                  onClick={() => {
                    if (theme.palette.mode === "dark") {
                      setClicked(true);
                    }
                  }}
                  style={{
                    color: `${
                      theme.palette.mode === "light" ? "black" : "white"
                    }`,
                    borderBottomLeftRadius: "40px",
                    borderTopLeftRadius: "40px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    backgroundColor: "transparent",
                    height: "10px",
                    fontSize: "17px",
                    padding: "12px 12px",
                    paddingLeft: "40px",
                    minWidth: "350px",
                    maxWidth: "450px",
                    border: `1px solid ${
                      theme.palette.mode === "light" ? "black" : "grey"
                    }`,
                  }}
                  placeholder="Search"
                />
              </div>
              <Button
                className="button"
                type="submit"
                onSubmit={Search}
                variant="outlined"
                sx={{
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  backgroundColor: "background.element",
                  border: `1px solid ${
                    theme.palette.mode === "light" ? "black" : "grey"
                  }`,
                  borderLeft: "0px",
                  ml: "1px",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <SearchIcon />
              </Button>
            </Stack>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "background.element",
                  borderRadius: "100px",
                }}
              >
                <MicIcon sx={{ color: "text.primary" }} />
              </Button>
            </Box>
          </Stack>
        </form>
        <Stack direction="row">
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "light" ? (
              <Brightness7Icon sx={{ color: "text.primary" }} />
            ) : (
              <Brightness4Icon sx={{ color: "text.primary" }} />
            )}
          </IconButton>
        </Stack>
      </Stack>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          
            {theme.direction === "ltr" ? (
              <Stack direction='row' spacing={5} sx={{alignItems:"center",p:"0px 50px 0px 0px"}}>
               <IconButton onClick={handleDrawerClose}>
                 <MenuIcon />
                   </IconButton>
               <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "'Fjalla One', sans-serif",
                color: "text.primary",
              }}
            >
              YouTube
            </Typography>
              </Stack>
            ) : (
              <ChevronRightIcon />
            )}
        
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
// One of your dependencies, babel-preset-react-app, is importing the
// "@babel/plugin-proposal-private-property-in-object" package without
// declaring it in its dependencies. This is currently working because
// "@babel/plugin-proposal-private-property-in-object" is already in your
// node_modules folder for unrelated reasons, but it may break at any time.

// babel-preset-react-app is part of the create-react-app project, which
// is not maintianed anymore. It is thus unlikely that this bug will
// ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
// your devDependencies to work around this error. This will make this message
// // go away.

