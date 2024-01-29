import Image from "next/image";


const CommercialBanner = () => {
    return(
        <div className="flex justify-center h-36 overflow-hidden object-contain my-4">
            <Image 
                src="/images/commercial-banner.jpg"
                alt="Commercial-anner"
                width={1060}
                height={147}
                className=""
            />
        </div>
    )
}

export default CommercialBanner;