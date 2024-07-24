import {accountsData} from '../constants/index'
import { 
    FaBtc, 
    FaCcMastercard, 
    FaPaypal 
  } from "react-icons/fa";
  import { RiVisaLine } from "react-icons/ri";


const Accounts = () => {
  return (
    <section 
        className="lg:flex lg:flex-col max-xl:items-center"
        id='accounts'
    >
        <h1 className='text-4xl text-black dark:text-slate-300 max-sm:text-3xl'>Accounts</h1>
        <p className="dark:text-slate-500 mt-2 max-md:text-xs">View all your accounts</p>
        <div className='mt-4'>
            {accountsData.map((item,index) => (
                <div 
                    key={index}
                    className='flex items-center justify-between max-xl:gap-10'
                >
                    <div className='flex items-center gap-3'>
                        <div>
                            {index === 0 && (
                                <div className='w-12 h-12 bg-amber-600 text-white flex items-center justify-center rounded-full'>
                                    <FaBtc size={24}/>
                                </div>
                            )}
                            {index === 1 && (
                                <div className='w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full'>
                                    <RiVisaLine size={24}/>
                                </div>
                            )}
                            {index === 2 && (
                                <div className='w-12 h-12 bg-rose-600 text-white flex items-center justify-center rounded-full'>
                                    <FaCcMastercard size={24}/>
                                </div>
                            )}
                            {index === 3 && (
                                <div className='w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-full'>
                                    <FaPaypal size={24}/>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col py-2'>
                            <p className='dark:text-slate-300 mb-1'>{item.name}</p>
                            <span className='dark:text-slate-500 max-sm:text-xs'>{item.account}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='dark:text-slate-300 text-md'>${item.amount}</p>
                        <span className='dark:text-violet-700 text-sm max-sm:text-xs'>Account Balance</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Accounts