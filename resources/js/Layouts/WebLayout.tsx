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
        icon:'',
        title:'Dashboard',
        href:'/'
      },
      {
        id:2,
        icon:'',
        title:'Policies',
        href:'/'
      },
      {
        id:3,
        icon:'',
        title:'Coverage',
        href:'/'
      }
    ],
  },
  {
    id:2,
    name:'OTHER',
    items:[
      {
        id:1,
        icon:'',
        title:'Products',
        href:'/products'
      },
      {
        id:2,
        icon:'',
        title:'Coverage Type',
        href:'/products'
      },
      {
        id:3,
        icon:'',
        title:'Settings',
        href:'/products'
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
