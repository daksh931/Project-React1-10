import { createElement, useState } from "react";


export default function GamePage() {

    const dicenumbers = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();

    const Box = (props) => {
        return (<div className="border-2 mx-1 border-black w-10 h-10 flex justify-center items-center text-xl font-semibold">
            {props.number}
        </div>);
    }

    return (
        <>
            <div className="main px-2 sm:px-4 flex w-full">

                <div className="score">
                    <h1 className="text-5xl">0</h1>
                    Total Score
                </div>
                <div className="boxes flex pt-5 justify-end w-full">

                    {dicenumbers.map(
                        (value, i) => <Box number={value} />
                    )}
                </div>

            </div>
        </>
    )
}
