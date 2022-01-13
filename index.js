const dailyTime =['5hrs', '1hr', '0hr', '1hr', '1hr', '0hr'];
const dailyPreviousTime = ['7hrs', '2hrs', '1hr', '1hr', '3hrs', '1hr']
const weeklyTime =['30hrs', '10hrs', '4hrs', '4hrs', '5hrs', '2hrs'];
const weeklyPreviousTime = ['36hrs', '8hrs', '7hrs', '5hrs', '10hrs', '2hrs'];
const monthlyTime =['103hrs', '23hrs', '13hrs', '11hrs', '21hrs', '7hrs'];
const monthlyPreviousTime = ['128hrs', '29hrs', '19hrs', '18hrs','23hrs', '11hrs'];


const x = document.querySelectorAll('.time');
const y = document.querySelectorAll('.previousWords');
const z = document.querySelectorAll('.previousTime');


const callDailyTime= () => {

    for(i=0; i<6; i++){
        x[i].innerHTML = dailyTime[i]
    }
    
    for(i=0; i<6; i++){
        y[i].innerHTML = 'Yesterday'
    }

    for(i=0; i<6; i++){
        z[i].innerHTML = dailyPreviousTime[i]
    }
}


const callWeeklyTime = () =>{
     
    for(i=0; i<6; i++){
        x[i].innerHTML = weeklyTime[i]
    }
    
    for(i=0; i<6; i++){
        y[i].innerHTML = 'Last week'
    }

    for(i=0; i<6; i++){
        z[i].innerHTML = weeklyPreviousTime[i]
    }
            
}

const callMonthlyTime = () =>{

    for(i=0; i<6; i++){
        x[i].innerHTML = monthlyTime[i]
    }
    
    for(i=0; i<6; i++){
        y[i].innerHTML = 'Last month'
    }

    for(i=0; i<6; i++){
        z[i].innerHTML = monthlyPreviousTime[i]
    }
}






