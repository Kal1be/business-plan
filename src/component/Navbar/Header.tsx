import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <div className='bg-red-200 py-2 lg:w-full flex w-screen justify-between lg:px-6 px-3 text-red-700'>
        <div className='lg:text-xl lg:font-bold'>Leadeur du businness</div>
        <div className='lg:text-xl'>Learn more <FontAwesomeIcon icon={faArrowRight} className='mx-1'/></div>
      
    </div>
  )
}

export default Header
