import React from "react";

function Entry(props) {
  return (
    <div className="container">
      <div className="image">
        <img src={props.imageURL} alt="jazz-img" width={500} height={200} />
      </div>
      <div className="desc">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Entry;
