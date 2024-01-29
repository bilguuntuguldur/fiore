"use client"

import Image from "next/image";
import { Flower } from "@/types"
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton  from "@/components/ui/icon-button";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import OrderToButton from "./orderToButton";
import PriceTag from "@/components/price-tag";

interface FlowerCard {
    data: Flower;
}

const FlowerCard: React.FC<FlowerCard> = ({
    data
}) => {

    const cart = useCart();

    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data.id}`);
    }


    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.stopPropagation();

        cart.addItem(data);
    }

    return (
        <div className="flex flex-col bg-white rounded-xl border p-3">
            <div onClick={handleClick} className="group cursor-pointer space-y-4">
                {/* Images and Action */}

                <div className="aspect-square rounded-xl bg-gray-100 relative">
                    <Image 
                        src={`http://app.tsetsegtmendchilgee.mn/${data?.flowerImage}`}
                        alt="Image"
                        className="product_image object-cover rounded-md"
                        width={300}
                        height={500}
                    /> 
                    <div className="opacity-0 group-hover:opacity-100 transition absolute px-6 w-full bottom-5">

                        <div className="flex gap-x-6 justify-center">
                            <IconButton 
                                onClick={onAddToCart}
                                icon={<ShoppingCart size={20} className="text-gray-600"/>}
                            />
                        </div>

                    </div>
                </div>

                {/* Description */}

                <div className="text-center">
                    <p className="font-semibold text-lg main_gray">
                        #{data?.flowerCode}
                    </p>
                    {/* <p className="text-sm text-gray-500">
                        {data?.flowerDesc}
                    </p> */}

                    {/* Price */}

                    <div className="font-bold main_gray text-xl">
                    <PriceTag price={data?.flowerPrice}/>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <OrderToButton data={data}/>
            </div>
        </div>
    )
}

export default FlowerCard; 