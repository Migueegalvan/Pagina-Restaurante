'use client';
import { Youtube, Facebook, Instagram } from 'feather-icons-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer

      className='bg-footer bg-cover bg-no-repeat text-white pt-16'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between xl:flex-row'>
          {/*logo */}
          <div className='w-[300px] mb-8 xl:mb-0'>
            <Link href='/'>
              
            </Link>
          </div>
          {/*Grid items */}
          <div className='flex-1 grid gri xl:grid-cols-3 gap-[50px] mb-8 
        xl:mb-16'>
            {/*Blog */}
            <div>
              <h4 className='font-semibold mb-5'>Blog</h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                <li>
                  <Link href='/'>Mejores Vinos</Link>
                </li>
                <li>
                  <Link href='/'>Historia Del Chef</Link>
                </li>
                <li>
                  <Link href='/'>Comidas Con amor</Link>
                </li>
                <li>
                  <Link href='/'>Especialidades de Invierno</Link>
                </li>
                <li>
                  <Link href='/'>Primera Calidad</Link>
                </li>
              </ul>
            </div>
            {/*Nuevos platos */}
            <div>
              <h4 className='font-semibold mb-5'>Platos Exclusivos</h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                <li>
                  <Link href='/'>Bondiola Braseada</Link>
                </li>
                <li>
                  <Link href='/'>Sorrentinos Calabaza Con Nuez Y Espinaca</Link>
                </li>
                <li>
                  <Link href='/'>Salmon Rosado A Las Finas Hierbas Con Pure Mixto</Link>
                </li>
                <li>
                  <Link href='/'>Cordero Patagonico Con Ensaladas Finas</Link>
                </li>
              </ul>
            </div>
            {/*Redes Sociales */}
            <div>
            <h4 className='font-semibold mb-5'>Redes Sociales</h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                <li>
                  <Link href='https://www.youtube.com/tu-canal' >
                    
                      <Youtube className="w-6 h-6 mr-2" />
                      <span>YouTube</span>
                   
                  </Link>
                </li>
                <li>
                  <Link href='https://www.facebook.com/tu-pagina' >
                    
                      <Facebook className="w-6 h-6 mr-2" />
                      <span>Facebook</span>
                 
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/tu-perfil' >
                   
                      <Instagram className="w-6 h-6 mr-2" />
                      <span>Instagram</span>
                   
                  </Link>
                </li>
              </ul>
              </div>
          </div>
        </div>
         {/*Copyright */}
         <div className='py-4 border-t border-white/10'>
          <p className='text-white/60 text-center text-sm'> Copyright &copy; Galvan Miguel 2024</p>
         </div>
      </div>
    </footer>


  );
};

export default Footer