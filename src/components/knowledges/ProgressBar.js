import React from "react";

const ProgressBar = (props) => {
  console.log(props);

  return (
    <>
      <div className={props.className}>
        <h3>{props.title}</h3>
        <div className="years">
          <spam>Années D'expérience</spam>
          <spam>1 Ans</spam>
          <spam>2 Ans</spam>
        </div>
        <div className="">
          {" "}
          // commande jsx en crocher
          {props.languages.map((item) => {
            let xpYears = 2;
            let progressBar = item.xp / xpYears + 100 + "%";

            return (
              <div key={item.id} className="languagesList">
                <li>{item.value}</li> //pour mettre de styles en react "double
                accolade"
                <div
                  className="progressBar"
                  style={{ width: progressBar }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
