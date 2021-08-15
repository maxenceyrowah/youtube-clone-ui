import React from "react";
import { Toolbar, styled, IconButton, Avatar, Tooltip, Badge, AppBar as MuiAppBar } from "@material-ui/core";
import { Menu, AddAlert, VideoCall, Person } from "@material-ui/icons";

import YoutubeLogo from "shared/assests/logo/youtube-logo-dark.png";

import ToogleDarkMode from "./ToogleDarkMode";
import YoutubeAppsModal from "./YoutubeAppModal";
import SearchBar from "./SearchBar";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}));

type Props = {
  handleDrawerOpen: () => void;
};

const Header: React.FC<Props> = ({ handleDrawerOpen }: Props) => {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 1, backgroundColor: "#202020", boxShadow: 0, height: 60 }}>
        <Toolbar className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="hamburger_menuIocn">
              <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
                <Menu />
              </IconButton>
            </div>
            <div className="ml-2">
              <img src={YoutubeLogo} alt="Logo Youtube" style={{ height: 60 }} />
            </div>
          </div>

          <div className="search-bar">
            <SearchBar />
          </div>

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
              <YoutubeAppsModal />
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
