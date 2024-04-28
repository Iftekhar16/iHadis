

export default function ModalShare({isModalShareOpen, closeShare}){

    return(
        <div className={`modal-share-container text-dark4 dark:text-light3 w-[100svw] h-[100svh] z-[100] ${isModalShareOpen?"absolute top-0 left-0":"hidden"}`}>
            <div className={`modal-overlay w-[100svw] h-[100svh] bg-dark4 opacity-50 dark:opacity-75 z-[130] ${isModalShareOpen? "absolute top-0 left-0" : "hidden"}`} onClick={closeShare}></div>
            <div className={`modal-share w-[80svw] xl:w-[40svw] bg-light1 dark:bg-dark3 rounded-lg shadow-lg z-[150] p-5 absolute ${isModalShareOpen? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":""}`}>
                <div className="title text-2xl bangla font-bold mb-5">এই দোয়াটি শেয়ার করুন</div>
                <div className="title text-xl bangla mb-3">সোশ্যাল মিডিয়াতে শেয়ার করুন</div>
                <div className="share-socials-container flex flex-wrap gap-3 text-2xl text-light1 mb-5">
                    <button className="btn-social w-10 h-10 bg-[#3b5998] rounded-full flex justify-center items-center">
                        <div className="icon relative top-1"><iconify-icon icon="ri:facebook-fill"></iconify-icon></div>
                    </button>
                    <button className="btn-social w-10 h-10 bg-[#00aced] rounded-full flex justify-center items-center">
                        <div className="icon relative top-1"><iconify-icon icon="fa6-brands:x-twitter"></iconify-icon></div>
                    </button>
                    <button className="btn-social w-10 h-10 bg-[#37aee2] rounded-full flex justify-center items-center">
                        <div className="icon relative top-1 right-[2px]"><iconify-icon icon="bxl:telegram"></iconify-icon></div>
                    </button>
                    <button className="btn-social w-10 h-10 bg-[#25d366] rounded-full flex justify-center items-center">
                        <div className="icon relative top-1"><iconify-icon icon="dashicons:whatsapp"></iconify-icon></div>
                    </button>
                    <button className="btn-social w-10 h-10 bg-[#007fb1] rounded-full flex justify-center items-center">
                        <div className="icon relative top-1"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></div>
                    </button>
                    <button className="btn-social w-10 h-10 bg-[#ff4500] rounded-full flex justify-center items-center">
                        <div className="icon relative top-1"><iconify-icon icon="fa-brands:reddit-alien"></iconify-icon></div>
                    </button>
                    <button className="btn-social w-10 h-10 bg-[#7f7f7f] rounded-full flex justify-center items-center">
                        <div className="icon relative top-1"><iconify-icon icon="dashicons:email"></iconify-icon></div>
                    </button>
                </div>
                <div className="title text-xl bangla mb-3">অথবা, লিংক কপি করুন</div>
                <div className="bg-light3 dark:bg-dark1 rounded-lg px-5 py-3 pr-10 mb-5 relative">
                    <div className="text text-xs break-words">https://ihadis.com/bukhari/hadith/2</div>
                    <button className="absolute top-1/2 -translate-y-1/2 right-3">
                        <div className="icon text-2xl text-light4 relative top-[2px]"><iconify-icon icon="ph:copy"></iconify-icon></div>
                    </button>
                </div>
                <div className="btn-container w-full flex gap-3">
                    <button className="btn-share-close bg-accent2 text-light1 bangla py-3 w-full rounded-lg" onClick={closeShare}>ওকে</button>
                </div>
            </div>
        </div>
    )
}