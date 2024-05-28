'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";
import { Button } from "../ui/button";


const Hero = () => {
    return (

        <section 
            className='bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px]
                            py-40 pb-32 xl:py-0' 
                            id="home"
                            >
            <div className="container mx-auto">
                {/* Texto y imagenes*/}
                <div className='flex items-center xl:h-[960px]'>
                    {/* Texto */}
                    <div className="w-full xl:max-w-[460px] text-center xl:text-left">
                        <motion.h1
                        variants={fadeIn('down',0.2)}
                        initial ='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.4}}
                        
                        className="text-white mb-7">
                            La Cumbre Dorada <br />
                        </motion.h1>
                        
                        <motion.p
                         variants={fadeIn('down',0.2)}
                         initial ='hidden'
                         whileInView={'show'}
                         viewport={{once:false,amount:0.4}}

                        className="text-white font-semibold mb-7 "
                        >by:<span className="text-orange">Galvan Migue</span>
                        </motion.p>

                        <motion.p
                         variants={fadeIn('down',0.6)}
                         initial ='hidden'
                         whileInView={'show'}
                         viewport={{once:false,amount:0.4}}
                        className="text-white mb-12 max-w-lg xl:max-w-none xl:mx-0 ">
                        Disfruta de una experiencia culinaria única en La Cumbre Dorada, donde la exquisitez y la elegancia se fusionan para crear momentos inolvidables. Sumérgete en un mundo de sabores exquisitos y aromas seductores, donde cada plato es una obra maestra cuidadosamente elaborada por nuestros talentosos chefs. Déjate llevar por la magia de un lugar donde la pasión por la gastronomía se encuentra con la hospitalidad excepcional, creando un ambiente verdaderamente encantador. Bienvenido a La Cumbre Dorada, donde cada comida es un viaje sensorial hacia la perfección.
                        </motion.p>
                        <motion.div
                        variants={fadeIn('down',0.8)}
                        initial ='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.4}}
                        >
                            
                            <Button>A Comer</Button>

                        </motion.div>
                    </div>
                    {/* Imagen */}
                    <motion.div 
                    variants={fadeIn('up',0.8)}
                    initial ='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.1}}
                    className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0">
                        <Image src='/hero/plate.png' width={1020} 
                        height={682} alt='' /
                        
                        >
                    </motion.div>
                </div>
            </div>
              {/*Cafe img*/}
              <motion.div 
              variants={fadeIn('up',1.2)}
              initial ='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.1}}
              className="hidden xl:flex xl:relative xl:-top-60">
                <Image src="/hero/coffee.png" alt="" width={528} height={404} />
              </motion.div>
        </section>
    );


};

export default Hero;