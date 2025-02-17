
import { Comment, Summary, CoverageCard, CardData } from "@/types/CoverageCard"
import { PolicyDetails } from "@/types/PolicyCard"
import { ProfileCardDetails } from "@/types/ProfileCard"

export const ProfileCardData: ProfileCardDetails = {
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

export const policyData1: PolicyDetails = [
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


export const policyData2:PolicyDetails = [
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

export const CoverageCardInfo: CardData[] = [
  {
    id:1,
    name:"Premium",
    value:'105.21'
  },
  {
    id:2,
    name:"Insured",
    value:"MAHENDRANATHAN VAHEESAN"
  },
  {
    id:3,
    name:"Prim Benefit",
    value:'VASUKI VAHEESHAN - 100%'
  },
  {
    id:4,
    name:"Expiry Date",
    value:'Sep 30, 2088'
  }
]

export const CommentsData:Comment[] = [
  {
    id:1,
    isActive:true,
    text:'Premium payment a grace period'
  },
  {
    id:2,
    isActive:false,
    text:'Premium payment a grace period'
  },
  {
    id:3,
    isActive:true,
    text:'Premium payment a grace period'
  }
]

export const SummaryData:Summary[] = [
  {
    id:1,
    text:'Premium payment a grace period'
  },
  {
    id:2,
    text:'Premium payment a grace period'
  },
  {
    id:3,
    text:'Premium payment a grace period'
  }
]

// Final Card Data type for coverage cards
export const CoverageCardData: CoverageCard = {
  heading:{
    title:"Genisis 5 Universal Life",
    amount:100
  },
  info:CoverageCardInfo,
  comments:CommentsData,
  Summary:SummaryData
}


