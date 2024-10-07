import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { AppRoutes } from "./routes";

import { lightTheme } from "./shared/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
