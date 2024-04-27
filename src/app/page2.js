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
            


            <div className="body-container w-[100svw] flex flex-grow">
                

                
                <div className="w-[400px] xl:w-[calc(100svw-80px)] h-[calc(100svh-80px)] flex gap-3 bg-light3 dark:bg-dark4 relative p-3">
                    


                    

                    <div className="hadiths-container w-[300px] xl:w-[calc(100svw-80px-300px-36px)] h-[calc(100svh-80px-24px)] overflow-y-scroll rounded-lg flex flex-col gap-3">
                        
                        
                        
                    </div>


                </div>
                


            </div>



        </main>
    );
}
