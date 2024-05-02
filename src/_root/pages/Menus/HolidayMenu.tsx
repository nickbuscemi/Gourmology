import MothersDayMenu from '../../../../public/assets/Menus/MothersDayMenu.jpeg'
const HolidayMenu = () => {
  return (
    <div className='bg-dark-1 py-8 px-8 md:px-64 flex justify-center items-center'>
        <img 
            src={MothersDayMenu} 
            alt="Mother's Day Menu" 
            className='flex md:w-3/4 w-full items-center justify-center'
        />
    </div>
  )
}

export default HolidayMenu