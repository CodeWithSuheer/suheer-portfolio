// icons
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

// import components
import NavLinks from "../components/navbar-hover";

export default function Header() {
  let mode = "light";
  return (
    <>
      <nav className="py-10 max-w-2xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="toggle-button">
            <button
              type="button"
              title="Toggle dark mode"
              className="p-2 border border-gray-200 rounded-xl shadow-sm"
            >
              {mode === "light" ? <IoMoonSharp /> : <LuSun />}
            </button>
          </div>
          <div className="tabs flex justify-between items-center">
            <NavLinks />
          </div>
        </div>
      </nav>
    </>
  );
}
