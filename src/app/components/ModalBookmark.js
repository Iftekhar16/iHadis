import { useState } from "react";
import Bookmark from "./Bookmark";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";


export default function ModalBookmark({isModalBookmarkOpen, closeBookmark}){

    const { toast } = useToast();

    return(
        <div className={`modal-bookmark-container text-dark4 dark:text-light3 w-[100svw] h-[100svh] z-[100] ${isModalBookmarkOpen?"absolute top-0 left-0":"hidden"}`}>
            <div className={`modal-overlay w-[100svw] h-[100svh] bg-dark4 opacity-50 dark:opacity-75 z-[130] ${isModalBookmarkOpen? "absolute top-0 left-0" : "hidden"}`} onClick={closeBookmark}></div>
            <div className={`modal-bookmark w-[80svw] xl:w-[40svw] bg-light1 dark:bg-dark3 rounded-lg shadow-lg z-[150] p-5 absolute ${isModalBookmarkOpen? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":""}`}>
                <div className="title text-2xl bangla font-bold mb-5">বুকমার্ক</div>
                <div className="bookmark-selector-container mb-5">
                    <div class="select">
                        <select className="w-full bg-light3 dark:bg-dark1 border-2 darK:border-0 border-light3 dark:border-dark3 px-3 py-2 rounded-lg" name="slct" id="slct" onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                            <option className="bg-light1 dark:bg-dark1 hover:bg-light3 px-3 py-2 rounded-lg" value="Favorite">Favorite</option>
                        </select>
                    </div>
                </div>
                <div className="title text-xl bangla mb-3">অথবা,</div>
                <form className="relative mb-5" action="">
                    <input className="w-full bg-light3 dark:bg-dark1 border-2 border-light3 dark:border-dark1 rounded-lg px-3 py-2" type="text" placeholder="Create New Bookmark Folder"/>
                </form>
                <div className="title text-xl bangla mb-3">ফোল্ডার কালার পরিবর্তন করুন</div>
                <div className="bookmark-color-selector-container flex flex-wrap gap-3 md:justify-between mb-5">
                    <Bookmark color="bg-green-500 text-green-500"/>
                    <Bookmark color="bg-yellow-500 text-yellow-500"/>
                    <Bookmark color="bg-purple-500 text-purple-500"/>
                    <Bookmark color="bg-sky-500 text-sky-500"/>
                    <Bookmark color="bg-pink-500 text-pink-500"/>
                    <Bookmark color="bg-blue-500 text-blue-500"/>
                    <Bookmark color="bg-orange-500 text-orange-500"/>
                </div>
                <div className="btn-container w-full flex gap-3">
                    <button className="btn-bookmark-close bg-light3 dark:bg-dark1 dark:text-light3 bangla py-3 w-full rounded-lg" onClick={closeBookmark}>বাতিল</button>
                    <button className="btn-bookmark-save bg-accent2 text-light1 bangla py-3 w-full rounded-lg" variant="outline" onClick={() => {toast({description: "বুকমার্ক ফোল্ডার যোগ করা হয়েছে",}); closeBookmark()}}>সেভ</button>
                </div>
            </div>
        </div>
    )
}