import { type ReactNode } from "react";

type HeaderProp = {
    children: ReactNode,
    img: {
        src: string,
        alt: string
    }
}

export default function Header({img, children}: HeaderProp){
    return(
        <header>
            <img src={img.src} alt={img.alt} />
            {children}
        </header>
    )
}