import { useState } from "react";


export default function Bookmark({color}){

    const [isActive, setIsActive] = useState(false);
    function toggleActive(){
        setIsActive(!isActive);
    }

    return(
        <button className={`color-container ${color} w-10 h-10 rounded-full flex justify-center items-center`} onClick={toggleActive}>
            <div className={`icon-container bg-light1 w-5 h-5 rounded-full ${isActive? "flex justify-center items-center ":"hidden"}`}>
                <div className={`icon text-xs relative top-[2px]`}><iconify-icon icon="mingcute:check-2-fill"></iconify-icon></div>
            </div>
        </button>
    )
}