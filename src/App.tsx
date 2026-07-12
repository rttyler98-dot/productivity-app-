import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center font-sans p-0 sm:p-4">
      {/* Mobile container constraint for desktop viewing */}
      <div className="w-full max-w-md h-[100dvh] bg-app-bg relative overflow-hidden shadow-2xl sm:rounded-[2.5rem] sm:h-[850px] sm:max-h-[90vh] sm:border-[8px] sm:border-gray-900 ring-1 ring-gray-900/5">
        <div className="absolute inset-0 bg-noise z-0 mix-blend-overlay"></div>
        <div className="relative z-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
