window.onload = () => {

    var endTime = new Date();
    var endTime = (Date.parse(endTime)) / 1000 + 20;

    function pad2(number) {

        return (number < 10 ? '0' : '') + number

    }

    function makeTimer(endTime) {

        var now = new Date();
        var now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        if (timeLeft == 0) {
            window.clearInterval(timerId)
        };

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0";
        }
        if (minutes < "10") {
            minutes = "0";
        }
        if (seconds < "10") {
            seconds = "0";
        }

        document.getElementById('hours').innerHTML = "<span></span>" + pad2(hours);
        document.getElementById('minutes').innerHTML = "<span></span>" + pad2(minutes);
        document.getElementById('seconds').innerHTML = "<span></span>" + pad2(seconds);
    }

    // Create the HTML element
    document.getElementById('countdown-timer').innerHTML = '<span id="hours"></span>:<span id="minutes"></span>:<span id="seconds"></span>'

    var timerId = setInterval(() => {
        makeTimer(endTime);
    }, 1000);

}
