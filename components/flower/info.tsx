"use client"

import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

import { Flower } from "@/types";
import PriceTag from "@/components/price-tag";
import Button from "@/components/button";
import useCart from "@/hooks/use-cart";
import OrderToButton from "./orderToButton";

interface InfoProps {
    data: Flower;
}

const Info: React.FC<InfoProps> = ({
data
}) => {

    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.stopPropagation();

        cart.addItem(data);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold main_gray">#{data.flowerCode}</h1>
            <div className="mt-3">
                <p className="text-l main_gray">
                    {data.flowerDesc}
                </p>
            </div>
            <div className="mt-3 flex items-center justify-between">
                <p className="text-lg main_gray text-2xl">
                    <PriceTag price={data?.flowerPrice}/>
                </p>
            </div>
            <hr className="my-4"/>

            <div className="mt-10 flex items-center gap-x-3">
                <OrderToButton data={data}/>
            </div>
        </div>
    )
}

export default Info;