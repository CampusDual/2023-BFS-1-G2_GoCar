export class CurrentDay {
    public currentDay(){
        
        const today = new Date();
        const year = today.getFullYear();
        let month: string | number = today.getMonth() + 1;
        let day: string | number = today.getDate();
    
        // Add a leading zero if the month or day is less than 10
        if (month < 10) {
          month = '0' + month;
        }
        if (day < 10) {
          day = '0' + day;
        }
    
        return `${day}-${month}-${year}`;
        }
}