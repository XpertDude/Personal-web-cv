const menuBtn = document.querySelector('.btn');
const menuDialog = document.getElementById('ul-menu');
const list = document.querySelector('.hidden');
console.log(menuDialog);

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
