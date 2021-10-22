import React, { Fragment, useState } from "react";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors } from "../UI/colors";
import MenuIcon from '@mui/icons-material/Menu';

///import { useTheme } from "@emotion/react";
///import { purple } from '@mui/material/colors';

//makeStyles
//import makeStyles from '@mui/styles'

export const DrawerComponet = (props) => {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  const ListCss = {
    padding: "2%",
  };
  const ListItemCss = {
    margin: "auto",
    marginInline: "5%",
  };

  return (
    <Fragment>
      <Drawer open={OpenDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={ListCss}>
          <h3>Welcome Back, Aman </h3>
          <ListItem sx={ListItemCss}></ListItem>
          <ListItem sx={ListItemCss}>
          <Button
                  variant="contained"
                  sx={{ background: `${Colors.purple}`, textTransform: "none" }}
                  onClick={props.handleOpen}
                >
                  Sign In
                </Button>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer((prev) => !prev)}><MenuIcon /></IconButton>
    </Fragment>
  );
};

const NavBar = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const AppBarcss = {
    boxShadow: "none",
    background:`${Colors.purple}`,
    FontFamily:'Lato , sans-serif'
  };
  const Logouthandler = () => {
    props.onLogout();
  };
  return (
    <Fragment>
      <AppBar color="inherit" position="static" sx={AppBarcss}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
         
          {isMobile ? (
            <DrawerComponet handleOpen={props.handleOpen} />
          ) : (
            <Fragment>
              {!props.isAuthenticated ? (
                <>

                <Button
                  variant="contained"
                  sx={{ backgroundColor:`${Colors.LightBlue}`,color:`${Colors.purple}`, textTransform: "none" ,fontWeight:600,fontSize:'1.8  ch',borderRadius:'3ch',}}
                  onClick={props.handleOpen}
                >
                  Sign In
                </Button>
               
    
                </>

              ) : (
                <Button
                  variant="contained"
                  onClick={Logouthandler}
                  sx={{ background: `${Colors.purple}`, textTransform: "none" }}
                >
                  Logout
                </Button>
              )}
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
export default NavBar;
