import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Login from "./components/login";
import { Theme } from "./utils/themes/Theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
