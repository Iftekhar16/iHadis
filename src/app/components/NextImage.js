import Image from "next/image";

export default function NextImage({src, alt}){
    return(
        <Image src={src} alt={alt} fill sizes="50vw" style={{objectFit:'cover'}}></Image>
    )
}