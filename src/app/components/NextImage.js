import Image from "next/image";

export default function NextImage({src}){
    return(
        <Image src={src} fill sizes="50vw" style={{objectFit:'cover'}}></Image>
    )
}