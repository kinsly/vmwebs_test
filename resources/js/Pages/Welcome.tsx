import ProfileCard from "@/Components/ProfileCard";
import WebLayout from "@/Layouts/WebLayout";
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

export default function Welcome()
{
  return ( 
    <WebLayout>
      <ProfileCard profileData={ProfileCardData}/>
    </WebLayout>
    )
}