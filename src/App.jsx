import './App.css'
import Datepicker from './components/Datepicker'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="fixed inset-0 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-9xl font-bold">Hello KBTG</h1>
        <div className="mt-6">
          <Datepicker />
        </div>
      </div>
    </div>
  )
}

export default App
