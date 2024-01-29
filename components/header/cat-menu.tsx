"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import Button from "@/components/button"
import { cn } from "@/lib/utils"

export function CatMenu({
    className,
    ...props
    }: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();

    const routes = [
        {
        href: `/category/1`,
        name: 'Төрсөн өдрийн',
        active: pathname === `/category/1`,
        },
        {
        href: `/category/2`,
        name: 'Уучлал гуйх',
        active: pathname === `/category/2`,
        },
        {
        href: `/category/3`,
        name: 'Хайраа илчлэх',
        active: pathname === `/category/3`,
        },
        {
        href: `/category/4`,
        name: 'Хайрт ээждээ',
        active: pathname === `/category/4`,
        },
        
    ]

    return (
        <nav
        className={cn("mx-2 hidden items-center space-x-4 md:flex md:justify-center md:my-4 lg:space-x-6", className)}
        {...props}
        >
        <Button className="main_secondry_bg mr-16 text-sm">
            Цэцэг үзэх
        </Button>
        {routes.map((route) => (
            <Link
            key={route.href}
            href={route.href}
            className={cn(
                'text-sm font-medium  main_gray category_menu',
                route.active ? 'category_menu_active' : ''
            )}
            >
            {route.name}
        </Link>
        ))}
        </nav>
    )
};