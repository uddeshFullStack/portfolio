import React from 'react'
import { RiNextjsFill, RiReactjsLine } from 'react-icons/ri';
import { DiPostgresql } from "react-icons/di";
import { SiMongodb, SiPython ,SiTailwindcss, SiExpress,SiMysql} from 'react-icons/si';
import { FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { animate, motion } from 'framer-motion';

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    },
});


const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>
            Technologies
        </motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(1)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-blue-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-red-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(1)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiPostgresql className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl text-black-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-black-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(1)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsFill className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.2)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPython className='text-7xl text-yellow-300'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technology