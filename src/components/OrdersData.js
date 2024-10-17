import { useEffect } from 'react';
import { gsap, Power1 } from 'gsap';
import { ordersData } from '../data/dafaultData'
import useTheme from '../contexts/themeContext';

const OrdersData = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const items = document.querySelectorAll(".animateNum");

    items.forEach((item, i) => {
      const endValue = ordersData[i].numbers 
      gsap.fromTo(item, 
        { textContent: 0 },
        {
          textContent: endValue, // Animate to the actual number
          duration: 3, // Duration of animation
          ease: Power1.easeInOut,
          snap: { textContent: 1 }, // Snap to whole numbers
          onUpdate: function () {
            item.textContent = Math.floor(item.textContent); // Round the number during the animation
          }
        }
      );
    });
  }, []);

  return (
    <div className='orders-data'>
      {
        ordersData.map((data, i) => (
          <div key={i} className={`orders-data${i + 1} p-4`}>
            <p className='text-left text-[0.972vw] font-semibold'>{data.name}</p>
            <div className='flex justify-between items-center'>
              <p className='text-[1.667vw] font-semibold'>
                {data.unitStart && data.unitStart}
                <span className='animateNum'>{data.numbers}</span>
                {data.unitEnd && data.unitEnd}
              </p>
              <div className='text-[0.833vw] flex gap-2 font-normal'>
                {data.stonks}
                <img src={`${theme === 'light' ? data['img'][0] : data['img'][1]}`} alt='' />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default OrdersData;
