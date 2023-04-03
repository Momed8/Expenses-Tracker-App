import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (res.ok) {
            // console.log(res);
            return res.json();
          }
          throw new Error("something went wrong");
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          console.log(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
