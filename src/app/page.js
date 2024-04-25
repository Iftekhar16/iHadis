// import Image from "next/image";
import NextImage from "./components/NextImage";

export default function Home() {
    return (
        <main className="main bg-light3 text-dark4 w-[100svw] h-[100svh] overflow-hidden font-inter">
            <div className="top-nav-container bg-light1 h-[70px] flex justify-between items-center px-3">
                <div className="logo-container flex items-center gap-3">
                    <div className="img-container w-11 h-11 relative">
                        <NextImage src={"/images/logos/home-logo.png"}></NextImage>
                    </div>
                    <div className="text">
                        <div className="title text-lg font-bold">হাদিস সমূহ</div>
                        <div className="subtitle text-sm text-dark1">হাদিস পড়ুন শিখুন এবং জানুন</div>
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
        </main>
    );
}
