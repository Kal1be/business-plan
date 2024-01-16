import "./navbar.css"
import {useState,useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-brands-svg-icons"
import { faGlobe,faSearch,faChevronDown,faCamera,faBars, faStore, faSignIn} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
function Navbar() {
  const [navbar,setNavbar] = useState(true)
   const [search,setSearch] = useState(true)
  useEffect(()=>{
const handleScroll = ()=>{
  if(window.pageYOffset > 50 && navbar){
    setNavbar(false)
  }
  else if (window.pageYOffset<= 50 !==navbar){
    setNavbar(true)
  }
 
}
window.addEventListener("scroll",handleScroll)
return()=>{
  window.removeEventListener("scroll",handleScroll)
}
  },[navbar])

  // the search button on the scroll when he reach something like 150px

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.pageYOffset > 450 && search){
        setSearch(false)
      }
      else if (window.pageYOffset<= 450 !==search){
        setSearch(true)
      }
     
    }
    window.addEventListener("scroll",handleScroll)
    return()=>{
      window.removeEventListener("scroll",handleScroll)
    }
      },[search])

  return (
   <div className="back-image">
    <div className="back-first text-white  p-3">
    <div className="text-white ">
      <div className="flex justify-between lg:mx-6 items-center font-medium">
        <h2><span className="my-second lg:text-4xl text-2xl font-extrabold">TchadCommerce</span><span className="text-xl ">.com</span></h2>
        <ul className="flex justify-between lg:w-[40%] items-center" id="product-top">
            <li>Offer:</li>
            <li><FontAwesomeIcon icon={faGlobe} className="mx-1 text-xl"/>Francais-TD</li>
            <li><FontAwesomeIcon icon={faSignIn} className="mx-1"/>Se Connecter</li>
            <li className="bg-orange-500 px-10 py-2 rounded-full">S'enregistrer</li>
        </ul>
      </div>
    </div>
    {/* _________++++++++++++++++++++++++++ the element of behavior of the navbar black _+++++++++++++++++______________+++++++++++ */}
   <div className="flex justify-between items-center mt-3" id="product-top">
   <div className="mx-6 flex justify-between lg:w-[30%]">
      <p><FontAwesomeIcon icon={faBars}/> All products</p>
      <p>Future Selection</p>
      <p>Trade Assurance</p>
    </div> 
     <ul className="flex justify-between lg:w-[35%] mx-6">
      <li>Centre d'acheteur</li>
      <li>Centre d'aide</li>
      <li>Obtenir l'App</li>
      <li>Devenir vendeur</li>
     </ul>
   </div>
{/* _______++++++++++++++++++++ the start of the element of the body part _____________--+++++++++++++++++++++ */}
   <div className="lg:mx-6  my-2">
<h3 className="lg:mt-24 mt-24 font-sm lg:text-xl "><FontAwesomeIcon icon={faStore} className="mx-1"/>Apprendre a propos de <span className="">TchadCommerce.com</span></h3>
    <h2 className="lg:text-6xl lg:my-4 my-2 lg:w-[70%] text-3xl" id="my-text">TchadCommerce,la veridique platforme commerciale en ligne,la vente est notre priorite</h2>
   </div>
   <div className="mx-6 mt-6 lg:w-[60%] border bg-white flex items-center justify-between  rounded-full py-1 px-2" id={search?"fixe":"search"}>
    <input type="text" className="input w-[80%] text-black" placeholder="find your product here ?" />
    <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-2xl"/>
    <p className="bg-orange-500 px-5 py-2 rounded-full text-white"><FontAwesomeIcon icon={faSearch} className="mx-1"/>search</p>
   </div>
    </div>
{/*_____-------------------------------------------------- the navbar second of the navba++++++++++++++++++++++++++++++++++++++++++++++++++ */}

<motion.div
initial={{opacity:0}}
// transition={{duration:1}}
whileInView={{opacity:1,scale:1}}
 id={navbar?"nav":"header"}>
<div className=" bg-white lg:p-3 p-2 shadow-xl absolute top-0 w-screen z-50">
    <div className="flex justify-between lg:mx-2 mx-2 items-center font-medium">
      <h2 className="text-orange-500"><span className="my-seconde lg:text-4xl text-2xl font-extrabold">TchadCommerce</span><span className="text-xl ">.com</span></h2>
      {/*___________++++++++++++++++++++++++ the shrink of the search bar when he reach 150px_+++++++++++++++++++++++++++++++++++ */}
      <motion.div
      initial={{opacity:0.3}}
      transition={{duration:1}}
      whileInView={{opacity:1}} className="border w-[40%] p-1 rounded-full flex justify-between items-center" id={search?"search":"fixe"}>
<p className="text-sm">Products <FontAwesomeIcon icon={faChevronDown} className="text-sm mx-1"/></p>|
    <input type="text" title="find your product" className="input w-[54%] " placeholder="find your product here ?"/>
    <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-xl"/>
    <p className="bg-orange-500 px-2 py-1 rounded-full text-white"><FontAwesomeIcon icon={faSearch} className="mx-1"/>search</p>
    </motion.div>
    <ul className="flex justify-between lg:w-[38%] items-center" id="product-top">
            <li>Offer:</li>
            <li><FontAwesomeIcon icon={faGlobe} className="mx-1 text-xl"/>Francais-TD</li>
            <li><FontAwesomeIcon icon={faSignIn} className="mx-1"/>Se Connecter</li>
            <li className="bg-orange-500 px-10 py-2 rounded-full text-white">S'enregistrer</li>
        </ul>
    </div>
  </div>
</motion.div>
   
   </div>
  )
}

export default Navbar
