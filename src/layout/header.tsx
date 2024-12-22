// icons
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

// import components
import NavLinks from "../components/navbar-hover";

export default function Header() {
  let mode = "light";
  return (
    <>
      <nav className="py-10 pb-6 sm:py-10 max-w-2xl mx-auto px-2">
        <div className="w-full flex justify-center sm:justify-between items-center flex-wrap gap-2">
          <div className="toggle-button w-full sm:w-max px-2">
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
