import React from "react";
import SidebarF from "../components/common/SidebarF.js";
import MapF from "../components/map/MapF.js";

const Home = () => {
  
  return (
    <section style={{display: 'flex', flexDirection: 'row'}}>
      <SidebarF />
      <MapF />
    </section>
  );
};

export default Home;


