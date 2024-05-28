'use client'
import Image from "next/image";
import {motion} from'framer-motion';
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12
    xl:p-0 items-center'
    id='about'>
        {/*Textos*/ }
        <motion.div 
         variants={fadeIn('right', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.2 }}
        className='xl:pl-[135px]'>
            <h1 className='mb-9'>
                Hablemos de comida
            </h1>
            <p className='mb-8'>
            Sumérgete en el apasionante mundo de la gastronomía . Desde los ingredientes más frescos hasta las técnicas culinarias más innovadoras, exploramos cada aspecto de la comida con amor, dedicación y un toque de magia. Únete a nosotros en este viaje culinario donde cada plato cuenta una historia y cada sabor despierta tus sentidos.
            </p>
            <p className='mb-10'>
            celebramos la diversidad de sabores, texturas y aromas que hacen que cada comida sea una experiencia única. Desde los clásicos platos de la región hasta las creaciones más audaces de nuestros chefs, te invitamos a descubrir la pasión y el arte que se esconde detrás de cada bocado. Prepárate para explorar, degustar y disfrutar de la magia de la comida en La Cumbre Dorada.
            </p>
            <Button>Leer mas</Button>
        </motion.div>

         {/*Imagenes*/ }
         <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
         >
            
            <Image src='/about/img.png' 
            width={705} 
            height={771}
            alt=""
            className='hidden xl:flex'
            />
         </motion.div>
    </section>
  )
}

export default About