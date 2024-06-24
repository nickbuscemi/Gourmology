interface HolidayMenuProps {
  images: string | string[];
}

const HolidayMenu: React.FC<HolidayMenuProps> = ({ images }) => {

  const imageArray = Array.isArray(images) ? images : [images];
  return (
    <div className='bg-dark-1 py-8 px-8 md:px-64 flex justify-center items-center'>
      {imageArray.map((img, index) => (
        <img 
          key={index}
          src={img} 
          alt={`Holiday Menu ${index + 1}`} 
          className='flex md:w-3/4 w-full items-center justify-center'
        />
      ))}
    </div>
  );
};

export default HolidayMenu;
