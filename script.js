function Time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = update(hours);
    minutes = update(minutes);
    seconds = update(seconds);

    document.getElementById("hours").innerHTML = hours + "&nbsp;:&nbsp;";
    document.getElementById("minutes").innerHTML = minutes+ "&nbsp;:&nbsp;";
    document.getElementById("seconds").innerHTML = seconds;

     setTimeout(Time, 1000);
}

function update(time){
    if(time<10){
        time = "0" + time;
    }
    return time;
}

Time();