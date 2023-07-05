import React, { useEffect, useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";

export const Result = ({ input }) => {
  // State for storing the search results and loading state
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Options for the API request
  const options = {
    method: "GET",
    url: "https://google-web-search1.p.rapidapi.com/",
    params: {
      query: input,
      limit: "20",
      related_keywords: "true",
    },
    headers: {
      "X-RapidAPI-Key": "d4d85b229emshbf0c40aad3d4160p122d17jsn90f319a1e721",
      "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      console.log(input);
      try {
        setIsLoading(true);
        // Make a GET request to the API with specified options
        const res = await axios.request(options);
        console.log(res.data.results);
        // Store the search results in state
        setResult(res.data);
        console.log(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    // Fetch data only when the input changes
    if (input) {
      fetchData();
    }
  }, [input]);

  if (isLoading) {
    // Display loader while fetching data
    return (
      <div className=" flex items-center pt-20 pl-20">
        <BounceLoader color="#36d7b7" />
      </div>
    );
  }

  if (result.length === 0) {
    // Display a message when no results are found
    return <div className="text-center p-5 ml-5">No results found.</div>;
  }

  return (
    <>
      <div className="p-5 justify-between space-y-6">
        <p className="text-2xl">Google Search Results:</p>
        {result?.results?.map(({ url, title, description }, index) => (
          <div key={index} className="w-full">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <p>{url.length > 30 ? url.substring(0, 30) : url}</p>
              <p className="text-xl hover:underline dark:text-blue-300 text-blue-700">
                {title}
              </p>
              <p className="text-lg">{description}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
