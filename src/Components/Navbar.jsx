import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// import { fabars } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    const [navNutton,setNavButton] = useState(true)

    useEffect ( 
        ()=>{}, [navNutton])

    const  navSet = () => { 
        if(navNutton == false){setNavButton(true)}
        else{
            setNavButton(false)
        }}

    

    return (
        <>
            <div className="mainNav  p-0 m-0 top-0">
                
                <div className=' sm:hidden'>
                <button 
                    onClick={navSet}
                    >
                    <FontAwesomeIcon icon={faBars}       className={` barIcon text-4xl p-4 sm:hidden ${navNutton ? "flex" : "hidden p-0"}`} />
                    <FontAwesomeIcon icon={faArrowLeft}  className={` barIcon text-4xl p-4 sm:hidden ${navNutton ? "hidden" : "flex z-10"}`}/>
                    
                </button>
                        </div>
                    

                {/* lower to sm screen  */}
                <div className="LowerMain sm:hidden">

                

                <div className={` navItems  flex-col absolute text-3xl pt-8 pb-[100px] text-start h-[100vh] w-[85vw] bg-opacity-95 px-2 py-1 bg-slate-100 text-slate-500 ${navNutton ? "hidden" : "top-15 pt-0 flex "}`}

                >
                    
                    <Link to="/" className="py-12 pl-10 cursor-pointer font-semibold hover:bg-slate-200 hover:text-blue-400 hover:rounded-xl border-b-2 border-cyan-500"> Dashboard</Link>
                    <Link to="/game" className="py-12 pl-10 cursor-pointer font-semibold hover:bg-slate-200 hover:text-blue-400 hover:rounded-xl border-b-2 border-cyan-500"> Game</Link>
                    
                    </div>
                </div>

                {/* from small onward screen   */}
                <div className="navItems hidden sm:flex justify-start  bg-slate-300  text-slate-800">



                    <Link to="/" className="pr-5 pt-2 py-1 pl-3 cursor-pointer font-semibold hover:bg-slate-200 hover:text-blue-900 hover:rounded-xl"> Dashboard</Link>
                    <Link to="/game" className="pr-5 pt-2 py-1 pl-2 cursor-pointer font-semibold hover:bg-slate-200 hover:text-blue-900 hover:rounded-xl"> Game</Link>
                    </div>
            </div>
        </>
    )
} 