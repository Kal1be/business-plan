import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import './product.css'
const responsive={
superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 5000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Product() {
  return (
    <div>
      <div className='lg:px-12 z-0 w-full ' id='enfant'>
     <h3 className='lg:text-4xl text-3xl font-bold mt-4 mb-2'>Découvrez vos prochaines opportunités commerciales</h3>
      <p className='lg:w-[90%] lg:text-xl text-sm font-medium'>Développez et réussissez avec les avantages soigneusement sélectionnés, 
      proposés par TchadCommerce.com, que vous soyez une entreprise en démarrage ayant besoin 
      de l'essentiel pour commencer à s'approvisionner ou une entreprise bien établie à la recherche d'outils et de services pour des commandes plus complexes.</p>
        <div className='lg:flex justify-between '>
        <div className='lg:w-[400px] w-screen  border shadow-xl my-3 '>
        <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={false}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={ true}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <motion.img
         src="/business-plan/canaper10.jpeg" alt="" className='w-full'/>
        <motion.img
         src="/business-plan/canaper11.jpg" alt="" className='w-full'/>
        <motion.img
         src="/business-plan/canaper12.jpeg" alt="" className='w-full' />
           </Carousel>
            <div className='flex justify-between w-full'>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/canaper13.jpeg" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/canaper15.jpeg" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/canaper16.jpeg" alt="" className='lg:w-32 w-28'/>
            </div>
            </div><div className='lg:w-[400px] w-screen  border shadow-xl my-3 '>
        <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={false}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={ true}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <motion.img
         src="/business-plan/Gino-Tomato-1.webp" alt="" className='w-full h-[40vh]'/>
        <motion.img
         src="/business-plan/Gino-Tomato-2.webp" alt="" className='w-full h-[40vh]'/>
        <motion.img
         src="/business-plan/Gino-Tomato-3.jpeg" alt="" className='w-full h-[40vh]' />
           </Carousel>
            <div className='flex justify-between w-full'>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/Gino-Tomato-4.webp" alt="" className='lg:w-32 w-28 h-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/Gino-Tomato-3.jpeg" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/Gino-Tomato-1.webp" alt="" className='lg:w-32 w-28'/>
            </div>
            </div><div className='lg:w-[400px] w-screen  border shadow-xl my-3 '>
        <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={false}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={ true}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={2000}
         containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <motion.img
         src="/business-plan/vejaro-green1.jpg" alt="" className='w-full h-[40vh]'/>
        <motion.img
         src="/business-plan/vejaro2.jpg" alt="" className='w-full h-[40vh]'/>
        <motion.img
        src="/business-plan/vejaro3.jpg"  alt="" className='w-full h-[40vh]' />
           </Carousel>
            <div className='flex justify-between w-full'>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/vejaro-green5.jpg" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/vejaro-green2.jpg"  alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/vejaro-green3.jpg" alt="" className='lg:w-32 w-28'/>
            </div>
            </div>
        </div>

      {/*+++++++++++++++++++++++++++++++++===================------------------- the second elemnet of the usiver second_______++++++++++++++++++++++= */}

        <div className='lg:flex justify-between '>
        <div className='lg:w-[400px] w-screen  border shadow-xl my-3 '>
        <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={false}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={ true}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <motion.img
        src="/business-plan/magie-star1.webp" alt="" className='w-full h-[40vh]'/>
        <motion.img
        src="/business-plan/magie-star2.jpeg" alt="" className='w-full h-[40vh]'/>
        <motion.img
        src="/business-plan/magie-star3.jpeg" alt="" className='w-full h-[40vh]' />
           </Carousel>
            <div className='flex justify-between w-full'>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/magie-star1.webp" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/magie-star3.jpeg" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/magie-star4.webp" alt="" className='lg:w-32 w-28'/>
            </div>
            </div>
            <div className='lg:w-[400px] w-screen  border shadow-xl my-3 '>
        <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={false}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={ true}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <motion.img
       src="/business-plan/white-black-jordan-air2.webp" alt="" className='w-full h-[40vh]'/>
        <motion.img
       src="/business-plan/black1.jpeg" alt="" className='w-full h-[40vh]'/>
        <motion.img
       src="/business-plan/black2.jpg" alt="" className='w-full h-[40vh]' />
           </Carousel>
            <div className='flex justify-between w-full'>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/white-black-jordan-air1.jpg" alt="" className='lg:w-32 w-28 h-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/white-black-jordan-air4.webp" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/white-black-jordan-air3.webp" alt="" className='lg:w-32 w-28'/>
            </div>
            </div>

            <div className='lg:w-[400px] w-screen  border shadow-xl my-3 '>
        <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={false}
        //  responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={ true}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px">
        <motion.img
         src="/business-plan/golden-macaroni1.webp" alt="" className='w-full h-[40vh]'/>
        <motion.img
         src="/business-plan/macaroni8.webp" alt="" className='w-full h-[40vh]'/>
        <motion.img
        src="/business-plan/macaroni5.webp"  alt="" className='w-full h-[40vh]' />
           </Carousel>
            <div className='flex justify-between w-full'>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/golden-macaroni3.jpg" alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/macaroni6.jpeg"  alt="" className='lg:w-32 w-28'/>
                <motion.img
                initial={{opacity:0,scale:.9}}
                transition={{duration:.6}}
                whileInView={{opacity:1,scale:1}} src="/business-plan/macaroni7.jpg" alt="" className='lg:w-32 w-28'/>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product
