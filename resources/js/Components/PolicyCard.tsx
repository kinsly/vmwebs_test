import { PolicyDetails } from "@/types/PolicyCard"

const policyData1: PolicyDetails = [
  {
    id:1,
    name:'Policy Number',
    value:'448638103'
  },
  {
    id:2,
    name:'Ins. Company',
    value:'Industrial Alliance'
  },
  {
    id:3,
    name:'Policy Owner',
    value:'MAHENDRANATHAN VAHEESAN'
  }
]


const policyData2:PolicyDetails = [
  {
    id:1,
    name:'Premium',
    value:'$ 354.37'
  },
  {
    id:2,
    name:'Payor',
    value:'MAHENDRANATHAN VAHEESAN'
  },
  {
    id:3,
    name:'Draw Day',
    value:'15th'
  },
  {
    id:4,
    name:'Issue Date',
    value:'Dec 2, 2024'
  }
]


export default function PolicyCard(){
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