import React, { useState, useEffect } from 'react';
import './App.css';
import * as M from '@material-ui/core'
import { ColorButton, ColorButton2 } from './components/customcss'
import { BiDice1, BiDice2, BiDice3, BiDice4, BiDice5, BiDice6 } from 'react-icons/bi'

const DiceList = [

  <BiDice1 style={{ fill: "#4fc3f7" }} size='100px' />,
  <BiDice2 style={{ fill: "#4fc3f7" }} size='100px' />,
  <BiDice3 style={{ fill: "#4fc3f7" }} size='100px' />,
  <BiDice4 style={{ fill: "#4fc3f7" }} size='100px' />,
  <BiDice5 style={{ fill: "#4fc3f7" }} size='100px' />,
  <BiDice6 style={{ fill: "#4fc3f7" }} size='100px' />
];

function App() {

  const [dice, setDice] = useState(); // state for dice 1
  const [dice2, setDice2] = useState(); // state for dice 2
  const [dice3, setDice3] = useState(); // state for dice 3
  const [dice4, setDice4] = useState(); // state for dice 4
  const [dice5, setDice5] = useState(); // state for dice 5
  const [score, setScore] = useState(0); // state for score
  const [rolling, setRolling] = useState(false); // state for if rolling

  const rand = Math.floor(Math.random() * 5 + 1);
  const rand2 = Math.floor(Math.random() * 5 + 1);
  const rand3 = Math.floor(Math.random() * 5 + 1);
  const rand5 = Math.floor(Math.random() * 5 + 1);
  const rand4 = Math.floor(Math.random() * 5 + 1);

  useEffect(() => {

    if (!rolling) { // automatically roll when the page renders
      const timeID = setTimeout(() => {
        setDice(() => DiceList[rand]);
        setDice2(() => DiceList[rand2]);
        setDice3(() => DiceList[rand3]);
        setDice4(() => DiceList[rand4]);
        setDice5(() => DiceList[rand5]);
      }, 100);
      return () => clearTimeout(timeID) // if false clear timer
    }
  }, [rolling, rand, rand2, rand3, rand4, rand5]) // since the state changes multiple times

  const handleRoll = () => { // handles roll
    setRolling(false);
    setDice(() => DiceList[rand]);
    setDice2(() => DiceList[rand2]);
    setDice3(() => DiceList[rand3]);
    setDice4(() => DiceList[rand4]);
    setDice5(() => DiceList[rand5]);

    if (rand === rand2 || rand === rand3 || rand === rand4 || rand === rand5) return setScore((prev) => prev + 1);
    if (rand2 === rand || rand2 === rand3 || rand2 === rand4 || rand2 === rand5) return setScore((prev) => prev + 1);
    if (rand3 === rand || rand3 === rand || rand3 === rand4 || rand3 === rand5) return setScore((prev) => prev + 1);
    if (rand4 === rand || rand4 === rand2 || rand4 === rand3 || rand4 === rand5) return setScore((prev) => prev + 1);
  }
  const stopRoll = () => { // stops roll
    setRolling(!false);
  }

  const secretButton = () => { // score a point automatically
    setDice(() => DiceList[0]);
    setDice2(() => DiceList[0]);
    setDice3(() => DiceList[0]);
    setDice4(() => DiceList[0]);
    setDice5(() => DiceList[0]);
    setScore((prev) => prev + 1);
  }

  const resetScore = () => { // reset score
    setScore((prev) => prev = 0);
    setDice(() => DiceList[5]);
    setDice2(() => DiceList[5]);
    setDice3(() => DiceList[5]);
    setDice4(() => DiceList[5]);
    setDice5(() => DiceList[5]);
  }

  return (

    <M.Container id="dice-main-container"  >
      <M.Container maxWidth="md" id="dice-sub-container">
        <div className="score-container"><h1>Your score: {score}</h1></div>
        <div className="header-container">
          {rolling ? <h1 >Click the button to roll!</h1> : <h1>Feeling Lucky?</h1>}
          {rolling ? null : <h1>Just match two to score a point!</h1>}
        </div>
        <div className="dice-container">
          <div className="dice">{dice}</div>
          <div className="dice">{dice2}</div>
          <div className="dice">{dice3}</div>
          <div className="dice">{dice4}</div>
          <div className="dice">{dice5}</div>
        </div>
        <div className="button-container">

          {rolling ?
            <M.Tooltip title="Reset Score" aria-label="Reset Score">
              <ColorButton2 id="reset-button" color="primary" variant="contained" onClick={resetScore} >Reset</ColorButton2>
            </M.Tooltip> : null}

          {rolling ?
            <M.Tooltip title="Roll Dice" aria-label="Roll Dice">
              <ColorButton2 color="primary" variant="contained" onClick={handleRoll} >Roll</ColorButton2>
            </M.Tooltip>
            : <M.Tooltip title="Stop Dice Roll" aria-label="Stop Dice Roll">
              <ColorButton color='primary' variant="contained" onClick={stopRoll} >Stop</ColorButton>
            </M.Tooltip>}
            
          {rolling ?
            <M.Tooltip title="Cheat score" aria-label="Cheat score">
              <ColorButton2 id="secret-button" color="primary" variant="contained" onClick={secretButton} >Score</ColorButton2>
            </M.Tooltip> : null}
        </div>
      </M.Container>
    </M.Container>
  );
}

export default App;
