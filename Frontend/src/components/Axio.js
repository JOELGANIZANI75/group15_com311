import React, { useEffect, useState } from "react";
import axios from "axios";

const Axio = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // To avoid setting state on unmounted component

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/data`);
        if (isMounted) setData(response.data);
      } catch (err) {
        console.error("Error fetching data", err);
        if (isMounted) setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Data from NestJS</h1>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : data ? (
        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Axio;

