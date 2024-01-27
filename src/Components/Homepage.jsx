
export default function HomePage() {


    return (
        <>
            <div className="main px-1 sm:px-3">

                <div className="upperPart flex flex-col sm:flex-row mt-16 px-2 sm:px-8">

                    <div className="image left flex justify-start z-0 max:h-1 sm:max:h-80  ">
                        <img src="dices.png"></img>
                    </div>
                    <div className="game right w-full sm:w-1/2 ">

                        <div className=" w-full h-3/6 flex items-end justify-center sm:justify-start sm:pl-5 font-bold text-4xl sm:text-5xl md:text-7xl ">
                            <h1> Dice Game!</h1>
                        </div>
                        <div className="button flex justify-center sm:justify-start sm:pl-6 pt-8 sm:pt-3">

                        <button className=" font-bold supportchat bg-black px-5 py-2 rounded-md text-white">

                            PLay Now!
                        </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}