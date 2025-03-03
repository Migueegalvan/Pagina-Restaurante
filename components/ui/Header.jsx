'use client'
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';

import Nav from './Nav';
import NavMobile from './NavMobile';
import { Button } from "@/components/ui/button"



const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            //detectar el scroll
            setActive(window.scrollY > 100);
        }
        // Agrego evento Listener
        window.addEventListener('scroll', handleScroll);

        // Se limpia el evento listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);



    return (
        <header className={`${active ? 'bg-black-heavy py-4' : 'bg-none py-8'}
      fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
        >
            <div className="container mx-auto">
                {/*Logo , nav y btn */}
                <div className='flex items-center justify-between'>
                    {/*Logo*/}
                    <Link href='/'>
                       
                    </Link>

                    {/*NAV*/}
                    <Nav containerStyles='hidden xl:flex gap-x-12 text-white'
                    linkStyles='capitalize' 
                    />
                    {/*Btn*/}
                    <ScrollLink to='reservation' smooth={true}>
                        <Button variant='orange' size='sm'>
                            Reservar Una Mesa
                        </Button>
                    </ScrollLink>

                    {/*Mobile Nav*/}

                    <NavMobile 
                    containerStyles='xl:hidden' 
                    iconStyles='text-3xl' 
                    linkStyles='uppercase'
                    
                    />
                </div>

            </div>
        </header>

    );
};

export default Header;