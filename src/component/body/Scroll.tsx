import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
function Scroll() {
    const [visible,setVisible] = useState(false)
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 100){ 
          setVisible(true) 
        }  
        else if (scrolled <= 100){ 
          setVisible(false) 
        } 
      }; 
      
      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 
      
      window.addEventListener('scroll', toggleVisible); 
  return (
    <div>
       <p onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-orange-600 bottom-[36%] z-50  md:right-6 right-6 py-2 px-3 text-white">
        <FontAwesomeIcon icon={faChevronUp}/>
        </p>
       <p  className="fixed bg-orange-600 bottom-[30%]  md:right-6 right-6 py-2 px-3 text-white z-50">
       <FontAwesomeIcon icon={faQuestionCircle}/>

</p>
    </div>
  )
}

export default Scroll