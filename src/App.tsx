import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// IMPORTS
import MainLayout from "./layout/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
