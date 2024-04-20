import { Navbar } from "./Navbar"
import { motion } from "framer-motion"

export const Contact = () => {
    return (
    <motion.div className="overflow-hidden"
    initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}>
    <Navbar/>
    <div className="flex justify-center items-center gap-80 mt-44 overflow-hidden mobile:gap-14 mobile:mt-12 mobile:h-screen">
        <img className="w-56 absolute top-[80px] left-[390px] mobile:w-36 mobile:top-[290px] mobile:left-[45px]" src="/instagram-bubble.png" alt="" />
        <p className="text-white absolute top-[100px] left-[450px] mobile:top-[300px] mobile:left-[60px]">WANNA WORK ?</p>
    <motion.a className="w-1/4 mobile:w-1/2" target="_blank" href="https://www.instagram.com/purefuckingmadness/"
    animate={{ rotate: [3,-3, 3, -5, 3],
    scale:[1.03,1,1.03, 1, 1.03] }}
    transition={{ repeat: Infinity, duration: 3 }}
    >

        <img className="" src="/instagram-angel.png " alt="" /></motion.a>
        <img className="w-64 absolute top-[100px] right-[450px] mobile:w-32 mobile:top-[315px] mobile:left-[190px] mobile:hidden" src="/email-bubble.png" alt="" />
        <p className="text-white absolute top-[120px] right-[480px] mobile:top-[330px] mobile:left-[190px]">PLACESVIDE@GMAIL.COM</p>
    <motion.a className="w-1/4 mobile:w-1/2" href="mailto:PLACESVIDE@GMAIL.COM"
    animate={{ rotate: [0, -4, 4, -4, 0],
        scale:[1.02,1,1.02, 1, 1.02]
     }}
        transition={{ repeat: Infinity, duration: 4}}
    >
        <img src="/email-angel.png" alt="" /></motion.a>
        
    </div>
    </motion.div>
    )
}