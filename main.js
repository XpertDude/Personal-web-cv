const menuBtn = document.querySelector('.btn');
const menuDialog = document.getElementById('ul-menu');
const list = document.querySelector('.hidden');

const effectDialog = (eff) => {
    eff.style.opacity = '1';
    eff.style.transform = 'scaleX(1)';
    document.body.style.filter = 'blur(4px)';
}
const resetDialog = (eff) => {
    eff.style.opacity = '0';
    eff.style.transform = 'scaleX(0)';
    document.body.style.filter = 'none';
};
menuBtn.addEventListener('click', (event) => {
    menuDialog.showModal();
    effectDialog(menuDialog)
    event.stopPropagation();
});

document.body.addEventListener('click', (event) => {
    menuDialog.close();
    resetDialog(menuDialog)
    event.stopPropagation()
});

list.addEventListener('click', (event) => {
    event.stopPropagation();
})

// email sending
const messageDialog = document.getElementById('notification');
const message = document.getElementById('message');
const okBtn = document.getElementById('ok-btn');
emailjs.init('9ECYgoX2aOx9R2vRp');
function effectMessageOpen(eff) {
    eff.style.opacity = '1';
    eff.style.transform = 'scale(1)';
}

function effectMessageClose(eff) {
    eff.style.opacity = '0';
    eff.style.transform = 'scale(0)';
}
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_lo0s2rg', 'template_5ksjnna', this)
        .then(function (response) {
            if (response.status === 200) {
                messageDialog.showModal();
                effectMessageOpen(messageDialog);
                message.textContent = 'The message was successfully sent';
            }
        }, function (error) {
            messageDialog.showModal();
            message.textContent = 'The message was not sent. Please try again later.';
        });
});
okBtn.addEventListener('click', () => {
    messageDialog.close();
    effectMessageClose(messageDialog);
})
