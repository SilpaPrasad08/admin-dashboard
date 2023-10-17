import Sidebar from '../app/components/Sidebar'
import Navbar from '../app/components/Navbar'
import Charts from '../app/components/Charts'

export default function Home() {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
          <Navbar />
          <Charts/>
    </main>
    </div>
    </>
  )
}