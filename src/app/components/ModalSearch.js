

export default function ModalSearch({isModalSearchOpen, closeSearch}){
    return(
        <div className={`modal-search-container text-dark4 dark:text-light3 w-[100svw] h-[100svh] z-[100] xl:hidden ${isModalSearchOpen?"absolute top-0 left-0":"hidden"}`}>
            <div className={`modal-overlay w-[100svw] h-[100svh] bg-dark4 opacity-50 dark:opacity-75 z-[130] ${isModalSearchOpen? "absolute top-0 left-0" : "hidden"}`} onClick={closeSearch}></div>
            <div className={`modal-search w-[80svw] xl:w-auto bg-light1 dark:bg-dark3 rounded-lg shadow-lg z-[150] p-5 absolute ${isModalSearchOpen? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":""}`}>
                <form className="relative mb-5" action="">
                    <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400 dark:text-light4"><div className="relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div></div>
                    <input className="w-full bg-light3 dark:bg-dark1 border-2 border-light3 dark:border-dark1 rounded-lg px-10 py-3" type="text" placeholder="Search For Filter"/>
                </form>
                <div className="font-selector-container mb-5">
                    <div className="title bangla text-xl mb-1">হাদিসের বই সিলেক্ট করুন</div>
                    <div class="select">
                        <select className="w-full bg-light3 dark:bg-dark1 border-2 darK:border-0 border-light3 dark:border-dark3 px-3 py-2 rounded-lg" name="slct" id="slct" onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                            <option className="bangla bg-light1 dark:bg-dark1 hover:bg-light3 px-3 py-2 rounded-lg" value="KFGQ">সকল বই</option>
                            <option className="bangla bg-light1 dark:bg-dark1 hover:bg-light3 px-3 py-2 rounded-lg" value="KFGQ">সকল বই</option>
                            <option className="bangla bg-light1 dark:bg-dark1 hover:bg-light3 px-3 py-2 rounded-lg" value="KFGQ">সকল বই</option>
                        </select>
                    </div>
                </div>
                <div className="font-selector-container mb-5">
                    <div className="title bangla text-xl mb-1">হাদিসের অধ্যায় সিলেক্ট করুন</div>
                    <div class="select">
                        <select className="w-full bg-light3 dark:bg-dark1 border-2 darK:border-0 border-light3 dark:border-dark3 px-3 py-2 rounded-lg" name="slct" id="slct" onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                            <option className="bangla bg-light1 dark:bg-dark1 hover:bg-light3 px-3 py-2 rounded-lg" value="KFGQ">সকল অধ্যায়</option>
                            <option className="bangla bg-light1 dark:bg-dark1 hover:bg-light3 px-3 py-2 rounded-lg" value="KFGQ">সকল অধ্যায়</option>
                            <option className="bangla bg-light1 dark:bg-dark1 hover:bg-light3 px-3 py-2 rounded-lg" value="KFGQ">সকল অধ্যায়</option>
                        </select>
                    </div>
                </div>
                <div className="btn-container w-full flex gap-3">
                    <button className="btn-search-close bg-light3 dark:bg-dark1 dark:text-light3 bangla py-3 w-full rounded-lg" onClick={closeSearch}>বাতিল</button>
                    <button className="btn-search-search bg-accent2 text-light1 bangla py-3 w-full rounded-lg">সার্চ করুন</button>
                </div>
            </div>
        </div>
    )
}