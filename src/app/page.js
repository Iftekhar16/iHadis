// import Image from "next/image";
import NextImage from "./components/NextImage";
import BtnLeftNav from "./components/BtnLeftNav";

export default function Home() {
    return (
        <main className="bg-light3 text-dark4 w-[100svw] h-[100svh] overflow-hidden font-inter">
            <div className="top-nav-container bg-light1 h-[70px] flex justify-between items-center px-3">
                <div className="logo-container flex items-center gap-3">
                    <div className="img-container w-11 h-11 relative">
                        <NextImage src={"/images/logos/home-logo.png"}></NextImage>
                    </div>
                    <div className="text">
                        <div className="title bangla text-lg font-bold">হাদিস সমূহ</div>
                        <div className="subtitle bangla text-sm text-dark1">হাদিস পড়ুন শিখুন এবং জানুন</div>
                    </div>
                </div>
                <div className="search-settings-container flex items-center gap-3">
                    <form className="relative" action="">
                        <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400"><div className="relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div></div>
                        <input className="w-96 border-2 border-light3 rounded-lg px-10 py-3" type="text" placeholder="Search Hadith"/>
                    </form>
                    <button className="btn-settings bg-accent2 text-light1 text-xl flex justify-center items-center w-10 h-10 rounded-lg">
                        <div className="icon relative top-1"><iconify-icon icon="ph:gear-fill"></iconify-icon></div>
                    </button>
                </div>
            </div>


            <div className="main-body-container">
                <div className="left-nav-container bg-light1 w-[90px] h-[calc(100svh-70px)] overflow-y-scroll relative flex flex-col justify-center items-center gap-3 text-3xl">
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
            </div>



        </main>
    );
}
