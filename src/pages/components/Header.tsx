import React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@material-ui/core/AppBar";
import { Toolbar, styled, IconButton, Avatar, Tooltip } from "@material-ui/core";
import { Menu, AddAlert, VideoCall, Person } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";

import YoutubeLogo from "shared/assests/logo/youtube-logo-dark.png";
import ToogleDarkMode from "./ToogleDarkMode";
import YoutubeApps from "./YoutubeApp";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <AppBar position="fixed" open={open} className="dark:bg-black">
        <Toolbar className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  ...(open && { display: "none" })
                }}
              >
                <Menu />
              </IconButton>
            </div>
            <div>
              <img src={YoutubeLogo} alt="Logo Youtube" style={{ height: 60 }} />
            </div>
          </div>
          <div className="center">Search Bar</div>
          <div className="flex justify-center items-center gap-2">
            <div className="toogle_swicth">
              <ToogleDarkMode />
            </div>
            <div className="video_call">
              <Tooltip title="Créer">
                <VideoCall />
              </Tooltip>
            </div>
            <div className="apps_menu">
              <YoutubeApps />
            </div>
            <div className="notification">
              <Tooltip title="Notifications">
                <Badge badgeContent={4} color="error">
                  <AddAlert fontSize="small" />
                </Badge>
              </Tooltip>
            </div>
            <div className="ml-3">
              <Avatar style={{ height: 31, width: 31 }}>
                <Person fontSize="small" />
              </Avatar>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
