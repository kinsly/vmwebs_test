interface SideBarItem{
  id:number;
  icon:string;
  title:string;
  href:string;
}

export interface SideBarSection{
  id:number;
  name:string;
  items:SideBarItem[]
}