import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BowlingScreen from "./bowling/bowlingScreen";
import { calculateScore, resetScore } from "./bowling/services/bowlingService";

function App() {
  const [displayScore, setDisplayScore] = useState(0);
  let [scoreData, setScoreData] = useState({});
  let [displayFrame, setDisplayFrame] = useState(0);
  let [frameCount, setFrameCount] = useState(0);
  let [calcButton, setCalcButton] = useState(false);
  let [disableScore2, setdisableScore2] = useState(false);
  let [displayMessage, setDisplayMessage] = useState(false);
  let [isFrame10, setisFrame10] = useState(true);

  const onChangeScore = (e) => {
    if (e.target.name === "inputScore1") {
      scoreData.score1 = e.target.value;
      if (scoreData.previousFrame === 9 && scoreData.score1 === "X") {
        setisFrame10((isFrame10 = false));
        setDisplayMessage(
          (displayMessage =
            "Strike in your 10th round, you got two more bonus rounds left!!!!")
        );
      } else if (scoreData.score1 === "X") {
        setdisableScore2((disableScore2 = true));
      }
    }
    if (e.target.name === "inputScore2") {
      scoreData.score2 = e.target.value;
      if (scoreData.previousFrame === 9 && scoreData.score2 === "/") {
        setisFrame10((isFrame10 = false));
        setDisplayMessage(
          (displayMessage =
            "Spare in your 10th round, you got one more bonus round left!!!!")
        );
      } else if (
        scoreData.previousFrame === 9 &&
        parseInt(scoreData.score1) + parseInt(scoreData.score2) === 10
      ) {
        setisFrame10((isFrame10 = false));
        setDisplayMessage(
          (displayMessage =
            "Spare in your 10th round, you got one more bonus round left!!!!")
        );
      }
      else{
        scoreData.bonusScore = "-1";
      }
    }

    if (e.target.name === "bonusScore") {
      scoreData.bonusScore = e.target.value;
    }

    setScoreData(scoreData);
  };

  const scoreCalculate = (e) => {
    calculateScore(scoreData).then((response) => {
      if (response.message) {
        setDisplayMessage(response.message);
      } else {
        setDisplayMessage("");
      }
      setDisplayScore(response.currentScore);
      setDisplayFrame(response.currentFrame);
      setdisableScore2((disableScore2 = false));
      if (response.currentFrame === 10) {
        setCalcButton((calcButton = true));
      }
      setFrameCount(frameCount + 1);
      resetValues();
      setScoreData((scoreData = {}));
      scoreData.previousFrame = response.currentFrame;
    });
  };

  const resetValues = () => {
    document.getElementById("inputScore1").value = "";
    document.getElementById("inputScore2").value = "";
    document.getElementById("bonusScore").value = "";
  };

  const scoreReset = (e) => {
    resetScore().then((response) => {
      if (response.message) {
        setDisplayMessage(response.message);
      }
      setDisplayScore(0);
      setDisplayFrame(0);
      scoreData.score1 = 0;
      scoreData.score2 = 0;
      setCalcButton((calcButton = false));
      setisFrame10((isFrame10 = true));
      resetValues();
    });
  };

  return (
    <div className="App">
      <div>
        <BowlingScreen
          scoreData={scoreData}
          onChangeScore={onChangeScore}
          calculateScore={scoreCalculate}
          displayScore={displayScore}
          displayFrame={displayFrame}
          calcButton={calcButton}
          resetScore={scoreReset}
          disableScore2={disableScore2}
          message={displayMessage}
          isFrame10={isFrame10}
        />
      </div>
    </div>
  );
}

export default App;
