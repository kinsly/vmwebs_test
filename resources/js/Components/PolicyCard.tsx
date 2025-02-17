import { PolicyDetails } from "@/types/PolicyCard"

export default function PolicyCard({policyData1,policyData2 }: {policyData1:PolicyDetails, policyData2:PolicyDetails}){
  return(
    <div className="mx-auto p-4 bg-gray-300 shadow-lg rounded-2xl border">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <table>
          {
            policyData1.map(item => {
              return (
                <tr key={item.id}>
                  <td className="pr-7">{item.name}</td>
                  <td>{item.value}</td>
                </tr>
              )
            })
          }
          </table>
        </div>
        <div>
          <table>
            {
              policyData2.map(item => {
                  return (
                    <tr  key={item.id}>
                      <td className="pr-7">{item.name}</td>
                      <td>{item.value}</td>
                    </tr>
                  )
                })
            }
        </table>              
        </div>
      </div>
    </div>
  )
}