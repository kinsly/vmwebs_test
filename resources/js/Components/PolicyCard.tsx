import { PolicyDetails } from "@/types/PolicyCard"

export default function PolicyCard({policyData1,policyData2 }: {policyData1:PolicyDetails, policyData2:PolicyDetails}){
  return(
    <div className="mx-auto p-4 bg-gray-300 shadow-lg rounded-2xl border">
      <div className="grid grid-cols-2 gap-4">
        <div>
          {
            policyData1.map(item => {
              return (
              <div key={item.id}>
                  <div  className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
              </div>
              )
            })
          }
        </div>
        <div>
        {
            policyData2.map(item => {
              return (
              <div key={item.id}>
                  <div  className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
              </div>
              )
            })
          }
            
          
        </div>
      </div>
    </div>
  )
}