import { stats } from "../constants"

const Dashboard = () => {


  return (
    <section className="flex flex-col lg:flex-row gap-8 flex-wrap justify-between max-container">
      {stats.map((item,index) => (
        <div 
          key={index}
          className="flex flex-1 gap-10 dark:text-slate-400 px-4 py-14 max-sm:py-10 dark:bg-slate-700 bg-gray-300 text-black rounded-xl items-center justify-between"
        >
          <div className="flex gap-7 items-center md:w-[300px]"> 
            <img 
              src={item.icon} 
              alt="dashboard-icons" 
              width={40}
              height={40}
              className={`w-12 h-12 max-sm:w-10 max-sm:h-10 outline-none rounded-full p-2
              ${index === 0 ? 'bg-blue-300':''}
              ${index === 1 ? 'bg-green-400':''}
              ${index === 2 ? 'bg-red-400':''}
              `}
            />
            <div className="flex flex-col space-y-3">
              <div className="max-sm:text-xs">
                {item.label}
              </div>
              <div className="max-sm:text-lg text-2xl">
                {item.amount}
              </div>
            </div>
          </div>
     
          <div>
            <p className={`
              ${item.increase > 0 ? 'text-green-500':'text-red-400'}
            `}>
              {item.increase}%
            </p>
            <span className="max-sm:text-xs">Compare to last year</span>
          </div>

        </div>
      ))}
    </section>
  )
}

export default Dashboard