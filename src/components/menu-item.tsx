'use client';

import React from 'react';
import {usePathname} from "next/navigation";
import Link from 'next/link';
import {cn} from "@/lib/utils";

type MenuItemProps ={
    children: React.ReactNode;
    href: string;
}

export default function MenuItem ({ children, href}: MenuItemProps){
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <li>
            <Link className={cn(
                "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
                isActive &&
                "bg-pink-500 hover:bg-pink-500 dark:hover:bg-pink-500 hover:text-pink-500-foreground text-pink-500-foreground",
            )} href={href}>
                {children}
            </Link>
        </li>
    )
}