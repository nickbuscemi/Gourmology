import { cloudFlareMenus } from '@/data/cloudFlareImagesConfig'
const HolidayMenu = () => {
  return (
    <div className='bg-dark-1 py-8 px-8 md:px-64 flex justify-center items-center'>
        <img 
            src={cloudFlareMenus.mothersDayMenu} 
            alt="Mother's Day Menu" 
            className='flex md:w-3/4 w-full items-center justify-center'
        />
    </div>
  )
}

export default HolidayMenu