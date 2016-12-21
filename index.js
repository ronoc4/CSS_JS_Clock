/**
 * Created by conor on 12/20/16.
 */
function setClock() {
    const secondHand = document.querySelector('.secondHand');
    const minuteHand = document.querySelector('.minuteHand');
    const hourHand = document.querySelector('.hourHand');

    function setDate() {
        const now = new Date();

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60 ) * 360) + 90;

        const hours = now.getHours();
        const hourDegrees = ((hours / 12 ) * 360) + 90;

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;

        if (secondsDegrees == 0) {
            secondHand.style.transition = "";
        }

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);
}