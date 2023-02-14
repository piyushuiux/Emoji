import React from "react";
import Content from "../Content";
import Card from "./Card";

function CardDetails(Content) {
  return<Card
     emoji={Content.emoji} 
     tital ={Content.tital}
     detail ={Content.detail} 
  />
}

function App(props) {
  return (
    <div>
      {Content.map(CardDetails)}
    </div>
  );
}

export default App;
