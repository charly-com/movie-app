import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Upcomming from "../components/upcomming/Upcomming";
import { upcome, latest, recommended } from '../dummyData' 
import Trending from '../components/trending/Trending' 


const HomePages = () => {
  const [items] = useState(upcome)
  const [item] = useState(latest)
  const [rec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcoming Movies'/>
      <Upcomming items={item} title='Latest Movies'/>
      <Trending />
      <Upcomming items={rec} title='Recommended Movies'/>
    </>
  );
};

export default HomePages;
