"use client"
import backgroundImage from "@/public/images/cover-image.jpg";
import { TypeAnimation } from "react-type-animation";
import CommercialBanner from "./commercial-banner";


const Billboard = () => {

      return(

        <div className="relative">
            <div className="banner_image md:aspect-[3/1] overflow-hidden bg-contain"
                style={{backgroundImage: `url(${backgroundImage.src})`}}
            >
            </div>
            <CommercialBanner />
            {/* <div className=" left-24 text-4xl font-extrabold text-white">{data.label}</div> */}
            <h1 className="main_gray w-full py-8 font-semibold text-lg flex justify-center items-center">
            <span className="">
            Энэ сарын хамгийн {String.fromCharCode(160)}
            </span>
            <div className="text-center">
              <TypeAnimation
                sequence={[
                    " эрэлттэй",
                  1000,
                    " гоёмсог",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
            цэцэгнүүд.
          </h1>
        </div>
    )
}

export default Billboard;