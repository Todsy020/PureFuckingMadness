import { motion } from "framer-motion"

export const Footer = () => {
    return (
        <motion.div className="text-white flex justify-center"
        >
            <span className="text-xs pt-5 pb-1 underline">© 2024 <a className="hover:text-purple-400" href="https://www.instagram.com/ihateovb/">OVB</a>, Inc. Tous droits réservés</span>
            
        </motion.div>
    )
}