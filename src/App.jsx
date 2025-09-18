import './App.css'
import Datepicker from './components/Datepicker'

function App() {
  return (
    <div className="h-screen bg-[#efe9f8] flex items-stretch">
      <div className="w-full h-full bg-white p-6 text-gray-900 flex gap-6">
        {/* Sidebar */}
        <aside className="w-72 flex-shrink-0">
          <div className="flex flex-col h-full gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-200 flex items-center justify-center text-purple-700 font-bold">A</div>
              <div>
                <div className="font-bold">Academy</div>
                <div className="text-sm text-gray-500">Learn anything</div>
              </div>
            </div>

            <nav className="mt-6 flex flex-col gap-2 text-gray-600">
              <button className="text-left py-2 px-3 rounded-lg bg-purple-50 text-purple-700 font-medium">Dashboard</button>
              <button className="text-left py-2 px-3 rounded-lg hover:bg-gray-100">Courses</button>
              <button className="text-left py-2 px-3 rounded-lg hover:bg-gray-100">Chats</button>
              <button className="text-left py-2 px-3 rounded-lg hover:bg-gray-100">Grades</button>
              <button className="text-left py-2 px-3 rounded-lg hover:bg-gray-100">Schedule</button>
              <button className="text-left py-2 px-3 rounded-lg hover:bg-gray-100">Settings</button>
            </nav>

            <div className="mt-auto bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Premium subscription</h4>
              <p className="text-sm text-gray-500 mt-1">Buy Premium and get access to new courses</p>
              <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg">More detailed</button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="px-4">
            <header className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex items-center gap-3">
                <input className="px-3 py-2 rounded-lg border border-gray-200" placeholder="Search" />
                <button className="p-2 rounded-lg bg-white border">🔔</button>
              </div>
            </header>

            <section className="mt-6">
              <h2 className="text-lg font-semibold text-gray-700">New Courses</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 shadow-sm">
                  <div className="h-28 rounded-md bg-orange-200 flex items-center justify-center">Geography</div>
                  <div className="mt-3 font-semibold">Geography</div>
                  <div className="text-sm text-gray-500">12 lessons</div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 shadow-sm">
                  <div className="h-28 rounded-md bg-purple-200 flex items-center justify-center">JS</div>
                  <div className="mt-3 font-semibold">JavaScript Course</div>
                  <div className="text-sm text-gray-500">15 lessons</div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-sm">
                  <div className="h-28 rounded-md bg-blue-200 flex items-center justify-center">Photo</div>
                  <div className="mt-3 font-semibold">Photography Course</div>
                  <div className="text-sm text-gray-500">8 lessons</div>
                </div>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">My Courses</h3>
              <div className="mt-3 bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">WD</div>
                      <div>
                        <div className="font-medium">Web Design</div>
                        <div className="text-sm text-gray-500">10 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">May 12</div>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">DB</div>
                      <div>
                        <div className="font-medium">Development Basics</div>
                        <div className="text-sm text-gray-500">8 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">May 14</div>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center">PY</div>
                      <div>
                        <div className="font-medium">Data with Python</div>
                        <div className="text-sm text-gray-500">5 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">May 17</div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>

        {/* Right panel */}
        <aside className="w-80 flex-shrink-0">
          <div className="flex flex-col h-full gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-yellow-200 flex items-center justify-center text-white text-xl font-bold">EH</div>
              <div className="mt-3 font-semibold">Esther Howard</div>
              <div className="text-sm text-gray-500">Elementary</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-medium">Calendar</div>
                <div className="text-sm text-gray-500">May 2022</div>
              </div>
              <div className="flex items-center justify-center">
                <Datepicker />
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm mt-auto">
              <h4 className="font-medium">Homework progress</h4>
              <div className="mt-3 space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">Styling with CSS — 50%</div>
                <div className="p-3 bg-gray-50 rounded-lg">Basics of programming — 65%</div>
                <div className="p-3 bg-gray-50 rounded-lg">Learn to Program in Java — 25%</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
