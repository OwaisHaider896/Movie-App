import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div>
            <nav className="bg-black flex justify-around items-center p-4">
            <div className="flex justify-center items-center ">
            <FontAwesomeIcon className="text-yellow-400 text-xl" icon={faCamera} />
            <h1 className="text-2xl font-bold text-yellow-400 ml-2 " >MovieFinder</h1>
            </div>
           <input className="p-2 rounded" type="text" placeholder="Search" /> 
           <div className="flex justify-center items-center">
           {/* <FontAwesomeIcon className="text-2xl text-white"  /> */}
           <FontAwesomeIcon className="text-white" icon={["fab", "github"]} />
           <button className="bg-yellow-400 hover:bg-yellow-500 rounded py-2 px-4">Signup</button>
           </div>
           </nav>
        </div>
    )
}

export default Nav
