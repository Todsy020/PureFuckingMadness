import PropTypes from 'prop-types';
import * as React from "react";
import { motion } from "framer-motion"

export const Item = ({image}) => {

    const onTapScaling = (event) => {
        const img = event.target;
    //         img.style.transform = "scale(2)";
    //         img.style.transition = "transform 0.25s ease";
            img.classList.toggle("active");
            img.classList.toggle("inactive");
    //         console.log(img.className)
        
    }
    const [isOpen, setOpen] = React.useState(false);
    
    const open = {
        scale: 2,
        zIndex: 1,
      };
      
      const closed = {
        scale: 1,
        transitionEnd: { zIndex: 0 }
      };


    return (
        <motion.div className="p-2"
        
          animate={isOpen ? open : closed}
          style={{ originX:0.03, originY:0.03 }}
          onClick={() => setOpen(!isOpen)}
          onTap={onTapScaling}
        >

            <img className="w-64 cursor-pointer inactive mobile:w-36" src={image} alt="" />
        </motion.div>
    )
}



Item.propTypes = {
    name: PropTypes.string,
    image:PropTypes.string
  };

