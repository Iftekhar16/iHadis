import Book from "./Book";
import Chapter from "./Chapter";
import Line from "./Line";


export default function ModalCategory({isModalCategoryOpen, closeCategory, tabCategory, showBooks, showChapters, books, chapters}){
    return(
        <div className={`modal-category-container text-dark4 dark:text-light3 w-[100svw] h-[100svh] z-[100] xl:hidden ${isModalCategoryOpen?"absolute top-0 left-0":"hidden"}`}>
            <div className={`modal-overlay w-[100svw] h-[100svh] bg-dark4 opacity-50 dark:opacity-75 z-[130] ${isModalCategoryOpen ? "absolute top-0 left-0" : "hidden"}`} onClick={closeCategory}></div>
            <div className={`modal-category bg-light1 dark:bg-dark3 w-[100svw] xl:w-[300px] h-[100svh] shadow-lg overflow-scroll z-[150] absolute top-0 ${isModalCategoryOpen? "left-0":"-left-full"}`}>
            <div className="settings-top bg-light1 dark:bg-dark3 flex justify-between items-center px-5 py-3 sticky top-0 z-[200]">
                <div className="text bangla text-2xl font-medium">ক্যাটেগরি</div>
                <button className="btn-settings-close text-3xl" onClick={closeCategory}><iconify-icon icon="iconamoon:close-light"></iconify-icon></button>
            </div>
            {/* <Line/> */}
            <div className="tab-container flex">
                <button className={`book w-full p-3 transition ${tabCategory? "bg-accent2 text-light1":"bg-light1 dark:bg-dark3 dark:text-light3"}`} onClick={showBooks}>বই</button>
                <button className={`chapter w-full p-3 transition ${tabCategory? "bg-light1 dark:bg-dark3 dark:text-light3":"bg-accent2 text-light1"}`} onClick={showChapters}>অধ্যায়</button>
            </div>
            <Line/>
            <form className="relative m-3" action="">
                <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400"><div className="relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div></div>
                <input className="w-full bg-light3 dark:bg-dark1 border-2 border-light3 dark:border-dark1 rounded-lg px-10 py-3" type="text" placeholder="Search Hadith"/>
            </form>
            <div className={`books-container overflow-y-scroll pb-3 ${tabCategory? "flex flex-col flex-grow-0":"hidden"}`}>
                {
                    books.map((book, index) => {
                        return <Book abvr_code={book.abvr_code} title={book.title} number_of_hadis={book.number_of_hadis}/>
                    })
                }
                {/* <Book isActive={true}/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/> */}
            </div>
            <div className={`chapters-container overflow-y-scroll pb-3 ${tabCategory? "hidden":"flex flex-col flex-grow-0"}`}>
                {
                    chapters.map((chapter, index) => {
                        return <Chapter chapter_id={chapter.chapter_id} title={chapter.title} hadis_range={chapter.hadis_range}/>
                    })
                }
                {/* <Chapter isActive={true}/>
                <Chapter/>
                <Chapter/>
                <Chapter/>
                <Chapter/>
                <Chapter/>
                <Chapter/> */}
            </div>
            </div>
        </div>
    )
}