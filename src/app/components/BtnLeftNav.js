

export default function BtnLeftNav({iconOutlined, iconFilled, isActive, isSupport}){
    return(
        <button className={`btn-nav dark:text-light3 group w-12 h-12 flex justify-center items-center rounded-lg transition ${isActive?"bg-accent2 text-light1":"bg-light1 dark:bg-dark1 hover:bg-light3 dark:hover:bg-dark3"} ${isSupport?"absolute bottom-3 left-1/2 -translate-x-1/2":""}`}>
            <div className="icon-outlined block group-hover:hidden relative top-1 transition"><iconify-icon icon={iconOutlined}></iconify-icon></div>
            <div className={`icon-filled hidden group-hover:block relative top-1 transition ${isActive?"text-light1":"text-accent2"}`}><iconify-icon icon={iconFilled}></iconify-icon></div>
        </button>
    )
}