import { Navbar } from "./Navbar"
import { ItemsList } from "./ItemsList"
import { Logo } from "./Logo"
import { Footer } from "./Footer"
import { motion } from "framer-motion"

export const App = () => {
  return (
    <motion.div className=""
    initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
      >
      <Logo/>
      <Navbar/>
      <ItemsList/>
      <Footer/>
    </motion.div>
  )
  
}