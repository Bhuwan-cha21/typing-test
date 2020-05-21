 var start = document.getElementById('started');
 var end = document.getElementById('Finished');
 function myfunction1(){
    var currentTime = new Date();
     hours = currentTime.getHours();
     minutes = currentTime.getMinutes();
     seconds = currentTime.getSeconds();
    var stime = `you started at ${hours}:${minutes}:${seconds}`;
    start.innerText = stime;
 }
 function myfunction2(){
    var ecurrentTime = new Date();
    var ehours = ecurrentTime.getHours();
    var eminutes = ecurrentTime.getMinutes();
    var eseconds = ecurrentTime.getSeconds();
    console.log(hours)
    var dhours = ehours-ehours;
    var dminutes = eminutes - minutes;
    var dsec = eseconds - seconds;
    if(dsec<0){
        dsec = dsec*(-1);
    }
    if(dminutes<0){
        dminutes = dminutes*(-1);
    }
    if(dhours<0){
        dhours = dhours*(-1);
    }
    var etime = `you started at ${ehours}:${eminutes}:${eseconds} and time you took is ${dhours}:${dminutes}:${dsec}` ;
    end.innerText = etime;
 }