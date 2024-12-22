import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

// IMPORTS
import MainLayout from "./layout/layout";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
        <Toaster />
        <WhatsappButton />
      </BrowserRouter>
    </>
  );
}

export default App;
