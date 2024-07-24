import { 
    PieChart, 
    Pie, 
    Sector, 
    Cell, 
    Legend,
    Tooltip,
    ResponsiveContainer 
} from 'recharts';

const data = [
    {name: 'Income', value: 150010},
    {name: 'Expense', value: 50010}
]


const DoughnutChart = () => {
  return (
    <div className='max-container w-full xl:w-[30%]'>
        <h1 className='text-4xl text-black dark:text-slate-300 text-center max-sm:text-3xl'>Summary</h1>
            <ResponsiveContainer
                width={'100%'}
                height={500}
            >
                <PieChart
                    width={500}
                    height={400}
                >
                    <Tooltip/>
                    <Legend/>
                    <Pie
                        data = {data}
                        innerRadius={80}
                        outerRadius={150}
                        paddingAngle={5}
                        dataKey={'value'}
                    >
                    <Cell
                        fill='#22C55E'
                    />
                    <Cell
                        fill='#DC2626'
                    />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
    </div>
  )
}

export default DoughnutChart