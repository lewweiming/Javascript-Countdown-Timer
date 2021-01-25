window.onload = () => {

    function makeTimer() {

        var endTime = new Date("September 01, 2011 00:00:00");
        var endTime = (Date.parse(endTime)) / 1000;

        var now = new Date();
        var now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        document.getElementById('days').innerHTML = "<span>Days</span>" + days document.getElementById('hours').innerHTML = "<span>Hours</span>" + hours document.getElementById('minutes').innerHTML = "<span>Minutes</span>" + minutes document.getElementById('seconds').innerHTML = "<span>Seconds</span>" + seconds
    }
    setInterval(() => {
        makeTimer();
    }, 1000);

}


// HTML output with this method
// <div id="timer">
//     <ul>
//           <li id="days">...</li>
//           <li id="hours">...</li>
//           <li id="minutes">...</li>
//           <li id="seconds">...</li>
//     </ul>
// </div>
