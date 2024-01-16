 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
 import { faChalkboard, faHeartPulse } from "@fortawesome/free-solid-svg-icons"
import { faAffiliatetheme, faProductHunt, faSellcast } from "@fortawesome/free-brands-svg-icons"
import { faFacebook,faWhatsapp,faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"

function Footer() {
  return (
    <div className="bg-black text-white lg:px-12 px-1 py-6">
      <div className="lg:flex justify-between">
        <div className="lg:w-96">
          <h2 className="my-second text-orange-500 text-2xl font-bold"><FontAwesomeIcon icon={faChalkboard} className="mx-1"/>TchadCommerce.com</h2>
          <p className="lg:text-xl">Tchadcommerce est une platforme en ligne pour tout vos demande et vos
             differents a propos de nos produits et de nos aspect a propos du commerce</p>
        </div>
        <div className="my-3 lg:my-0">
          <h2 className="text-xl font-medium">A propos de Tchadcommerce</h2>
          <ul>
            <li className="font-medium text-gray-500 my-2 mx-0"><FontAwesomeIcon icon={faHeartPulse} className="mx-1"/>Avoir de l'aide</li>
            <li className="font-medium text-gray-500 my-2 mx-0"> <FontAwesomeIcon icon={faProductHunt} className="mx-1"/>Acheter un produits</li>
            <li className="font-medium text-gray-500 my-2 mx-0"><FontAwesomeIcon icon={faAffiliatetheme} className="mx-1"/>Devenir Affiliante</li>
            <li className="font-medium text-gray-500 my-2 mx-0"><FontAwesomeIcon icon={faSellcast} className="mx-1"/>Vendre un produits</li>
          </ul>
        </div>
        <div  className="my-3 lg:my-0">
          <h2 className="text-xl font-medium">Nos differents departement</h2>
          <ul>
          <li className="font-medium text-gray-500 my-2 mx-2">Avoir de l'aide</li>
            <li className="font-medium text-gray-500 my-2 mx-2">Acheter un produits</li>
            <li className="font-medium text-gray-500 my-2 mx-2">Devenir Affiliante</li>
            <li className="font-medium text-gray-500 my-2 mx-2">Vendre un produits</li>
          </ul>
        </div>
      
    </div>
    <div className="flex items-center my-6">
      <h2 className="text-2xl font-medium">Suivez nous sur:</h2>
     <div className="mt-2">
     <FontAwesomeIcon icon={faFacebook}  className="mx-3 text-xl font-bold"/>
      <FontAwesomeIcon icon={faXTwitter} className="mx-3 text-xl font-bold"/>
      <FontAwesomeIcon icon={faWhatsapp} className="mx-3 text-xl font-bold"/>
      <FontAwesomeIcon icon={faInstagram} className="mx-3 text-xl font-bold"/>
     </div>
    </div>
    <hr />
    <div className="lg:flex justify-between  text-sm font-medium">
      <h2 className="my-3">Copyright &copy; 2024 <span className="text-orange-500">TchadCommerce.com</span> tous droits reserves</h2>
      <h2 className="my-3">Powered by Devsoftware <span className="text-orange-500">Yahoulbo</span></h2>
    </div>
    </div>
  )
}

export default Footer
