export function getFormetedDate() {
  let date = new Date();
  let month = parseInt(date.getMonth(),10);
  month+=1;
  return (date.getFullYear()+'-'+ month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
}
