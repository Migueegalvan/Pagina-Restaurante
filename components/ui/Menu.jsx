'use client';

import Image from "next/image";
import Link from "next/link";
import {IoIosArrowRoundForward} from 'react-icons/io';

import {motion} from 'framer-motion'
import {fadeIn} from '@/variants'

const menu = [
    {
        img:'/menu/item-1.png',
        title:'Tarta De Frutos Del Bosque ',
        price:'$ 9.500',
    },
    {
        img:'/menu/item-2.png',
        title:'Donas Rellenas Con Crema De Avellanas',
        price:'$ 8.000',
    },
    {
        img:'/menu/item-3.png',
        title:'Paella De Mariscos',
        price:'$ 13.500',
    },
    {
        img:'/menu/item-4.png',
        title:'Budin de Banana y naranja',
        price:'$ 7500',
    },
    {
        img:'/menu/Ceviche.png',
        title:'Ceviche cremeso de la puerta del inca',
        price:'$ 12.500',
    },
    {
        img:'/menu/item2.png',
        title:"Empanada de ciervo de alo's",
        price:'$ 10.000',
    },
    {
        img:'/menu/item4.png',
        title:'La Causa Chirashi de osaka',
        price:'$ 16.000',
    },
    {
        img:'/menu/item6.png',
        title:'El Beef Tataki ',
        price:'$ 15000',
    },
];

const Menu = () => {
  return (
    <section className='relative py-12 xl:py-24 bg-menu ' id='menu'>
        <div className='container mx-auto'>
            <motion.div 
            variants={fadeIn('left',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.2}}
            className='max-w-[570px] mx-auto text-center xl:text-right'
            >
                <h2 className='mb-3'>Menu del Día</h2>
                <Link href='/'
                 className='text-green flex justify-center xl:justify-end items-center mb-16'>
                    VER TODO
                <IoIosArrowRoundForward className='text-3xl' />    
                </Link>
            </motion.div>

            {/* Grids Del menu*/}
            <motion.div 
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.2}}
            className='grid grid-cols-1 gap-x-[30px] md:grid-cols-3 md:gap-[15px] 
            xl:grid-cols-4'
            >
               {menu.map((item,index)=>{
                return (
                <div key={index}
                    className='max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group'
                     >
                        {/* img*/}
                    <div className='overflow-hidden'>
                       <Image src={item.img} width={270} height={270} alt=''
                       className='group-hover:scale-110 transition-all duration-300'
                       /> 
                    </div>  
                        {/* Nombre y precio*/}
                        <div className='pt-[20px] pb-[28px] px-[30px]'>
                            <Link href='/'>
                                <h3 className='font-poppins text-black mb-[14px]'>{item.title}</h3>
                            </Link>
                            <div className='text-xl font-poppins  font-semibold text-orange'>
                                {item.price}
                            </div>
                        </div>
                 </div>
                );
            })}
        </motion.div>
        </div>

    </section>
  );
};

export default Menu ;
