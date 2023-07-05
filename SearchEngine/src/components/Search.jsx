import { useState } from "react";
import { Answer } from "./Answer";
import { Result } from "./Result";

export const Search = () => {
  // State for input and submitted input
  const [input, setInput] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedInput(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative m-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className=" block w-full p-4 pl-10 text-md text-gray-900 border
                        border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white 
                            "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What are you looking for..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 
                    bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
        <div className="flex">
          <Answer input={submittedInput} />
          <Result input={submittedInput} />
        </div>
      </form>
    </>
  );
};
