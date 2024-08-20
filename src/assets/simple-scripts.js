let clickEventListener = null;

const TO_ADDRESS = 'giervansabalbero@gmail.com';
const INITIAL_SUBJECT = 'JOB OFFER';

function sendEmail() {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${TO_ADDRESS}&su=${INITIAL_SUBJECT}`;
    window.open(url, '_blank');
}

function openNav() {

    document.getElementById("container-1").style.display = "block";
    console.log('openNav');

    if (clickEventListener) {
        document.removeEventListener('click', clickEventListener);
    }

    clickEventListener = function (event) {
        if (!event.target.closest('#container-1') && !event.target.closest('.minimize-button')) {
            closeNav();
        }
    };

    setTimeout(function () {
        document.addEventListener('click', clickEventListener);
    }, 100);
}

function openNav1() {
    document.getElementById("container-1").style.display = "block";
}

function closeNav() {
    document.getElementById("container-1").style.display = "none";
    console.log('closeNav');

    if (clickEventListener) {
        document.removeEventListener('click', clickEventListener);
        clickEventListener = null;
    }
}

window.addEventListener('resize', closeNav);