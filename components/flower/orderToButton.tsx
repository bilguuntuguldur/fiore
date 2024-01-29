"use client"

import { useRouter } from "next/navigation";
import { Flower } from "@/types";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import Button from "../button";

interface OrderToButton {
    data: Flower;
}

const OrderToButton: React.FC<OrderToButton> = ({
    data
}) => {


    const cart = useCart();
    const router = useRouter();

    const handleOrder = () => {
        router.push(`/order`);
    }


    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.stopPropagation();

        cart.addItem(data);
    }


    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleOrder();
        onAddToCart(event);
    };

    return (
        <Button onClick={handleButtonClick} className="main_bg w-full mt-4 justify-center">
            Захиалах
        </Button>
    )
}

export default OrderToButton;