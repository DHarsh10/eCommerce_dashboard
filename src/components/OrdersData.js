import { ordersData } from '../data/dafaultData';
import useTheme from '../contexts/themeContext';

const OrdersData = () => {
  const { theme } = useTheme();


  return (
    <div className='orders-data'>
      {
        ordersData.map((data, i) => (
          <div key={i} className={`orders-data${i + 1} p-4`}>
            <p className='text-left text-[0.972vw] font-semibold'>{data.name}</p>
            <div className='flex justify-between items-center'>
              <p className='text-[1.667vw] font-semibold'>{data.numbers}</p>
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
