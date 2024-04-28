

export default function BtnPhoneNav({iconOutlined, iconFilled, isActive, isSupport}){
    return(
        <button className={`btn-nav dark:text-light3 group w-10 h-10 flex justify-center items-center rounded-lg transition ${isActive?"bg-accent2 text-light1":""} ${isSupport?"absolute bottom-6 left-1/2 -translate-x-1/2":""}`}>
            <div className="icon-outlined block group-hover:hidden relative top-1 transition"><iconify-icon icon={iconOutlined}></iconify-icon></div>
            <div className={`icon-filled hidden group-hover:block relative top-1 transition ${isActive?"text-light1":"text-accent2"}`}><iconify-icon icon={iconFilled}></iconify-icon></div>
        </button>
    )
}