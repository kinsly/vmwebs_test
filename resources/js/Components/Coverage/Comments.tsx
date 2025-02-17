import { Comment } from "@/types/coverageCardData"

export default function CommentsBox({commentsData}: {commentsData:Comment[]})
{
  return(
    <div className="mx-auto border border-gray-300 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold px-2 py-1">Additional Comments</h2>

      {/* Comments */}
      <ul className="mt-2 space-y-2">
        {
          commentsData.map(comment => {
            return(
                <li className="flex items-center gap-2" key={comment.id}>
                  {
                    comment.isActive?
                    <i className="fa-solid fa-circle-check text-green-500"></i>
                    :
                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                  }
                  <span>{comment.text}</span>
                </li>
            )
          })
        }
        
        
      </ul>
    </div>
  )
}