import { addMinutes, subMinutes, format } from 'date-fns';

// Get the current date and time


function getRandomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to format date for display
export function formatDate(date:Date|number|string) {
    return format(date, "yyyy-MM-dd HH:mm:ss XXXXX");
}

// Generate new data points using date-fns




function getRandomColor() {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);
    return `rgb(${r},${g},${b})`;
}

export function getDateData(before:number,after:number){
    
    const currentDate = new Date();
    const arr :{x:Date,y:number,r:number}[] = [];
    for(let i =0;i<before;i++){
        const newDataBefore = { 
            x: subMinutes(currentDate, getRandomNumber(1, 60)), 
            y: getRandomNumber(50, 100), 
            r: getRandomNumber(5, 20)
        };
        arr.push(newDataBefore);
    }
    for(let i =0;i<after;i++){
        const newDataAfter = { 
            x: addMinutes(currentDate, getRandomNumber(1, 60)), 
            y: getRandomNumber(50, 100), 
            r: getRandomNumber(5, 20)
        };
        arr.push(newDataAfter);
    }
    return arr;
}
export function getRandomColors(length:number){
    return Array.from({length}).map(()=>getRandomColor());
}