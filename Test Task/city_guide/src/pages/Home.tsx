import React from "react";
import SidebarF from "../components/common/SidebarF";
import MapF from "../components/map/MapF";

const Home = () => {
  
  return (
    <section style={{display: 'flex', flexDirection: 'row'}}>
      <SidebarF />
      <MapF />
    </section>
  );
};

export default Home;


