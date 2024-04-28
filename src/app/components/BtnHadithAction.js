

export default function BtnHadithAction({icon, alertText}){
    return(
        <button className="btn-hadith-action group relative">
            <div className="tag w-fit bg-dark1 text-light1 px-3 py-2 rounded-lg text-[11px] hidden group-hover:block absolute left-1/2 -translate-x-1/2 -top-[110%] transition">{alertText}</div>
            <div className="icon text-2xl text-light4 relative top-[2px]"><iconify-icon icon={icon}></iconify-icon></div>
        </button>
    )
}