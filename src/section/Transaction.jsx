import React from 'react'
import { transactionData } from '../constants'
import { 
    statusComplete,
    statusPending,
    statusRejected
   } from '../assets/icons'

const Transaction = () => {
  return (
    <section 
        id='transactions'
        className='max-container w-full max-xl:mt-5'
    >
        <h1 className='text-4xl text-black dark:text-slate-300 max-sm:text-3xl'>Latest Transactions</h1>
        <div className='overflow-x-auto'>  
          <table className='w-full mt-3 mb-10'>
           <thead className=''>
                <tr className='font-bold border-b text-left text-lg dark:text-slate-400'>
                    <th className='py-2'>Date</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Source</th>
                    <th>Amount</th>
                </tr>
           </thead>
            <tbody className=''>
                {transactionData.slice(0,5).map((item,index) => (
                    <tr key={index}
                        className='border-b dark:border-slate-500 dark:hover:bg-slate-800 hover:bg-slate-100'
                    >
                        <td className='px-2 py-2 text-slate-500 dark:text-slate-500 text-sm'>
                            {item.date}
                        </td>
                        <td className='px-2 py-2'>
                            <p className='text-md dark:text-slate-300 font-semibold'>{item.name}</p>
                            <p className='text-slate-500 text-sm'>{item.contact}</p>
                        </td>
                        <td className={`flex items-center gap-2 px-3 py-1 md:w-[80%] lg:w-[56%] xl:w-[70%] rounded-full dark:text-slate-700 text-sm my-4
                            ${item.status == 'Completed' ? 'dark:bg-green-200':''}
                            ${item.status == 'Pending' ? 'dark:bg-amber-200':''}
                            ${item.status == 'Rejected' ? 'dark:bg-red-300':''}
                        `}>
                            {item.status === 'Completed' && ( 
                            <img
                                src={statusComplete}
                                className='w-4 h-4 bg-green-600 rounded-full p-1'
                            />)}
                            {item.status === 'Pending' && ( 
                            <img
                                src={statusPending}
                                className='w-5 h-5'
                            />)}
                            {item.status === 'Rejected' && ( 
                            <img
                                src={statusRejected}
                                sizes='24'
                                className='w-5 h-5'
                            />)}
                            <span>{item.status}</span>
                        </td>
                        <td className='dark:text-slate-500 px-2 py-2 text-sm'>
                            {item.source}
                        </td>
                        <td className='dark:text-slate-300 px-2 py-2'>
                            ${item.amount}
                        </td>
                    </tr>
                ))}
            </tbody>
            </table> 
        </div>
    </section>
  )
}

export default Transaction