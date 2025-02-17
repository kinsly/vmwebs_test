export interface ProfileCardDetails{
  name:string;
  tel:string;
  email:string;
  actions: ProfileCardInfoActions[]
}

interface ProfileCardInfoActions{
  id:number;
  icon:string;
  title:string;
}