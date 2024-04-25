export default function BtnLeftNav({iconOutlined, iconFilled, isActive, isSupport}){
    return(
        <button className={`btn-nav group w-14 h-14 flex justify-center items-center rounded-lg transition ${isActive?"bg-accent2 text-light1":"bg-light1 hover:bg-light3"} ${isSupport?"absolute bottom-5 left-1/2 -translate-x-1/2":""}`}>
            {/* <div className="icon-outlined block group-hover:hidden relative top-1 transition">{iconOutlined}</div> */}
            <div className="icon-outlined block group-hover:hidden relative top-1 transition"><iconify-icon icon={iconOutlined}></iconify-icon></div>
            <div className={`icon-filled hidden group-hover:block relative top-1 transition ${isActive?"text-light1":"text-accent2"}`}><iconify-icon icon={iconFilled}></iconify-icon></div>
        </button>
    )
}