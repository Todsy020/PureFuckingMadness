import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const ArtZoom = ({imgSrc}) => {
    
    return (
        
        <motion.div className="w-full h-screen allScreen cursor-pointer bg-black/70 z-10"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
      >
            <img className="w-64 centered z-20 cursor-default mobile:w-44" src={imgSrc} alt="" />
        </motion.div>
    )
}

ArtZoom.propTypes = {
    imgSrc: PropTypes.string,
  };