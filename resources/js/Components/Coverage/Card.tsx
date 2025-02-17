import { ReactNode } from "react";

export default function Card({children}: {children:ReactNode}){
  return (
    <div className="mt-5">
      <div className="flex bg-gray-300 justify-between py-3 px-2 rounded-t-lg">
        <h2>Coverage</h2>
        <div>
          <button className="px-2 bg-green-600 text-white mr-2">Add Coverage</button>
          <button className="px-2 bg-green-600 text-white">Add Coverage</button>
        </div>
        
      </div>
      {children}
    </div>
  )
}