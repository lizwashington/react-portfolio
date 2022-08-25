import React from "react";
import Thumbnail from "./Thumbnail";
import "../App.css";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>

      {/* Run Buddy */}
      <Thumbnail
        link="https://sarah-safarzadeh.github.io/run-buddy/"
        image="src/assets/runbuddy.png"
        title="Run Buddy"
        category="Website"
      />

      {/* Space Dash */}
      <Thumbnail
        link="https://team-incredibles.github.io/Group-Project/"
        image="https://user-images.githubusercontent.com/67067481/93424636-0152e900-f87e-11ea-9fbe-5ef5d967bb7e.gif"
        title="Space Dash"
        category="Website"
      />

      {/* Code Quiz */}
      <Thumbnail
        link=
        image=""
        title="Code Quiz"
        category="Website"
      />

      {/* Work Day Scheduler */}
      <Thumbnail
        link=
        title="Work Day Scheduler"
        category="Website"
      />

      {/* Password Generator */}
      <Thumbnail
        title="Password Generator"
        category="Website"
      />

      {/* Horiseon */}
      <Thumbnail
        link=
        title="Horiseon"
        category="Website"
      />
    </div>
  );
}

export default Projects;
