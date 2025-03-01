export function formatTime(ms: number = -1) {
    let date = new Date();

    if(ms !== -1) {
       date = new Date(ms);
    }
    
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const year = date.getFullYear()
    const month = date.getMonth();
    
    const MONTHS = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];

    function now() {
        return `${day} ${MONTHS[month]} ${year} ${hour.toString().padEnd(2, "0")}:${minutes.toString().padEnd(2, "0")}`        
    }

    return {
        hour,
        minutes,
        date,
        year,
        month,
        now,
    };
}