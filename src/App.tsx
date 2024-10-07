import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./shared/contexts/themeContext";

import { AppRoutes } from "./routes";

import "./app.css";

function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
