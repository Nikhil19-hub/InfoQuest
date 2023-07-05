import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Footer } from "./components/footer";

function App() {
  // State for dark mode
  const [dark, setDark] = useState(false);

  return (
    <>
      {/* Root element */}
      <div className={dark ? "dark" : ""}>
        {/* Main content */}
        <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200  min-h-screen  overflow-auto">
          {/* Navbar */}
          <Navbar dark={dark} setDark={setDark} />

          {/* Search component */}
          <Search />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
