

export default function Book({book_id, isActive, abvr_code, title, number_of_hadis, setActiveBook}){

    return(
        <button className={`chapter text-left dark:text-light3 group p-3 mx-3 rounded-lg flex items-center gap-3 transition ${isActive?"bg-accent1 dark:bg-dark1":"bg-light1 dark:bg-dark3 hover:bg-accent1 dark:hover:bg-dark1"}`} onClick={()=>{setActiveBook(book_id);console.log("Active Book: ",book_id)}}>
            <div className="relative w-12 h-12">
                <svg viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <path d="M18 1.3094C20.4752 -0.119662 23.5248 -0.119661 26 1.3094L39.6506 9.1906C42.1258 10.6197 43.6506 13.2607 43.6506 16.1188V31.8812C43.6506 34.7393 42.1258 37.3803 39.6506 38.8094L26 46.6906C23.5248 48.1197 20.4752 48.1197 18 46.6906L4.34936 38.8094C1.87416 37.3803 0.349365 34.7393 0.349365 31.8812V16.1188C0.349365 13.2607 1.87416 10.6197 4.34936 9.1906L18 1.3094Z" fill="#2B9E76"/> */}
                    {/* <path className="fill-dark2" d="M18 1.3094C20.4752 -0.119662 23.5248 -0.119661 26 1.3094L39.6506 9.1906C42.1258 10.6197 43.6506 13.2607 43.6506 16.1188V31.8812C43.6506 34.7393 42.1258 37.3803 39.6506 38.8094L26 46.6906C23.5248 48.1197 20.4752 48.1197 18 46.6906L4.34936 38.8094C1.87416 37.3803 0.349365 34.7393 0.349365 31.8812V16.1188C0.349365 13.2607 1.87416 10.6197 4.34936 9.1906L18 1.3094Z" fill={fillColor}/> */}
                    <path className={`transition ${isActive?"fill-accent2":"fill-light3 dark:fill-dark1 group-hover:fill-accent2"}`} d="M18 1.3094C20.4752 -0.119662 23.5248 -0.119661 26 1.3094L39.6506 9.1906C42.1258 10.6197 43.6506 13.2607 43.6506 16.1188V31.8812C43.6506 34.7393 42.1258 37.3803 39.6506 38.8094L26 46.6906C23.5248 48.1197 20.4752 48.1197 18 46.6906L4.34936 38.8094C1.87416 37.3803 0.349365 34.7393 0.349365 31.8812V16.1188C0.349365 13.2607 1.87416 10.6197 4.34936 9.1906L18 1.3094Z"/>
                </svg>
                <div className={`text mt-[2px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isActive? "text-light1":"text-light4 group-hover:text-light1"}`}>{abvr_code}</div>
            </div>
            <div className="text bangla">
                <div className="title text-lg dark:text-light3 font-medium">{title}</div>
                <div className="subtitle text-sm text-light4">সর্বমোট হাদিস {number_of_hadis}</div>
            </div>
        </button>
    )
}