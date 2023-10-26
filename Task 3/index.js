function enableAlarm (time) {

    const timeFormat = time.split(":");

    if (timeFormat.length !== 3) {
        console.log("Error 404");
        return;
    }

    const [hours, minutes, seconds] = timeFormat;

    if (
        isNaN(hours) || hours < 0 || hours > 23 ||
        isNaN(minutes) || minutes < 0 || minutes > 59 ||
        isNaN(seconds) || seconds < 0 || seconds > 59
    ) {
        console.log("Error 404.");
        return;
    }

    const timeNow = new Date();
    const timeAlarm = new Date();

    timeAlarm.setHours(hours);
    timeAlarm.setMinutes(minutes);
    timeAlarm.setSeconds(seconds);

    if (timeAlarm <= timeNow) {
        console.log("Time for alarm passed.");
        return;
    }

    const differenceOfTime = (timeAlarm - timeNow) / 1000;

    setTimeout(() => {
        console.log("ALARM!!! WAKE UP!!!");
    }, differenceOfTime * 1000);

}

enableAlarm("00:17:50");