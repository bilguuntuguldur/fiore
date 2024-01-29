import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faEnvelope,
    faPhone
} from "@fortawesome/free-solid-svg-icons";


const TopHeader = () => {

    return (
        <div className="hidden md:flex md:justify-evenly h-10 py-2">
        <Link href="https://www.google.com/maps/place/%D0%90%D1%81%D1%82%D1%80%D0%B0+%2F+%D0%A6%D1%8D%D1%86%D1%8D%D0%B3%D1%82+%D0%BC%D1%8D%D0%BD%D0%B4%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D+%2F+%D0%A6%D1%8D%D1%86%D1%8D%D0%B3+%D1%85%D2%AF%D1%80%D0%B3%D1%8D%D0%BB%D1%82+%2F+Tsetsegt+mendchilgee/@47.9222625,106.9146313,17z/data=!3m1!4b1!4m6!3m5!1s0x5d9693864733020f:0x67b3326bab77d557!8m2!3d47.9222589!4d106.9172062!16s%2Fg%2F11h0tf139p?entry=ttu"
        className="main_gray text-sm font-semibold flex items-center gap-4"
        target="_blank"
        >
            <FontAwesomeIcon icon={faLocationDot} className="top_header_icon"/>
            Байршил харах
        </Link>
        <Link href=""
        className="main_gray text-sm font-semibold flex items-center gap-4"
        >
            <FontAwesomeIcon icon={faEnvelope} className="top_header_icon"/>
            info@tstetsegtmendchilgee.mn
        </Link>
        <Link href=""
        className="main_gray text-sm font-semibold flex items-center gap-4"
        >
            <FontAwesomeIcon icon={faPhone} className="top_header_icon"/>
            7734-7799
        </Link>
    </div>
    )

}

export default TopHeader; 