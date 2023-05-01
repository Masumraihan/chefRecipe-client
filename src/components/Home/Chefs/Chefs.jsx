import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";

const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);
  const [allChefs,setAllChefs] = useState([])


  const handleShowAllChefs = () => {
    setChefsData(allChefs)
  }


  useEffect(() => {
    const loadChefsData = async () => {
      const { data } = await axios.get(
        "https://chef-recipe-assignment-server-masumraihan.vercel.app/chefs"
      );
      setChefsData(data.slice(0,4));
      setAllChefs(data)
    };
    loadChefsData();
  }, []);
  return (
    <div className="py-14">
      <h1 className="text-4xl font-bold text-center pb-10">Our Best Chefs</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {chefsData.map((chefInfo) => (
          <SingleChef key={chefInfo.id} chefInfo={chefInfo}/>
        ))}
      </div>
      <div className="py-10 text-center">
        <button onClick={handleShowAllChefs} className="btn btn-primary">show All Chefs</button>
      </div>
    </div>
  );
};

export default Chefs;
