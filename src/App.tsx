import { useState } from 'react'
import HyTowerTable from './components/HyTowerTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mt-8 p-8">
      <h1 className='font-bold text-2xl text-green-800'>HyTower Dashboard</h1>
      <div className='w-full mt-12'>
        <HyTowerTable />
      </div>
    </div>
  )
}

export default App
