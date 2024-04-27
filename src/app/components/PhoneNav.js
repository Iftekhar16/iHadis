import BtnPhoneNav from "./BtnPhoneNav";


export default function PhoneNav({isActive}){
    return(
        <div className="phone-nav-container bg-light1 dark:bg-dark3 text-2xl rounded-t-lg shadow-lg absolute bottom-0 left-0 w-[100svw] h-[60px] xl:hidden flex justify-around items-center z-[100]">
            <BtnPhoneNav iconOutlined="fluent:home-20-regular" iconFilled="fluent:home-20-filled"/>
            <BtnPhoneNav iconOutlined="ph:books-fill" iconFilled="ph:books-fill" isActive={isActive}/>
            <BtnPhoneNav iconOutlined="mage:book" iconFilled="mage:book-fill"/>
            <BtnPhoneNav iconOutlined="iconoir:bookmark" iconFilled="iconoir:bookmark-solid"/>
            {/* <BtnPhoneNav iconOutlined="heroicons:squares-2x2" iconFilled="heroicons:squares-2x2-16-solid"/> */}
            <BtnPhoneNav iconOutlined="iconoir:send-diagonal" iconFilled="iconoir:send-diagonal-solid"/>
        </div>
    )
}