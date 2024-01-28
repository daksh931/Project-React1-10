import { createElement, useEffect, useState } from "react";
import Navbar from "./Navbar";


export default function GamePage() {

    const diceImageNumbers = [1, 2, 3, 4, 5, 6];

    const [selectedNumber, setSelectedNumber] = useState();
    const [totalScore, setTotalScore] = useState(0);
    const [diceImageNumber, setdiceImageNumber] = useState(1);


    function getRandomNumber() {
        setdiceImageNumber(Math.floor(Math.random() * 6) + 1);
    }

    function totals() {
        if (selectedNumber == diceImageNumber) {
            var t = totalScore
            setTotalScore(selectedNumber + t)
            // console.log(selectedNumber +""+ diceImageNumber)
        }
    }

    useEffect(() => {
        totals();
    }, [diceImageNumber])
    // console.log(diceImageNumber)
    const Box = (props) => {
        return (<div className={`border-2 mx-1 cursor-pointer border-black w-10 h-10 flex justify-center items-center text-xl font-semibold ${props.number === selectedNumber ? "bg-cyan-950 text-white" : "bg-white text-black"
            }`}
            onClick={() => { setSelectedNumber(props.number); getRandomNumber(); }}>
            {props.number}

        </div>);
    }


    // console.log(selectedNumber);

    return (
        <>
        <Navbar/>
            <div className="mainTop px-2 sm:px-10 sm:flex ">

                <div className="score flex  sm:flex sm:flex-col w-full items-center justify-center pt-20 sm:pt-0 sm:items-start ">
                    <h1 className="text-5xl">{totalScore}</h1>
                    Total Score
                </div>

                <div className="rightUpperPart w-full flex flex-col items-center pt-10 sm:pt-10 sm:items-end">


                    <div className="diceBoxes flex ">
                        {diceImageNumbers.map(
                            (value, i) => (<Box key={i} number={value}  >
                            </Box>
                            ))}
                    </div>


                    <div className="number text-2xl pt-4 font-semibold">
                        <h2>
                            You Selected  {selectedNumber}
                        </h2>
                    </div>

                </div>
            </div>


            {/* end main Upper part --------- */}
            {/* main Middle part */}
            <div className="mainMiddlepart pt-20 py-2 w-full flex justify-center items-center">
                <div className="images w-40">
                    {/* {var number = getRandomNumber()} */}
                    <img src={`images/dice_${diceImageNumber}.png`} ></img>

                </div>
            </div>
            <div className="flex items-center z-0 justify-center font-semibold font-serif text-xl w-full">
                Dice Number - {diceImageNumber}
            </div>

            <div className="pt-10 flex items-center justify-center">
                <button className=" font-semibold  bg-black px-3 py-1 rounded-md text-white"
                onClick={() => {setTotalScore(0)}}>
                    Reset Score
                </button>
            </div>


        </>
    )
}

