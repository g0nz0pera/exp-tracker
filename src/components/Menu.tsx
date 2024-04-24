import React from 'react';
import {PersonStandingIcon} from "lucide-react";
import Link from "next/link";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import LightDarkToggle from "@/components/LightDarkToggle";

const Menu = () => {
    return (
        <nav className="bg-muted overflow-auto p-2 flex flex-col">
            <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
                <h4 className="flex items-center">
                    <PersonStandingIcon size={40} className="text-pink-500"/> Expen$e
                </h4>
            </header>
            <ul className="py-4 grow">

            </ul>
            <footer className="flex gap-2 items-center m-2">
                <Avatar>
                    <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
                        GG
                    </AvatarFallback>
                </Avatar>
                <Link className="hover:underline" href="/">
                    LogOut
                </Link>
                <LightDarkToggle className="ml-auto"/>
            </footer>
        </nav>
    );
};

export default Menu;