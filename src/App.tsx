import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center font-sans">
      {/* Mobile container constraint for desktop viewing */}
      <div className="w-full max-w-md h-[100dvh] bg-white relative overflow-hidden shadow-2xl sm:rounded-3xl sm:h-[850px] sm:max-h-[90vh]">
        <Outlet />
      </div>
    </div>
  )
}

export default App
