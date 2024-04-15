import { Navbar } from "./Navbar"
import { ItemsList } from "./ItemsList"
import { Logo } from "./Logo"
import { Footer } from "./Footer"

export const App = () => {
  return (
    <div className="">
      <Logo/>
      <Navbar/>
      <ItemsList/>
      <Footer/>
    </div>
  )
  
}