export const Navbar = ({ dark, setDark }) => {
  // Handler for toggling dark mode
  const handleDarkModeToggle = () => {
    setDark(!dark);
  };
  return (
    <div className="p-5 pb-0 flex flex-wrap sm: justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen pb-2">
        {/* Presidio logo */}
        <img
          src="https://www.presidio.com/icheestu/2021/02/Presidio-blue-logo.svg"
          alt="Presidio logo"
        />
        {/* Dark mode toggle button */}
        <button
          type="button"
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 mb-2 hover:shadow-lg"
          onClick={handleDarkModeToggle}
        >
          {/* Display appropriate emoji based on dark mode state */}
          {dark ? "💡" : "🌙"}
        </button>
      </div>
    </div>
  );
};
