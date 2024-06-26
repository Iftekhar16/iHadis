"use client"
import { useEffect, useState } from "react";
import NextImage from "./components/NextImage";
import BtnLeftNav from "./components/BtnLeftNav";
import Book from "./components/Book";
import Chapter from "./components/Chapter";
import BtnHadithAction from "./components/BtnHadithAction";
import ModalSettings from "./components/ModalSettings";
import Line from "./components/Line";
import ModalCategory from "./components/ModalCategory";
import ModalSearch from "./components/ModalSearch";
import PhoneNav from "./components/PhoneNav";

export default function Home() {


    // data fetching
    const [books, setBooks] = useState([]);
    // const [chapters, setChapters] = useState([]);
    // const [sections, setSections] = useState([]);
    // const [hadiths, setHadiths] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('src/app/api');
                const response = await fetch('/api/route');
                const data = await response.json();

                setBooks(data.books);
                // setChapters(data.chapter);
                // setSections(data.section);
                // setHadiths(data.hadith);
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
      fetchData();
    }, []);

    console.log("Books: ",books);
    // console.log(chapters);
    // console.log(sections);
    // console.log(hadiths);




    
    const [isModalSearchOpen, setIsSearchModalOpen] = useState(false);
    function openSearch(){
        setIsSearchModalOpen(true);
    }
    function closeSearch(){
        setIsSearchModalOpen(false);
    }

    const [isModalSettingsOpen, setIsModalSettingsOpen] = useState(false);
    function openSettings(){
        setIsModalSettingsOpen(true);
    }
    function closeSettings(){
        setIsModalSettingsOpen(false);
    }

    const [isModalCategoryOpen, setIsModalCategoryOpen] = useState(false);
    function openCategory(){
        setIsModalCategoryOpen(true);
    }
    function closeCategory(){
        setIsModalCategoryOpen(false);
    }


    const [tabCategory, setTabCategory] = useState(true);
    function showBooks() {
        setTabCategory(true);
    }
    function showChapters() {
        setTabCategory(false);
    }


    const [dark, setDark] = useState(false);
    function toggleDark() {
        setDark(!dark);
    }


    return (
        <main className={`bg-light3 dark:bg-dark4 text-dark4 dark:text-light1 w-[100svw] h-[100svh] overflow-hidden font-inter ${dark? "dark":""}`}>
            <PhoneNav isActive={true}/>
            <ModalSearch isModalSearchOpen={isModalSearchOpen} closeSearch={closeSearch}/>
            <ModalCategory isModalCategoryOpen={isModalCategoryOpen} closeCategory={closeCategory} tabCategory={tabCategory} showBooks={showBooks} showChapters={showChapters}/>
            <ModalSettings isModalSettingsOpen={isModalSettingsOpen} closeSettings={closeSettings} dark={dark} toggleDark={toggleDark}/>
            <div className="top-nav-container bg-light1 dark:bg-dark3 h-[80px] flex justify-between items-center px-5">
                <div className="logo-container flex items-center gap-3">
                    <div className="img-container w-11 h-11 relative">
                        <NextImage src={"/images/logos/home-logo.png"} alt={"home-logo"}></NextImage>
                    </div>
                    <div className="text">
                        <div className="title bangla hidden xl:block text-lg font-bold dark:text-light1">হাদিস সমূহ</div>
                        <div className="title bangla xl:hidden text-lg font-bold text-accent2">আল হাদিস</div>
                        <div className="subtitle hidden xl:block bangla text-sm text-dark1 dark:text-light4">হাদিস পড়ুন শিখুন এবং জানুন</div>
                    </div>
                </div>
                <div className="search-settings-container flex items-center gap-5">
                    <form className="relative hidden xl:block" action="">
                        <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400 dark:text-light4"><div className="relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div></div>
                        <input className="w-96 bg-light1 dark:bg-dark1 border-2 border-light3 dark:border-dark1 rounded-lg px-10 py-3" type="text" placeholder="Search For Filter"/>
                    </form>
                    <div className="flex gap-3">
                        <button className="btn-settings bg-light3 dark:bg-dark1 text-light4 text-xl flex justify-center items-center w-10 h-10 rounded-lg xl:hidden" onClick={openSearch}>
                            <div className="icon relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div>
                        </button>
                        <button className="btn-settings bg-accent2 text-light1 text-xl hidden xl:flex justify-center items-center w-10 h-10 rounded-lg" onClick={toggleDark}>
                            <div className={`icon relative top-1 ${dark? "hidden":""}`}><iconify-icon icon="mingcute:sun-fill"></iconify-icon></div>
                            <div className={`icon relative top-1 ${dark? "":"hidden"}`}><iconify-icon icon="mingcute:moon-fill"></iconify-icon></div>
                        </button>
                        <button className="btn-settings bg-accent2 text-light1 text-xl flex justify-center items-center w-10 h-10 rounded-lg" onClick={openSettings}>
                            <div className="icon relative top-1"><iconify-icon icon="ph:gear-fill"></iconify-icon></div>
                        </button>
                    </div>
                </div>
            </div>


            <div className="body-container w-[100svw] flex flex-grow">
                <div className="left-nav-container bg-light1 dark:bg-dark3 w-[80px] h-[calc(100svh-70px)] overflow-y-scroll relative hidden xl:flex xl:flex-col xl:justify-center xl:items-center gap-3 text-2xl pb-20">
                    <BtnLeftNav iconOutlined="fluent:home-20-regular" iconFilled="fluent:home-20-filled"/>
                    <BtnLeftNav iconOutlined="ph:books-fill" iconFilled="ph:books-fill" isActive={true}/>
                    <BtnLeftNav iconOutlined="mage:book" iconFilled="mage:book-fill"/>
                    <BtnLeftNav iconOutlined="iconoir:bookmark" iconFilled="iconoir:bookmark-solid"/>
                    <BtnLeftNav iconOutlined="heroicons:squares-2x2" iconFilled="heroicons:squares-2x2-16-solid"/>
                    <BtnLeftNav iconOutlined="iconoir:send-diagonal" iconFilled="iconoir:send-diagonal-solid"/>
                    <BtnLeftNav iconOutlined="bxs:donate-heart" iconFilled="bxs:donate-heart" isActive={true} isSupport={true}/>
                </div>

                
                <div className="w-[400px] xl:w-[calc(100svw-80px)] h-[calc(100svh-80px)] flex gap-3 bg-light3 dark:bg-dark4 relative p-3">
                    <div className="top-round-container hidden xl:block absolute top-0 left-0">
                        <svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H0V50C0 22.3858 22.3858 0 50 0Z" fill={`${dark? "#202020":"#FFFFFF"}`}/>
                        </svg>
                    </div>


                    <div className="category-col-container w-[300px] h-[calc(100svh-80px-24px)] hidden xl:flex xl:flex-col bg-light1 dark:bg-dark3 rounded-lg">
                        <div className="tab-container flex">
                            <button className={`book w-full p-3 rounded-tl-lg transition ${tabCategory? "bg-accent2 text-light1":"bg-light1 dark:bg-dark3 dark:text-light1"}`} onClick={showBooks}>বই</button>
                            <button className={`chapter w-full p-3 rounded-tr-lg transition ${tabCategory? "bg-light1 dark:bg-dark3 dark:text-light1":"bg-accent2 text-light1"}`} onClick={showChapters}>অধ্যায়</button>
                        </div>
                        <Line/>
                        <form className="relative m-3" action="">
                            <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400"><div className="relative top-1"><iconify-icon icon="mingcute:search-line"></iconify-icon></div></div>
                            <input className="w-full bg-light3 dark:bg-dark1 border-2 border-light3 dark:border-dark1 rounded-lg px-10 py-3" type="text" placeholder="Search Hadith"/>
                        </form>
                        <div className={`books-container overflow-y-scroll pb-3 ${tabCategory? "flex flex-col flex-grow-0":"hidden"}`}>
                            <Book isActive={true}/>
                            <Book/>
                            <Book/>
                            <Book/>
                            <Book/>
                            <Book/>
                            <Book/>
                        </div>
                        <div className={`books-container overflow-y-scroll pb-3 ${tabCategory? "hidden":"flex flex-col flex-grow-0"}`}>
                            <Chapter isActive={true}/>
                            <Chapter/>
                            <Chapter/>
                            <Chapter/>
                            <Chapter/>
                            <Chapter/>
                            <Chapter/>
                        </div>




                    </div>

                    <div className="hadiths-container w-[300px] xl:w-[calc(100svw-80px-300px-36px)] h-[calc(100svh-80px-24px)] overflow-y-scroll rounded-lg flex flex-col gap-3">
                        <button className="show-chapter-container bg-light1 dark:bg-dark3 p-3 rounded-lg flex items-center xl:hidden gap-3" onClick={openCategory}>
                            <div className="icon text-xl relative top-1"><iconify-icon icon="ic:round-menu"></iconify-icon></div>
                            <div className="text dark:text-light1 bangla text-xl">সহিহ বুখারী</div>
                        </button>
                        <div className="book-title-container bg-light1 dark:bg-dark3 rounded-lg">
                            <div className="breadcrumb-container bg-light2 dark:bg-dark3 text-light4 dark:text-light1 flex items-center px-5 py-3 rounded-t-lg">
                                <div className="icon text-xl relative top-[2px]"><iconify-icon icon="ph:books-fill"></iconify-icon></div>
                                <div className="icon relative top-[2px]"><iconify-icon icon="iconamoon:arrow-right-2-light"></iconify-icon></div>
                                <div className="text text-xs">Bukhari</div>
                                <div className="icon relative top-[2px]"><iconify-icon icon="iconamoon:arrow-right-2-light"></iconify-icon></div>
                                <div className="text text-xs">1</div>
                            </div>
                            <Line/>
                            <div className="flex justify-between items-center px-5 py-3 gap-3">
                                <div className="left flex items-center gap-5">
                                    <div className="svg-container w-14 h-14 relative top-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 39" fill="none"><path d="M44.7051 34.3757H44.2778C43.5166 33.6621 43.084 32.6705 43.084 31.6189C43.084 30.5674 43.5166 29.5758 44.2777 28.8623H44.7051C45.3176 28.8623 45.8938 28.6234 46.3275 28.1897C46.7613 27.7559 47 27.1799 47 26.5674C47 25.302 45.9705 24.2725 44.7051 24.2725H42.5956C42.8358 24.0891 43.0662 23.8898 43.2835 23.6724C44.5637 22.3921 45.2656 20.6899 45.2596 18.879C45.2481 15.3891 42.5303 12.5124 39.0775 12.1852C39.1794 11.9326 39.2332 11.6603 39.2332 11.3795C39.2332 10.1936 38.2687 9.22874 37.0832 9.22874H36.7187C36.0496 8.59231 35.6695 7.71363 35.6695 6.78208C35.6695 5.85034 36.0498 4.97147 36.7192 4.33505H37.0832C37.6563 4.33505 38.1961 4.1118 38.6046 3.70477C39.0099 3.29802 39.2332 2.75798 39.2332 2.18425C39.2332 0.998781 38.2687 0.0343628 37.0832 0.0343628H11.5022C7.74292 0.0343628 4.67543 3.05154 4.66432 6.75986C4.65836 8.57074 5.36014 10.273 6.64034 11.5532C6.85772 11.7706 7.08804 11.9699 7.32827 12.1533H4.5101C3.32409 12.1533 2.35921 13.1177 2.35921 14.3032C2.35921 14.8777 2.58283 15.4178 2.98866 15.8237C3.39523 16.2302 3.93546 16.454 4.51001 16.454H4.87362C5.543 17.0905 5.92341 17.9694 5.92341 18.9011C5.92341 19.8331 5.54291 20.7121 4.87325 21.3486H4.5101C3.32409 21.3486 2.35921 22.313 2.35921 23.4985C2.35921 24.0722 2.58246 24.6122 2.98949 25.0207C3.14169 25.1724 3.31252 25.2985 3.49685 25.397C1.40609 26.6946 0.0084779 28.9869 3.25923e-05 31.595C-0.00575061 33.5667 0.758275 35.4199 2.15148 36.8131C3.53944 38.2011 5.38447 38.9655 7.34663 38.9655H44.7051C45.3176 38.9655 45.8937 38.7267 46.3275 38.2929C46.7613 37.8592 47 37.2831 47 36.6706C47 35.4052 45.9705 34.3757 44.7051 34.3757ZM45.6231 26.5674C45.6231 26.8122 45.5274 27.0425 45.3537 27.2162C45.1802 27.3897 44.9498 27.4854 44.7051 27.4854H39.1997V25.6495H44.7051C45.2113 25.6495 45.6231 26.0613 45.6231 26.5674ZM7.61412 10.5797C6.59509 9.56077 6.0365 8.20585 6.04128 6.76427C6.05018 3.81272 8.49987 1.41141 11.5022 1.41141H37.0832C37.5095 1.41141 37.8562 1.75812 37.8562 2.18434C37.8562 2.39125 37.7756 2.58604 37.631 2.73117C37.484 2.87759 37.2895 2.95819 37.0832 2.95819H15.0768C14.6964 2.95819 14.3883 3.26644 14.3883 3.64666C14.3883 4.02688 14.6964 4.33514 15.0768 4.33514H34.9696C34.5312 5.06502 34.2924 5.90698 34.2924 6.78226C34.2924 7.65727 34.5311 8.49914 34.9693 9.22883H11.4123C10.7487 9.22883 10.1271 8.96647 9.66193 8.49005C9.19707 8.0139 8.94977 7.38601 8.96574 6.72195C8.99741 5.40586 10.1213 4.33514 11.471 4.33514H12.3228C12.7032 4.33514 13.0113 4.02688 13.0113 3.64666C13.0113 3.26644 12.7032 2.95819 12.3228 2.95819H11.471C9.38021 2.95819 7.63873 4.63164 7.58906 6.68881C7.56419 7.72685 7.95047 8.70816 8.67658 9.45189C9.40306 10.196 10.3746 10.6058 11.4123 10.6058H37.0832C37.5095 10.6058 37.8562 10.953 37.8562 11.3796C37.8562 11.5864 37.7759 11.7806 37.6301 11.9264C37.4836 12.0728 37.2894 12.1535 37.0832 12.1535H11.4123C9.97771 12.1535 8.62876 11.5945 7.61412 10.5797ZM3.96235 14.8501C3.81649 14.7042 3.73617 14.5101 3.73617 14.3033C3.73617 13.8771 4.08334 13.5303 4.5101 13.5303H11.4122H37.0832H38.4207C41.4227 13.5303 43.873 15.9317 43.8826 18.8835C43.8874 20.3248 43.3288 21.6797 42.3098 22.6986C41.4592 23.5493 40.3735 24.0781 39.1997 24.2273V22.6629C39.9731 22.5229 40.683 22.1483 41.2457 21.5719C41.9722 20.8278 42.3586 19.8461 42.3338 18.8079C42.2853 16.7507 40.5443 15.077 38.4529 15.077H4.5101C4.30329 15.0772 4.10877 14.9965 3.96235 14.8501ZM6.62327 16.4542H38.4529C39.8028 16.4542 40.9262 17.5247 40.9572 18.8408C40.9732 19.5053 40.7258 20.1337 40.2605 20.6102C39.9614 20.9165 39.5975 21.1338 39.1997 21.2502V19.8103C39.1997 19.43 38.8915 19.1218 38.5112 19.1218H24.8936C24.5133 19.1218 24.2051 19.43 24.2051 19.8103C24.2051 20.1905 24.5133 20.4987 24.8936 20.4987H29.5405V21.3488H6.62299C7.06151 20.6188 7.30045 19.7767 7.30045 18.9013C7.30045 18.026 7.0616 17.184 6.62327 16.4542ZM30.9175 20.4987H37.8228V30.2596L34.6868 28.6351C34.5875 28.5837 34.4788 28.5579 34.3702 28.5579C34.2616 28.5579 34.1528 28.5837 34.0535 28.6351L30.9176 30.2596V20.4987H30.9175ZM4.5101 22.7256H29.5405V24.2724H4.5101C4.30319 24.2724 4.1084 24.1918 3.96318 24.0471C3.81676 23.9003 3.73617 23.7055 3.73617 23.4986C3.73626 23.0724 4.08343 22.7256 4.5101 22.7256ZM45.3537 37.3193C45.1801 37.493 44.9497 37.5886 44.7051 37.5886H7.34663C5.7523 37.5886 4.25307 36.9674 3.12526 35.8396C1.99313 34.7075 1.3723 33.2015 1.37699 31.5992C1.38754 28.3185 4.10996 25.6495 7.44568 25.6495H29.5405V27.4854H7.41089C5.14993 27.4854 3.26727 29.2944 3.21402 31.5182C3.1875 32.6407 3.60526 33.7017 4.39049 34.5057C5.17572 35.3098 6.22551 35.7526 7.34654 35.7526H32.442C32.8223 35.7526 33.1304 35.4444 33.1304 35.0641C33.1304 34.6839 32.8223 34.3757 32.442 34.3757H7.34663C6.59959 34.3757 5.89954 34.0802 5.37566 33.5437C4.85168 33.0072 4.57289 32.2994 4.59061 31.551C4.62614 30.0685 5.89128 28.8623 7.41089 28.8623H29.5405V31.3915C29.5405 31.6319 29.6658 31.8548 29.8713 31.9798C30.0767 32.1047 30.3323 32.1134 30.5458 32.0028L34.3702 30.0216L38.1947 32.0028C38.2942 32.0544 38.4029 32.08 38.5113 32.08C38.6355 32.08 38.7594 32.0464 38.869 31.9798C39.0744 31.8548 39.1998 31.6319 39.1998 31.3915V28.8623H42.5056C41.9896 29.677 41.707 30.6282 41.707 31.6189C41.707 32.6097 41.9896 33.5608 42.5057 34.3757H35.1959C34.8156 34.3757 34.5074 34.6839 34.5074 35.0641C34.5074 35.4444 34.8156 35.7526 35.1959 35.7526H44.7051C45.2113 35.7526 45.6231 36.1644 45.6231 36.6706C45.6231 36.9153 45.5274 37.1456 45.3537 37.3193Z" fill="#2b9e76"></path></svg>
                                    </div>
                                    <div className="text bangla">
                                        <div className="title text-lg text-dark4 dark:text-light1 font-medium">সহিহ বুখারী</div>
                                        <div className="subtitle text-sm text-light4">সর্বমোট হাদিস - ৭৫৬৩</div>
                                    </div>
                                </div>
                                <div className="right text-2xl font-medium dark:text-light1">صحيح البخاري</div>
                            </div>
                        </div>
                        <div className="book-container flex flex-col flex-grow-1 gap-3">
                            <div className="chapter-title-container bg-light1 dark:bg-dark3 p-5 rounded-lg flex items-center gap-3">
                                <div className="bg-accent2 text-light1 font-bold w-10 h-10 flex justify-center items-center rounded-lg">১</div>
                                <div className="text dark:text-light1 bangla text-xl">ওহীর সূচনা অধ্যায়</div>
                            </div>
                            <div className="chapter-container flex flex-col flex-grow-1 gap-3">
                                <div className="chapter-title-container bg-light1 dark:bg-dark3 rounded-lg">
                                    <div className="flex items-center gap-3 px-5 py-3">
                                        <div className="svg-container w-8 h-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><path d="M37.7356 8.7519H36.9469V8.17565C36.9469 7.34878 36.5063 6.59503 35.7969 6.20815C31.055 3.62253 24.6956 4.5419 20 8.39065C15.3038 4.5419 8.9425 3.62378 4.20312 6.20815C3.49312 6.59503 3.0525 7.34878 3.0525 8.17628V8.75253H2.26437C1.01562 8.7519 0 9.76753 0 11.0163V32.9888C0 34.2375 1.01562 35.2531 2.26437 35.2531H20H20.0006C20.1537 35.2531 20.3075 35.2219 20.4531 35.1588C20.5725 35.1063 20.675 35.0313 20.7669 34.9456C20.7675 34.9475 20.7687 34.9488 20.7694 34.9513C24.4937 31.5 29.7362 30.3138 33.8119 32.0031C34.5175 32.2957 35.3162 32.2163 35.9475 31.795C36.5731 31.3763 36.9469 30.6756 36.9469 29.9206V11.0163H37.7356V32.9888H24.8688C24.2438 32.9888 23.7369 33.4956 23.7369 34.1206C23.7369 34.7456 24.2438 35.2525 24.8688 35.2525H37.7356C38.9844 35.2525 40 34.2369 40 32.9881V11.0163C40 9.76753 38.9844 8.7519 37.7356 8.7519ZM2.26437 11.0163H4.185C4.81063 11.0163 5.31687 10.5094 5.31687 9.8844L5.28687 8.1969C9.32625 5.99253 14.8462 6.90315 18.8681 10.39V31.7644C14.7025 28.885 9.59875 28.1388 5.31687 29.9213V13.7338C5.31687 13.1082 4.81 12.6019 4.185 12.6019C3.56 12.6019 3.05313 13.1088 3.05313 13.7338V29.9213C3.05313 30.6769 3.42688 31.3769 4.05312 31.7956C4.68563 32.2181 5.48438 32.2956 6.18937 32.0025C9.35437 30.6906 13.2188 31.1194 16.5325 32.9894H2.26437V11.0163ZM34.6781 29.9106C30.4 28.1363 25.2975 28.8894 21.1325 31.7694V10.4013C25.155 6.9119 30.6706 5.99128 34.6838 8.17628L34.6781 29.9106Z" fill="#2b9e76"/></svg>
                                        </div>
                                        <div className="title bangla text-lg text-dark4 dark:text-light1 font-medium">১/১. অধ্যায়ঃ</div>
                                    </div>
                                    <div className="bangla text-lg text-dark4 dark:text-light1 font-medium px-5 pb-3">আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে ওয়াহী [১] শুরু হয়েছিল।</div>
                                    <Line/>
                                    <div className="bangla text-dark1 dark:text-light1 font-medium px-5 py-3">এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)</div>
                                </div>
                                <div className="chapter w-full xl:w-[calc(100svw-80px-300px-36px)] bg-light1 dark:bg-dark3 p-5 rounded-lg">
                                    <div className="title-container flex items-center gap-3 mb-5">
                                        <div className="svg-container w-7 h-7">
                                            <svg class="fill-[#2b9e76]" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 24.875C12.4259 24.8755 12.3525 24.8613 12.284 24.8333C12.2155 24.8053 12.1531 24.764 12.1006 24.7119L8.89433 21.5H4.06246C3.91327 21.5 3.7702 21.4408 3.66471 21.3353C3.55922 21.2298 3.49996 21.0867 3.49996 20.9375V16.1056L0.288083 12.8994C0.183316 12.794 0.124512 12.6514 0.124512 12.5028C0.124512 12.3542 0.183316 12.2117 0.288083 12.1063L3.49996 8.89439V4.06252C3.49996 3.91333 3.55922 3.77026 3.66471 3.66477C3.7702 3.55928 3.91327 3.50002 4.06246 3.50002H8.89433L12.1062 0.288144C12.2116 0.183378 12.3542 0.124573 12.5028 0.124573C12.6514 0.124573 12.7939 0.183378 12.8993 0.288144L16.1056 3.50002H20.9375C21.0866 3.50002 21.2297 3.55928 21.3352 3.66477C21.4407 3.77026 21.5 3.91333 21.5 4.06252V8.89439L24.7118 12.1063C24.8166 12.2117 24.8754 12.3542 24.8754 12.5028C24.8754 12.6514 24.8166 12.794 24.7118 12.8994L21.5 16.1056V20.9375C21.5 21.0867 21.4407 21.2298 21.3352 21.3353C21.2297 21.4408 21.0866 21.5 20.9375 21.5H16.1056L12.8937 24.7119C12.7889 24.8158 12.6475 24.8744 12.5 24.875ZM4.62496 20.375H9.12496C9.19899 20.3746 9.27237 20.3888 9.34091 20.4168C9.40944 20.4448 9.47177 20.486 9.52433 20.5381L12.5 23.5194L15.4756 20.5438C15.5277 20.4906 15.5898 20.4483 15.6584 20.4194C15.7269 20.3904 15.8005 20.3753 15.875 20.375H20.375V15.875C20.3745 15.801 20.3887 15.7276 20.4167 15.6591C20.4447 15.5905 20.486 15.5282 20.5381 15.4756L23.5193 12.5L20.5437 9.52439C20.4906 9.4723 20.4483 9.41017 20.4193 9.34162C20.3903 9.27306 20.3753 9.19944 20.375 9.12502V4.62502H15.875C15.8009 4.62545 15.7275 4.61126 15.659 4.58326C15.5905 4.55527 15.5281 4.51403 15.4756 4.46189L12.5 1.48064L9.52433 4.46189C9.47177 4.51403 9.40944 4.55527 9.34091 4.58326C9.27237 4.61126 9.19899 4.62545 9.12496 4.62502H4.62496V9.12502C4.62539 9.19905 4.6112 9.27243 4.5832 9.34097C4.55521 9.4095 4.51397 9.47183 4.46183 9.52439L1.48058 12.5L4.45621 15.4756C4.50936 15.5277 4.55164 15.5899 4.58061 15.6584C4.60957 15.727 4.62465 15.8006 4.62496 15.875V20.375Z"></path><path d="M12.5 20.3751C12.4259 20.3755 12.3525 20.3613 12.284 20.3333C12.2155 20.3053 12.1531 20.2641 12.1006 20.212L10.0193 18.1251H7.43746C7.28827 18.1251 7.1452 18.0658 7.03971 17.9603C6.93422 17.8548 6.87496 17.7118 6.87496 17.5626V14.9807L4.78808 12.8938C4.68332 12.7884 4.62451 12.6459 4.62451 12.4973C4.62451 12.3487 4.68332 12.2061 4.78808 12.1007L6.87496 10.0195V7.43758C6.87496 7.2884 6.93422 7.14532 7.03971 7.03983C7.1452 6.93434 7.28827 6.87508 7.43746 6.87508H10.0193L12.1062 4.7882C12.2116 4.68344 12.3542 4.62463 12.5028 4.62463C12.6514 4.62463 12.7939 4.68344 12.8993 4.7882L14.9806 6.87508H17.5625C17.7116 6.87508 17.8547 6.93434 17.9602 7.03983C18.0657 7.14532 18.125 7.2884 18.125 7.43758V10.0195L20.2118 12.1063C20.3166 12.2117 20.3754 12.3543 20.3754 12.5029C20.3754 12.6515 20.3166 12.7941 20.2118 12.8995L18.125 14.9807V17.5626C18.125 17.7118 18.0657 17.8548 17.9602 17.9603C17.8547 18.0658 17.7116 18.1251 17.5625 18.1251H14.9806L12.8937 20.212C12.7889 20.3159 12.6475 20.3745 12.5 20.3751ZM7.99996 17.0001H10.25C10.324 16.9997 10.3974 17.0138 10.4659 17.0418C10.5344 17.0698 10.5968 17.1111 10.6493 17.1632L12.5 19.0195L14.3506 17.1688C14.4027 17.1157 14.4648 17.0734 14.5334 17.0444C14.6019 17.0155 14.6755 17.0004 14.75 17.0001H17V14.7501C16.9995 14.6761 17.0137 14.6027 17.0417 14.5341C17.0697 14.4656 17.111 14.4033 17.1631 14.3507L19.0193 12.5001L17.1687 10.6495C17.1156 10.5974 17.0733 10.5352 17.0443 10.4667C17.0153 10.3981 17.0003 10.3245 17 10.2501V8.00008H14.75C14.6759 8.00051 14.6025 7.98632 14.534 7.95833C14.4655 7.93033 14.4031 7.88909 14.3506 7.83695L12.5 5.9807L10.6493 7.83133C10.5972 7.88448 10.5351 7.92676 10.4666 7.95573C10.398 7.9847 10.3244 7.99977 10.25 8.00008H7.99996V10.2501C8.00039 10.3241 7.9862 10.3975 7.9582 10.466C7.93021 10.5346 7.88897 10.5969 7.83683 10.6495L5.98058 12.5001L7.83121 14.3507C7.88436 14.4028 7.92664 14.4649 7.95561 14.5335C7.98457 14.602 7.99965 14.6757 7.99996 14.7501V17.0001Z"></path><path d="M12.5 14.75C12.055 14.75 11.62 14.618 11.25 14.3708C10.88 14.1236 10.5916 13.7722 10.4213 13.361C10.251 12.9499 10.2064 12.4975 10.2932 12.061C10.3801 11.6246 10.5943 11.2237 10.909 10.909C11.2237 10.5943 11.6246 10.3801 12.061 10.2932C12.4975 10.2064 12.9499 10.251 13.361 10.4213C13.7722 10.5916 14.1236 10.88 14.3708 11.25C14.618 11.62 14.75 12.055 14.75 12.5C14.75 13.0967 14.5129 13.669 14.091 14.091C13.669 14.5129 13.0967 14.75 12.5 14.75ZM12.5 11.375C12.2775 11.375 12.06 11.441 11.875 11.5646C11.69 11.6882 11.5458 11.8639 11.4606 12.0695C11.3755 12.275 11.3532 12.5012 11.3966 12.7195C11.44 12.9377 11.5472 13.1382 11.7045 13.2955C11.8618 13.4528 12.0623 13.56 12.2805 13.6034C12.4988 13.6468 12.725 13.6245 12.9305 13.5394C13.1361 13.4542 13.3118 13.31 13.4354 13.125C13.559 12.94 13.625 12.7225 13.625 12.5C13.625 12.2016 13.5065 11.9155 13.2955 11.7045C13.0845 11.4935 12.7984 11.375 12.5 11.375Z"></path></svg>
                                        </div>
                                        <p className="title bangla text-accent2 text-lg font-semibold">১</p>
                                    </div>
                                    <div className="arabic text-end text-xl xl:text-4xl dark:text-light1 leading-loose word-spacing-loose flex-grow-1 px-5 mb-5">حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ "‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ</div>
                                    <div className="translation-title bangla text-accent2 text-xl font-bold px-5 mb-3">‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:</div>
                                    <div className="translation bangla text-lg dark:text-light1 px-5 mb-5">আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) ( আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)</div>
                                    <div className="flex justify-between items-center px-5">
                                        <div className="hadith-quality-container flex items-center gap-3">
                                            <div className="title bangla font-semibold dark:text-light1">হাদিসের মান :</div>
                                            <a className="block bangla bg-accent2 text-light1 text-sm font-semibold px-3 py-1 rounded-lg" href="#">সহিহ হাদিস</a>
                                        </div>
                                        <div className="buttons flex items-center gap-7">
                                            <BtnHadithAction icon="ph:copy" alertText="কপি"/>
                                            <BtnHadithAction icon="iconoir:bookmark" alertText="বুকমার্ক"/>
                                            <BtnHadithAction icon="material-symbols:share-outline" alertText="শেয়ার"/>
                                            <BtnHadithAction icon="mdi:about-circle-outline" alertText="রিপোর্ট"/>
                                            <BtnHadithAction icon="lucide:external-link" alertText="ডিরেক্ট"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="phone-spacer bg-light3 dark:bg-dark4 w-full h-[60px]"></div>


            </div>



        </main>
    );
}
