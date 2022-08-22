import React from "react"
import ReactConfetti from "react-confetti"
import WelcomePage from './Welcome' 
import Game from './Game'

export default function App() {
  const [firstRun, setFirstRun] = React.useState(true);
  const [win, setWin]= React.useState(false);

    
    return (
      <>
      {firstRun && <WelcomePage firstRun={setFirstRun}/>}
      {!firstRun && <Game/>}
        <div id='space-invader'></div>
        <div id='pacman'></div>
      {(win && <ReactConfetti/>)}
      </>
    )
}