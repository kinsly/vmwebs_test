import { Summary } from "@/types/coverageCardData"

export default function SummaryReport({summaryData}: {summaryData:Summary[]})
{
  return(
    <div className="mx-auto border border-gray-300 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold px-2 py-1">Summary Report</h2>

      {/* Comments */}
      <ul className="mt-2 space-y-2">
        {
          summaryData.map(comment => {
            return(
                <li className="flex items-center gap-2" key={comment.id}>
                  <i className="fa-solid fa-circle-check text-yellow-400"></i>
                  <span>{comment.text}</span>
                </li>
            )
          })
        }
        
        
      </ul>
    </div>
  )
}