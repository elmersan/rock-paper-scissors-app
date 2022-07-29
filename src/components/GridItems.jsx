import React, { useState } from "react";
import { items } from "../formData";
import { getRandomArbitrary } from "../helpers/getRandom";
import { GridPicked } from "./GridPicked";
import { Item } from "./Item";
import { Result } from "./Result";

export const GridItems = ({setScore}) => {

  const [playing, setPlaying] = useState(false)
  const [message, setMessage] = useState(false)
  const [pick, setPick] = useState(null)
  const [housePick, setHousePick] = useState(null)
  let interval;  

  const housePicker = ()=>{
    interval = setInterval(() => {
      const num = getRandomArbitrary(0,3)
      setHousePick(items[num])
    }, 50);
  }

  const handleClick = (props) => {
    setPlaying(true)
    setPick(props)

    housePicker()

    setTimeout(() => {
      clearInterval(interval)
    }, 1000);
    
    message && setMessage(false) 

    setTimeout(() => {
      setMessage(true)
    }, 1000);
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
          <>
            <GridPicked housePick={housePick} pick={pick}/>
            {
              message && (
                <Result setPlaying={setPlaying} pick={pick} housePick={housePick} setScore={setScore} />
              )
            }
          </>
        )
      }
    </>
  );
};
