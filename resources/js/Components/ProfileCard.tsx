import { ProfileCardDetails } from "@/types/profileCardData"

export default function ProfileCard({profileData}: {profileData:ProfileCardDetails})
{
  return (
    <div>
      <div className="relative h-16 bg-blue-500 rounded-lg flex items-center justify-center">
        <div className="absolute -bottom-3 w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-lg shadow-lg">
            <i className="fa-solid fa-user text-2xl text-gray-800"></i>
        </div>
      </div>
      

      <div className="bg-white p-6 text-center shadow-md rounded-b-lg">
        {/* Name */}
        <h2 className="text-lg font-bold text-blue-800">{profileData.name}</h2>
        
        {/* Contacts */}
        <div className="flex justify-center gap-2 mt-2">
            <a href={"tel:"+profileData.tel} className="bg-blue-500 text-white px-4 py-1 rounded text-sm">{profileData.tel}</a>
            <a href={"mailto:"+profileData.email} className="bg-blue-500 text-white px-4 py-1 rounded text-sm">{profileData.email}</a>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-7 gap-2 mt-6 max-w-96 justify-center">
              {
                profileData.actions.map(items => {
                  return (
                    <div key={items.id}>
                      <div className="flex flex-col items-center bg-green-500 text-white p-1 rounded-lg max-w-10">
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
    </div>

  )
}