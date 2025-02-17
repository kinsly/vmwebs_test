import GreenButton from "../GreenButton"
import Comments from "./Comments"
import SummaryReport from "./SummaryReport"
import Details from "./Details"
import { CardData, Comment, Summary } from "@/types/CoverageCard"


export default function CoverageCardItem({details,comments, summary}:{details:CardData[],comments:Comment[], summary:Summary[]}){
  return (
    <div className="mt-5">
      {/* Heading */}
      <div className="flex justify-between bg-gray-500 px-3 pt-5 pb-3">
        <div>
          <h2 className="flex float-left mr-2 text-white">Genesis Universal Life (001-001)</h2>
          <button className="px-3 bg-white flex text-blue-950 font-bold">$ NaN</button>
        </div>
        <div>
            <span className="bg-white p-1 m-1"><i className="fa-solid fa-pen"></i></span>
            <span className="bg-white p-1 m-1"><i className="fa-regular fa-trash-can"></i></span>
        </div>
      </div>

      {/* Details */}
      <div >
        <Details data={details}/>
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        <GreenButton text="Add Comments"/>
        <GreenButton text="Add Summary Report"/>
      </div>

      <Comments commentsData={comments}/>

      <SummaryReport summaryData={summary}/>
    </div>
  )
}