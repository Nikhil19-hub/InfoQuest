import { useEffect, useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";

export const Answer = ({ input }) => {
  // State for storing the answer and loading state
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Make a POST request to the OpenAI API
        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: input,
            max_tokens: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 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",
            },
          }
        );
        // Extract the answer from the API response
        const data = response.data.choices[0].text;
        setAnswer(data);
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

  return (
    <div className="p-5 space-x-1 w-2/4 border-r">
      <h2 className="pb-2 text-xl">Answer:</h2>
      {isLoading ? (
        <div className="flex justify-center pt-10">
          <BounceLoader color="#36d7b7" />
        </div>
      ) : (
        <p>{answer}</p>
      )}
    </div>
  );
};
