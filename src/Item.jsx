import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import { ArtZoom } from './ArtZoom';
import { useState } from 'react';

export const Item = ({image}) => {

  const [isOpen, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const zoomIn = (event) => {
    const imgSrc = event.target.src;
    setImgSrc(imgSrc); // on recup la source de l'image et on la stocke dans le state
    console.log(imgSrc) 
    setOpen(!isOpen) // on affiche ou non le zoom sur l'écran
    console.log(isOpen)
    
    
}

    return (
        
        <motion.div onTap={zoomIn}
        >
            <img className="w-64 cursor-pointer inactive mobile:w-36" src={image} alt="" />
            {isOpen && <ArtZoom imgSrc={imgSrc}/>}
        </motion.div>
    )
}



Item.propTypes = {
    name: PropTypes.string,
    image:PropTypes.string
  };

