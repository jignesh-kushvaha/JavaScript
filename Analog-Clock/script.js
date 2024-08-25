hr = document.getElementById('hour');
min = document.getElementById('minute');
sec = document.getElementById('second');

dtime = document.getElementById('time');

setInterval(()=>{
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotations = 30*hh + mm/2;
    let mRotations = 6*mm;
    let sRotations = 6*ss;

    hr.style.transform = `rotate(${hRotations}deg)`;
    min.style.transform = `rotate(${mRotations}deg)`;
    sec.style.transform = `rotate(${sRotations}deg)`;

    dtime.innerHTML = `${date.toLocaleTimeString()}`;
    
},1000);