export interface CoverageCard{
  heading:{
    title:string;
    amount:number;
  }
  info:CardData[],
  comments:Comment[],
  Summary:Summary[]
}

export interface Comment{
  id:number;
  text:string;
  isActive:boolean;
}

export interface Summary{
  id:number;
  text:string;
}

export interface CardData {
  id:number;
  name:string;
  value?:string;
}