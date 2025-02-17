import Card from "@/Components/Coverage/Card";
import CoverageItem from "@/Components/Coverage/CoverageCardtem";
import PolicyCard from "@/Components/PolicyCard";
import ProfileCard from "@/Components/ProfileCard";
import { allCoverageCards, policyData1, policyData2, ProfileCardData} from "@/Data/data";
import WebLayout from "@/Layouts/WebLayout";

export default function Welcome()
{
  return ( 
    <WebLayout>
      <div className="flex gap-4">
        
        <div className="w-3/4 p-4 min-w-[600px]">
          {/* Profile information */}
          <ProfileCard profileData={ProfileCardData}/>

          {/* Policy Card */}
          <PolicyCard policyData1={policyData1} policyData2={policyData2}/>
          
          {/* Coverage Cards */}
          {
            allCoverageCards.map((coverageCard, key) => {
              return(
                <Card key={key}>
                  <CoverageItem data={coverageCard}/>
                </Card >
              )
            })
          }
          
        </div>

        <div className="w-1/4 p-4">
          <div className="bg-gray-300 py-1 px-5 text-blue-900 font-bold border-b-2 border-blue-300">
            <h2>Activity History</h2>
          </div>
        </div>
      </div>
      
    </WebLayout>
    )
}