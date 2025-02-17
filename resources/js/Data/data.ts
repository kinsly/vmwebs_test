
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


// Coverage card one
export const CoverageCardInfo1: CardData[] = [
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

export const CommentsData1:Comment[] = [
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
    isActive:false,
    text:'Premium payment a grace period'
  }
]


// Final Card Data type for coverage cards
export const CoverageCardData1: CoverageCard = {
  heading:{
    title:"Genisis 5 Universal Life",
    amount:100
  },
  info:CoverageCardInfo1,
  comments:CommentsData1,
}

// Coverage card two
export const CoverageCardInfo2: CardData[] = [
  {
    id:1,
    name:"Insured",
    value:'MAHENDRANATHAN VAHEESAN'
  },
  {
    id:2,
    name:"Prim Benefit",
    value:'VASUKI VAHEESHAN - 100%'
  },
  {
    id:3,
    name:"Expiry Date",
    value:'Sep 30, 2058'
  },
  {
    id:4,
    name:"Expiry Date",
    value:'Sep 30, 2030'
  }
]

export const CommentsData2:Comment[] = [
  {
    id:1,
    isActive:true,
    text:'Premium payment a grace period'
  },
  {
    id:2,
    isActive:false,
    text:'Premium payment a grace period'
  }
]


// Final Card Data type for coverage cards
export const CoverageCardData2: CoverageCard = {
  heading:{
    title:"UL - T20R RENEW.& CONVERT (002-001)",
    amount:100
  },
  info:CoverageCardInfo2,
  comments:CommentsData2,
}


// Coverage card Three
export const CoverageCardInfo3: CardData[] = [
  {
    id:2,
    name:"Premium",
    value:'$ 108.81'
  },
  {
    id:1,
    name:"Insured",
    value:'MAHENDRANATHAN VAHEESAN'
  },
  {
    id:2,
    name:"Prim Benefit",
    value:'VASUKI VAHEESHAN - 100%'
  },
  {
    id:3,
    name:"Expiry Date",
    value:'Sep 30, 2058'
  },
]

export const CommentsData3:Comment[] = [
  {
    id:1,
    isActive:true,
    text:'Premium payment a grace period'
  },
  {
    id:2,
    isActive:false,
    text:'Premium payment a grace period'
  }
]


// Final Card Data type for coverage cards
export const CoverageCardData3: CoverageCard = {
  heading:{
    title:"15-YEAR OPTION (004-001)",
    amount:100
  },
  info:CoverageCardInfo3,
  comments:CommentsData3,
}

// Coverage card Four
export const CoverageCardInfo4: CardData[] = [
  {
    id:2,
    name:"Premium",
    value:'$ 108.81'
  },
  {
    id:1,
    name:"Insured",
    value:'MAHENDRANATHAN VAHEESAN'
  },
  {
    id:2,
    name:"Prim Benefit",
    value:'VASUKI VAHEESHAN - 100%'
  },
  {
    id:3,
    name:"Expiry Date",
    value:'Sep 30, 2058'
  },
]

export const CommentsData4:Comment[] = [
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
    id:2,
    isActive:true,
    text:'Premium payment a grace period'
  }
]

const Summary4 :Summary[] = [
  {
    id:1,
    text:"Insurance policy terms include policy term"
  },
  {
    id:2,
    text:"Insurance policy terms include policy term"
  }
]

// Final Card Data type for coverage cards
export const CoverageCardData4: CoverageCard = {
  heading:{
    title:"Genesis 5 - UNIVERSAL LIFE (001- 001)",
    amount:100
  },
  info:CoverageCardInfo4,
  comments:CommentsData4,
  summary:Summary4
}

export const allCoverageCards:CoverageCard[] = [
  CoverageCardData1,CoverageCardData2,CoverageCardData3, CoverageCardData4
]