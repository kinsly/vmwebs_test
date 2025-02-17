import CoverageCard from "@/Components/CoverageCard";
import PolicyCard from "@/Components/PolicyCard";
import ProfileCard from "@/Components/ProfileCard";
import WebLayout from "@/Layouts/WebLayout";
import { PolicyDetails } from "@/types/PolicyCard";
import { ProfileCardDetails } from "@/types/ProfileCard";

const ProfileCardData: ProfileCardDetails = {
  name:"Mahendranathan Vaheesan",
  email:"mahen.vahee@gmail.com",
  tel:"4168903680",
  actions:[
    {
      id:1,
      icon:"fa-solid fa-shield",
      title:"Policy"
    },
    {
      id:2,
      icon:"fa-regular fa-envelope",
      title:"Email"
    },
    {
      id:3,
      icon:"fa-solid fa-circle-info",
      title:"Info"
    },
    {
      id:4,
      icon:"fa-regular fa-note-sticky",
      title:"Note"
    },
    {
      id:5,
      icon:"fa-solid fa-clock-rotate-left",
      title:"History"
    },
    {
      id:6,
      icon:"fa-regular fa-circle-check",
      title:"Todo"
    },
    {
      id:7,
      icon:"fa-regular fa-calendar",
      title:"Meeting"
    }
  ]
}

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

export default function Welcome()
{
  return ( 
    <WebLayout>
      <ProfileCard profileData={ProfileCardData}/>
      <PolicyCard policyData1={policyData1} policyData2={policyData2}/>
      <CoverageCard>
        <div></div>
      </CoverageCard>
    </WebLayout>
    )
}