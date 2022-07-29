import React, { useEffect } from 'react'

export const Result = ({setPlaying,pick,housePick,setScore}) => {

  const resultOfGame = `${pick.name}-${housePick.name}`

  const winnerOrLoserCase = {
    'scissors-paper': 'win',
    'scissors-rock': 'lose',
    'paper-rock': 'win',
    'paper-scissors': 'lose',
    'rock-scissors': 'win',
    'rock-paper': 'lose',
  }

  const match = 'match'

  const results = winnerOrLoserCase[resultOfGame] || match

  useEffect(() => {
    if(results==='win'){
      setScore(score => score + 1)
    }
  }, [])
  


  return (
    <div className="text-center">
      <h1 className="text-white font-bold text-5xl mb-8 uppercase">you {results}</h1>
      <button onClick={()=>setPlaying(false)} type="button" className="w-max m-[0_auto] text-dark_Text px-12 tracking-widest py-2 border-[3px] rounded-xl bg-white">PLAY AGAIN</button>
    </div>
  )
}
