// import Image from "next/image";
import NextImage from "./components/NextImage";
import BtnLeftNav from "./components/BtnLeftNav";
import Category from "./components/Category";

export default function Home() {
    return (
        <main className="bg-light3 text-dark4 w-[100svw] h-[100svh] overflow-hidden font-inter">
            <div className="top-nav-container bg-light1 h-[80px] flex justify-between items-center px-5">
                <div className="logo-container flex items-center gap-3">
                    <div className="img-container w-11 h-11 relative">
                        <NextImage src={"/images/logos/home-logo.png"}></NextImage>
                    </div>
                    <div className="text">
                        <div className="title bangla text-lg font-bold">হাদিস সমূহ</div>
                        <div className="subtitle bangla text-sm text-dark1">হাদিস পড়ুন শিখুন এবং জানুন</div>
                    </div>
                </div>
                <div className="search-settings-container flex items-center gap-5">
                    <form className="relative" action="">
                        <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400"><div className="relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div></div>
                        <input className="w-96 border-2 border-light3 rounded-lg px-10 py-3" type="text" placeholder="Search Hadith"/>
                    </form>
                    <button className="btn-settings bg-accent2 text-light1 text-xl flex justify-center items-center w-10 h-10 rounded-lg">
                        <div className="icon relative top-1"><iconify-icon icon="ph:gear-fill"></iconify-icon></div>
                    </button>
                </div>
            </div>


            <div className="body-container flex">
                <div className="left-nav-container bg-light1 w-[80px] h-[calc(100svh-70px)] overflow-y-scroll relative flex flex-col justify-center items-center gap-3 text-2xl">
                    <BtnLeftNav iconOutlined="fluent:home-20-regular" iconFilled="fluent:home-20-filled"/>
                    <BtnLeftNav iconOutlined="ph:books-fill" iconFilled="ph:books-fill" isActive={true}/>
                    <BtnLeftNav iconOutlined="mage:book" iconFilled="mage:book-fill"/>
                    <BtnLeftNav iconOutlined="iconoir:bookmark" iconFilled="iconoir:bookmark-solid"/>
                    <BtnLeftNav iconOutlined="heroicons:squares-2x2" iconFilled="heroicons:squares-2x2-16-solid"/>
                    <BtnLeftNav iconOutlined="iconoir:send-diagonal" iconFilled="iconoir:send-diagonal-solid"/>
                    {/* <BtnLeftNav iconOutlined="ri:send-plane-line" iconFilled="ri:send-plane-fill"/>
                    <BtnLeftNav iconOutlined="mingcute:send-line" iconFilled="mingcute:send-fill"/>
                    <BtnLeftNav iconOutlined="bi:send" iconFilled="bi:send-fill"/> */}

                    <BtnLeftNav iconOutlined="bxs:donate-heart" iconFilled="bxs:donate-heart" isActive={true} isSupport={true}/>

                    {/* <button className="btn-nav group w-14 h-14 flex justify-center items-center rounded-lg transition">
                        <div className="icon-outlined block group-hover:hidden relative top-1 transition"><iconify-icon icon={iconOutlined}></iconify-icon></div>
                    </button> */}
                </div>

                
                <div className="w-[calc(100svw-80px)] h-[calc(100svh-80px)] flex gap-3 bg-light3 relative p-3">
                    <div className="top-round-container absolute top-0 left-0">
                        <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H0V50C0 22.3858 22.3858 0 50 0Z" fill="#FFFFFF"/>
                        </svg>
                    </div>


                    <div className="category-col-container w-[300px] h-[calc(100svh-80px-24px)] flex flex-col bg-light1 rounded-lg">
                        <div className="tab-container flex">
                            <button className="book bg-light1 w-full p-3 rounded-tl-lg">বই</button>
                            <button className="chapter bg-accent2 text-light1 w-full p-3 rounded-tr-lg">অধ্যায়</button>
                        </div>
                        <hr/>
                        <form className="relative m-3" action="">
                            <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400"><div className="relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div></div>
                            <input className="w-full bg-light3 rounded-lg px-10 py-3" type="text" placeholder="Search Hadith"/>
                        </form>
                        <div className="categories-container flex flex-col flex-grow-0 overflow-y-scroll pb-3">
                            <Category isActive={true}/>
                            <Category/>
                            <Category/>
                            <Category/>
                            <Category/>
                            <Category/>
                            <Category/>
                        </div>




                    </div>

                    










                </div>


            </div>



        </main>
    );
}
