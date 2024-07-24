import NavBar from "./section/NavBar"
import Dashboard from "./section/Dashboard"
import useStore from "./store";
import DashboardContents from './components/DashboardContents'
import Chart from './components/Chart'
import DoughnutChart from "./components/DoughnutChart";
import Transaction from './section/Transaction'
import Accounts from "./section/Accounts";


const App = () => {
  const theme = useStore((state) => state.theme);

  return (
    <>
      <main className={theme}>
        <div className='bg-white dark:bg-slate-900 relative'>
          <NavBar/>
          <section className="padding">
            <Dashboard/>
              <div className="py-8">
                <DashboardContents/>
              </div>
              <div className="max-container flex flex-col-reverse xl:flex-row justify-between gap-10 xl:gap-24">
                <Chart/>
                <DoughnutChart/>
              </div>
          </section>
          <div className="max-container flex flex-col-reverse xl:flex-row justify-between max-2xl:padding gap-12 xl:gap-24">
            <section className="w-full xl:w-3/5">
                  <Transaction/>
            </section>  
            <section className="xl:w-2/5">
                  <Accounts/>
            </section>  
          </div>
        </div>
      </main>
    </>
  )
}

export default App