import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import { SideBarSection } from "@/types/sidebar";
import { ReactNode } from "react";

const navItems: SideBarSection[] = 
[
  {
    id:1,
    name: 'GENERAL',
    items: [
      {
        id:1,
        icon:'fa-solid fa-bars',
        title:'Dashboard',
        href:'/'
      },
      {
        id:2,
        icon:'fa-solid fa-users',
        title:'Client',
        href:'/'
      },
      {
        id:3,
        icon:'fa-solid fa-shield-halved',
        title:'Policies',
        href:'/'
      },
      {
        id:4,
        icon:'fa-regular fa-clipboard',
        title:'Coverage',
        href:'/'
      },
    ],
  },
  {
    id:2,
    name:'OTHER',
    items:[
      {
        id:1,
        icon:'fa-solid fa-magnifying-glass-arrow-right',
        title:'Products',
        href:'/products'
      },
      {
        id:2,
        icon:'fa-solid fa-folder-tree',
        title:'Coverage Type',
        href:'/Coverage'
      },
      {
        id:3,
        icon:'fa-solid fa-gear',
        title:'Settings',
        href:'/settings'
      }

    ]
  }
]

export default function WebLayout({children}:{children:ReactNode}){
  return(
    <div>
      <Header/>
      <div className="flex h-screen">
          {/* <!-- Sidebar --> */}
          <SideBar navItems={navItems}/>
          {/* <!-- Main Content --> */}
          <div className="flex-1 flex flex-col">
              {/* <!-- Page Content --> */}
              <main className="flex-1 p-6">
                  {children}
              </main>
          </div>
      </div>
    </div>
      
  )
}
