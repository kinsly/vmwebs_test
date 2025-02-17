import { SideBarSection } from "@/types/sidebar"

export default function SideBar({navItems}:{navItems:SideBarSection[]})
{
  return (
    <aside className="w-64 bg-blue-950 text-white p-5 pl-2">

      {
        navItems.map( section => {
          return (
            <span key={section.id}>
              <h2 className="text-sm font-semibold mb-2 mt-5">{section.name}</h2>
              <hr className="mb-5 mt-0"/>
              <nav>
                <ul>
                {
                  section.items.map(items => {
                    return (
                      <li className="mb-1" key={items.id}>
                        <a href="#" className="flex items-center py-1 px-2 rounded hover:bg-gray-700">
                        <i className={items.icon+" mr-5"} ></i>
                          {items.title}
                        </a>
                      </li>)
                  })
                }
                </ul>
              </nav>
            </span>
          )
        })
      }
    </aside>
  )
}