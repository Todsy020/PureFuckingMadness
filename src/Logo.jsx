import { motion } from "framer-motion"
import { Link } from "react-scroll";
import { useState } from "react";

export const Logo = () => {
  const [imageSrcM, setImageSrcM] = useState('/logo/m-1.png');
  const [imageSrc61, setImageSrc61] = useState('/logo/6-1.png');
  const [imageSrc62, setImageSrc62] = useState('/logo/6-1.png');
  const [imageSrc63, setImageSrc63] = useState('/logo/6-1.png');
  const [imageSrcX, setImageSrcX] = useState('/logo/x-1.png');
  let randomNumber1 = Math.floor(Math.random() * (6-1) + 1)
  let randomNumber2 = Math.floor(Math.random() * (6-1) + 1)
  let randomNumber3 = Math.floor(Math.random() * (6-1) + 1)
  let randomNumber4 = Math.floor(Math.random() * (6-1) + 1)
  const changeImageSrcM = () => {
    setImageSrcM(`/logo/m-${randomNumber1}.png`)
    console.log(randomNumber1);
  }
  const changeImageSrc61 = () => {
    setImageSrc61(`/logo/6-${randomNumber2}.png`);
  }
  const changeImageSrc62 = () => {
    setImageSrc62(`/logo/6-${randomNumber3}.png`);
  }
  const changeImageSrc63 = () => {
    setImageSrc63(`/logo/6-${randomNumber1}.png`);
  }
  const changeImageSrcX = () => {
    setImageSrcX(`/logo/x-${randomNumber4}.png`);
  }

  // setInterval(changeImageSrcM, 1500)
  // setInterval(changeImageSrc61, 1500)
  // setInterval(changeImageSrc62, 1500)
  // setInterval(changeImageSrc63, 1500)
  // setInterval(changeImageSrcX, 1500)

    return (
       <div className="flex justify-center items-center h-screen w-full">
        <motion.div>
        <Link to="itemsList" 
      smooth={true} 
      offset={-100} 
      duration={1800} >
            <div className="flex justify-center items-center w-5/6 m-auto">
            <img className="w-1/5 cursor-pointer" src={imageSrcM} alt="" />
            <img className="w-1/5 cursor-pointer" src={imageSrc61} alt="" />
            <img className="w-1/5 cursor-pointer" src={imageSrc62} alt="" />
            <img className="w-1/5 cursor-pointer" src={imageSrc63} alt="" />
            <img className="w-1/5 cursor-pointer" src={imageSrcX} alt="" />
            </div>
      </Link>
            
        </motion.div>
        </div> 
    )
    
}
