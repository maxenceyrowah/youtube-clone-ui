import React from "react";
import { styled, Theme, CSSObject, ListItem, ListItemIcon, List, Drawer as MuiDrawer } from "@material-ui/core";

import { SIDEBAR_ITEMS } from "pages/utils/constants/default-constant";

const drawerWidth = 200;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden",
  top: 55,
  backgroundColor: "#202020",
  color: "#fff"
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(11)} + 1px)`
  },
  top: 55,
  backgroundColor: "#202020",
  color: "#fff"
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "relative",
  zIndex: 0,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

type Props = {
  isOpen: boolean;
};

const Sidebar: React.FC<Props> = ({ isOpen }: Props) => {
  return (
    <Drawer variant="permanent" open={isOpen}>
      <List>
        {SIDEBAR_ITEMS.map((item) => (
          <ListItem
            button
            key={item.id}
            sx={
              !isOpen
                ? { display: "flex", flexDirection: "column", alignItems: "baseline", pb: "10px", pl: "29px" }
                : { pb: "10px", pl: "29px" }
            }
          >
            <ListItemIcon
              sx={
                isOpen
                  ? { minWidth: 51, marginLeft: "2px", color: `${item.unactive}` }
                  : { minWidth: 40, marginLeft: "3px", color: `${item.active}` }
              }
            >
              {item.icon}
            </ListItemIcon>
            <span style={!isOpen ? { fontSize: "11px", marginLeft: `${item.position}` } : {}}>{item.label}</span>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
