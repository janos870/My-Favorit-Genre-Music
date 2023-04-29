import React from "react";
import Entry from "./Entry";
import list from "../list";
import Footer from "./Footer";

function listEntry(listTerms) {
  return (
    <Entry
      key={listTerms.id}
      name={listTerms.name}
      imageURL={listTerms.imageURL}
      description={listTerms.description}
    />
  );
}

function App() {
  return (
    <div>
      <div className="heading ms-0">
        <h1>MY FAVORIT MUSIC GENRE LIST</h1>
      </div>
      {list.map(listEntry)}
      <Footer />
    </div>
  );
}

export default App;
