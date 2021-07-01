import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import Experience from "../components/knowledges/Experience";
import Hobbies from "../components/knowledges/Hobbies";
import OtherSkills from "../components/knowledges/OtherSkills";

const Knowledge = () => {
  return (
    <>
      <div className="Knowledges">
        <Navigation />
        <div className="KnowledgesContent">
          <Languages />
          <Experience />
          <Hobbies />
          <OtherSkills />
        </div>
      </div>
    </>
  );
};

export default Knowledge;