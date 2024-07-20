import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://github.com/Danish401")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      }, []);
  });
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl ">
      {data.followers}
      <h1 className="text-cyan-50 items-center flex ">Github</h1>
    </div>
  );
}

export default Github;
