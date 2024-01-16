import "./second.css"

function Second() {
  return (
    <div className='lg:flex justify-between lg:px-20   items-center w-full'>
      <div>
        <h2 className="lg:text-6xl text-3xl font-bold px-2">Explore millions of offerings tailored to your business needs</h2>
      </div>
      <div className="px-4" >
       <div className='lg:flex  my-3 justify-between lg:w-[110%]'>
       <p id='ele'><span className='lg:text-5xl text-3xl my-2 font-bold lg:font-medium text-orange-500'>100M+</span><br />
        <span id="prod">
            products
        </span></p>
       <p  id='ele'><span className='lg:text-5xl text-3xl my-2  font-bold lg:font-medium text-orange-500'>1000k+</span><br />
        <span  id="prod">
           Suppliers
        </span></p>
       </div>
      <div className='lg:flex my-3 lg:w-[98%] justify-between'>
      <p  id='ele'><span className='lg:text-5xl text-3xl my-2  font-bold lg:font-medium text-orange-500'>5900</span><br />
        <span  id="prod">
           products & categories
        </span></p>
       <p   id='ele'><span className='lg:text-5xl text-3xl my-2  font-bold lg:font-medium text-orange-500'>200+</span><br />
        <span id="prod">
           countrie and <br />
            region
        </span></p>
      </div>
      </div>
    </div>
  )
}

export default Second
