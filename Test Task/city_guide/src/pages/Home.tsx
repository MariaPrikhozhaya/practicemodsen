import React from "react";
import SidebarF from "../components/Sidebar";
import MapF from "../components/Map";

const Home = () => {
  
  return (
    <section style={{display: 'flex', flexDirection: 'row'}}>
      {/* <SidebarF /> */}
      <MapF />
    </section>
  );
};

export default Home;


