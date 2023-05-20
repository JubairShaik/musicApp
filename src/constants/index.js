import images from './images';
import  Tilt  from 'react-parallax-tilt';

export { images };

export const FeartureData = [
    {
      icon:images.mike,
      title:"For Live Music",
      matter:"You Can Feel The Taste Of Live Music at At AnyTime At AnyWhere",
    },
    {
      icon:images.mike2,
      title:"At Any Place",
      matter:"You Can Feel The Taste Of Live Music at At AnyTime At AnyWhere",
    },
    {
      icon:images.mike3,
      title:"For Any Type",
      matter:"You Can Feel The Taste Of Live Music at At AnyTime At AnyWhere",
  
    }
  ];
  


  
export const SingleCard = ({ icon, title, content, matter}) => (


    <Tilt>

    <div className={`flex flex-col p-5 z-10 shadow-md shadow-pink-500 bg-blue-900  items-center justify-center gap-1 rounded-[20px] border-1`}>
     
       <div className={` h-[8rem] max-w-[14rem] items-center flex justify-center  
      rounded-full  `}>
     <img src={icon} alt="star" className=" rounded-lg  h-[90%] w-[90%]  object-contain" />
       </div>
      <div className="flex-1 flex flex-col">
        <h4 className="font-poppins font-semibold text-pink-600 text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins  max-w-[280px] font-normal text-dimWhite text-[16px] leading-[24px]">
          {matter}
        </p>
      </div>
    </div>

    </Tilt>

  );
  