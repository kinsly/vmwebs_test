import { ProfileCardDetails } from "@/types/ProfileCard";

export default function ProfileCard({profileData}: {profileData:ProfileCardDetails})
{
  return (
    <div>
      <div className="relative h-16 bg-blue-500 rounded-lg flex items-center justify-center">
        {/* <!-- Yellow box with user icon --> */}
        <div className="absolute -bottom-3 w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-lg shadow-lg">
            <i className="fa-solid fa-user text-2xl text-gray-800"></i>
        </div>
      </div>
      

      <div className="bg-white p-6 text-center shadow-md rounded-b-lg">
        {/* Name */}
        <h2 className="text-lg font-bold text-blue-800">Mahendranathan Vaheesan</h2>
        
        {/* Contacts */}
        <div className="flex justify-center gap-2 mt-2">
            <a href="tel:4168903680" className="bg-blue-500 text-white px-4 py-1 rounded text-sm">416 890 3680</a>
            <a href="mailto:mahen.vahee@gmail.com" className="bg-blue-500 text-white px-4 py-1 rounded text-sm">mahen.vahee@gmail.com</a>
        </div>


        <div className="grid grid-cols-7 gap-3 mt-6">
            {
              profileData.actions.map(items => {
                return (
                  <div key={items.id}>
                    <div className="flex flex-col items-center bg-green-500 text-white p-1 rounded-lg">
                      <i className={items.icon +" text-3xl"}></i>
                    </div>
                    <span className="text-xs mt-1">{items.title}</span>
                  </div>
                )
              })
            }
            
            
        </div>
    </div>
    </div>

  )
}