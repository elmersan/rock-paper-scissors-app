import React, { useState } from "react";
import { Item } from "./Item";

const items = [
  {
    name: "paper",
    gradiantFrom: "from-paper_Gradient_from",
    gradiantTo: "to-paper_Gradient_to",
    shadow: "shadow-paper_shadow",
    alt: "icon paper",
  },
  {
    name: "scissors",
    gradiantFrom: "from-scissors_Gradient_from",
    gradiantTo: "to-scissors_Gradient_to",
    shadow: "shadow-scissors_shadow",
    alt: "icon scissors",
  },
  {
    name: "rock",
    gradiantFrom: "from-rock_Gradient_from",
    gradiantTo: "to-rock_Gradient_to",
    shadow: "shadow-rock_shadow",
    alt: "icon rock",
  },
];

export const GridItems = () => {

  const [playing, setPlaying] = useState(false)

  const handleClick = ()=>{
    setPlaying(true)
  }

  return (
    <>
      {
        !playing ? (
          <div className="bg-[url('/assets/bg-triangle.svg')] bg-no-repeat bg-center bg-[length:65%] grid grid-cols-2 justify-items-center content-center gap-12">
            {items.map((itm, index) => (
              <Item handleClick={handleClick} key={itm.name} {...itm} index={index} />
            ))}
          </div>
        ):(
          <h3>go xd</h3>
        )
      }
    </>
  );
};
