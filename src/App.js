import * as React from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box, Button, CardContent, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
export const ColorModeContext = React.createContext({
  // toggleColorMode: () => {},
});
const getDesignTokens = (mode) => {
  const black = {
    main: "#000000",
  };

  const white = {
    main: "#FFFFFF",
  };

  const grey = {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#252529",
  };

  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: black,
            divider: grey[400],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            background: {
              element: white.main,
            },
          }
        : {
            primary: white,
            divider: grey[800],
            background: {
              default: grey[900],
              paper: grey[900],
              element: grey[800],
            },
            text: {
              primary: white.main,
              secondary: white.main,
            },
            border: {
              default: grey[100],
            },
          }),
    },
  };
};
export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = createTheme(getDesignTokens(mode));

  return (
    <ColorModeContext.Provider value={{ colorMode: colorMode, theme: theme }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <Box
            sx={{
              // display: "flex",
              // width: "100%",
              // alignItems: "center",
              // justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              // borderRadius: 1,
              // p: 3,
            }}
          > */}
          <Navbar />

          <Stack direction="row" sx={{ bgcolor: "background.default",height:"100vh" }}>
            <Stack width="60px" spacing={3} padding='1px 1px' margin='1px 1px' >
              <Stack sx={{justifyContent:"center",textAlign:"center",alignItems:"center"}}>
                <Button>
                  <HomeIcon />
                </Button>
                <Typography sx={{textAlign:"center",fontSize:"10px",color:'text.primary'}}>Home</Typography>
              </Stack>
              <Stack sx={{justifyContent:"center",textAlign:"center",alignItems:"center"}}>
                <Button>
                  <SlowMotionVideoOutlinedIcon />
                </Button>
                <Typography sx={{textAlign:"center",fontSize:"10px",color:'text.primary'}}>Shorts</Typography>
              </Stack>
              <Stack sx={{justifyContent:"center",textAlign:"center",alignItems:"center"}}>
                <Button>
                  <SubscriptionsOutlinedIcon />
                </Button>
                <Typography sx={{textAlign:"center",fontSize:"10px",color:'text.primary'}}>Subscription</Typography>
              </Stack>
              <Stack sx={{justifyContent:"center",textAlign:"center",alignItems:"center"}}>
                <Button>
                  <VideoLibraryOutlinedIcon />
                </Button>
                <Typography sx={{textAlign:"center",fontSize:"10px",color:'text.primary'}}>Library</Typography>
              </Stack>
              <Stack sx={{justifyContent:"center",textAlign:"center",alignItems:"center"}}>
                <Button>
                  <FileDownloadOutlinedIcon />
                </Button>
                <Typography sx={{textAlign:"center",fontSize:"10px",color:'text.primary'}}>Downloads</Typography>
              </Stack>
            </Stack>
            <Box>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            </Box>
          </Stack>
          {/* </Box> */}
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
