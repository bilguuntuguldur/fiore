import Button from "../button";
import backgroundImageOne from "@/public/images/feature-1.png";
import backgroundImageTwo from "@/public/images/feature-2.png";
import backgroundImageThree from "@/public/images/feature-3.png";



const ShopFeatures = () => {

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 my-16">
            <div className="text-center p-6 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Баяр хүргэх</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_bg mt-8">Захиалах</Button>
            </div>
            <div className="text-center p-6 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageTwo.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Төрсөн өдрийн</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_bg mt-8">Захиалах</Button>
            </div>
            <div className="text-center p-6 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageThree.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Уучлал гуйх</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_bg mt-8">Захиалах</Button>
            </div>
            <div className="text-center p-6 rounded-3xl" style={{ 
                backgroundImage: `url(${backgroundImageOne.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
                }}>
                <h4 className="main_gray font-semibold pb-6 text-lg">Хайраа илчлэх</h4>
                <p className="main_gray text-s pb-6 text-left font-medium leading-12">Бид таны хайртай дотны хүнд хамгийн сайхан цэцгийг өөрийн тань хүссэн өнгө загвараар урлан бүтээнэ.</p>
                <Button className="main_bg mt-8">Захиалах</Button>
            </div>
        </div>
    )

}

export default ShopFeatures;