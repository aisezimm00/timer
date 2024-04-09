
// let aisezim = new Date(2008, 6, 14, 0)

// console.log(difference);





// console.log(Math.floor(difference / 1000 / 60 /60 /24));
// console.log(Math.floor(difference / 1000 / 60 ) % 60);
// console.log((date.getTime() - aisezim.getTime()) / 1000 );
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getHours());



const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

const format = (num) => {
    if (num < 10) return "0" + num;
    return num.toString();
};

const intervalId = setInterval(() => {
    let date = new Date()
    let aleksandr = new Date(2024, 3, 9, 0)
    let difference = aleksandr.getTime() - date.getTime()

    if (difference <= 0) {
        clearInterval(intervalId);
        document.body.innerHTML += "<h2>Поздравляем с днём рождения!</h2>";
        return;
    }

    day.textContent = format(Math.floor(difference / 1000 / 60 / 60 / 24))
    hour.textContent = format(Math.floor((difference / 1000 / 60 / 60) % 24))
    minute.textContent = format(Math.floor((difference / 1000 / 60) % 60))
    second.textContent = format(Math.floor((difference / 1000) % 60))
}, 1000)
