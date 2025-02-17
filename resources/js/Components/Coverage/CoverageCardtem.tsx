import GreenButton from "../GreenButton"
import Comments from "./Comments"
import SummaryReport from "./SummaryReport"
import Details from "./Details"
import { CoverageCard } from "@/types/coverageCardData"


export default function CoverageCardItem({data}:{data:CoverageCard}){
  return (
    <div className="mt-5">
      {/* Heading */}
      <div className="flex justify-between bg-gray-500 px-3 pt-5 pb-3">
        <div>
          <h2 className="flex float-left mr-2 text-white">{data.heading.title}</h2>
          <button className="px-3 bg-white flex text-blue-950 font-bold">$ {data.heading.amount}</button>
        </div>
        <div>
            <span className="bg-white p-1 m-1"><i className="fa-solid fa-pen"></i></span>
            <span className="bg-white p-1 m-1"><i className="fa-regular fa-trash-can"></i></span>
        </div>
      </div>

      {/* Details */}
      <div >
        <Details data={data.info}/>
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        <GreenButton text="Add Comments"/>
        <GreenButton text="Add Summary Report"/>
      </div>

      {data.comments && <Comments commentsData={data.comments}/>}

      {data.summary && <SummaryReport summaryData={data.summary}/>}
    </div>
  )
}