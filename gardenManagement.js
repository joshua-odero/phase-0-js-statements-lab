const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;


if(temperature > 80){
    //Do something if temperature is above 80.
    console.log("Watering on");

}else{
    //Do something if the temperature is equal to or below 80.
    console.log("Watering off");

}

if(timeOfDay === "evening" || timeOfDay === "night"){
    //Do something if the time of the day is 'evening' or 'night'
    console.log("Lights on");

}else{
    //Do something if the time of the day is neither 'evening' nor 'night'
    console.log("Lights off");

}

while(soilMoisture <= 40){//conditional loop to do something on condition that the soil moisture is less than or equal to 40

    console.log("The soil moisture is:" + soilMoisture);//console.log() prints the soil moisture
    soilMoisture = soilMoisture + 5;//update the soil moisture by incrementing it by 5

}
