export default function Header(){
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-lg font-semibold">Dashboard</h1>
    
    <div className="flex items-center space-x-4">
      <button className="p-2 rounded-full hover:bg-gray-200">
        <i className="fa-regular fa-bell text-2xl"></i>
      </button>
      
      <button className="p-2 rounded-full hover:bg-gray-200">
        <i className="fa-solid fa-moon text-2xl"></i>
      </button>
      
      <div className="w-10 h-10 rounded-full bg-gray-300"></div>

      <div className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.75-5.4a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </header>
  )
}