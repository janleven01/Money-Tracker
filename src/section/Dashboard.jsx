import {
    Search,
    ListFilter
} from 'lucide-react'

const Info = () => {
  return (
    <section
        id="dashboard"
        className="w-full max-container flex flex-col lg:flex-row justify-between"
    >
       <div>
            <h1 className="dark:text-gray-300 text-black text-4xl">Dashboard</h1>
            <p className="dark:text-slate-400 text-slate-500 mt-3">Monitor our financial activities</p>
       </div>
        
        <div>
            <div className='flex gap-4 mt-7 '>
                <div className='border-slate-400 border rounded-lg flex flex-1 items-center max-md:w-[60%] px-2 gap-1 dark:text-slate-400'>
                    <Search 
                        size={20}
                        className=''/>
                    <input 
                        type="text" 
                        placeholder='Search now...'
                        className='dark:bg-slate-900 outline-none max-sm:text-sm w-[100%]'
                    />
                </div>

                <button className='flex bg-black text-slate-200 gap-1 px-3 py-2 rounded-lg dark:bg-violet-600 justify-center items-center font-semibold'>
                <ListFilter size={24}/>
                <span className='max-sm:text-sm text-base'>Filter By</span>
                </button>
            </div>
        </div>
        
    </section>
  )
}

export default Info