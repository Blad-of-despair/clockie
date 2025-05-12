let prevHour = null;
let prevMinute = null;
let prevAMPM = null;

function addStackEffect(element) {
    element.classList.remove('stack-effect'); // Reset animation
    void element.offsetWidth;
    element.classList.add('stack-effect');
}

function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();

    // Determine AM or PM
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    let displayHour = hour % 12;
    displayHour = displayHour === 0 ? 12 : displayHour;

    // Format to always show two digits
    displayHour = displayHour < 10 ? '0' + displayHour : displayHour;
    minute = minute < 10 ? '0' + minute : minute;

    const hourElem = document.querySelector('.hour-text');
    const minuteElem = document.querySelector('.minute-text');
    const ampmElem = document.querySelector('.ampm-text');

    if (hourElem && displayHour !== prevHour) {
        hourElem.textContent = displayHour;
        addStackEffect(hourElem);
        prevHour = displayHour;
    }
    if (minuteElem && minute !== prevMinute) {
        minuteElem.textContent = minute;
        addStackEffect(minuteElem);
        prevMinute = minute;
    }
    if (ampmElem && ampm !== prevAMPM) {
        ampmElem.textContent = ampm;
        addStackEffect(ampmElem);
        prevAMPM = ampm;
    }
}

function toggleFullscreen() {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}

updateClock();
setInterval(updateClock, 1000);