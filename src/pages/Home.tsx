import Header from '../component/Navbar/Header'
import Navbar from '../component/Navbar/Navbar'
import Scroll from '../component/body/Scroll'
import First from '../Composant1/composant1/First'
import Second from '../Composant1/composant1/Second'
import Carousele from '../Composant1/composant1/Carousel'
import Product from '../Composant1/composant1/Product'
import Clients from '../Composant1/composant1/Clients'
import Footer from '../component/Footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Scroll/>
      <First/>
      <Second/>
    <div>
   <div className='lg:px-20 px-4 lg:py-4'> <h3 className="lg:text-5xl text-2xl font-bold text-orange-500">Notre logique du business</h3>
         <p className="lg:text-xl text-sm font-medium">pour ameliorer notre commerce TchadCommerce.com a mis en place des differents departement 
          de commerce et des outils pour vos differents besoin 
          vous pouvez choisir en cliquant sur recherche.</p> </div>
      <Carousele/>
      </div>
      <Product/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default Home
