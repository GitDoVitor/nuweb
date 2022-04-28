import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Landing from "./components/landing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}
