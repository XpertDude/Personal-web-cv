const menuBtn = document.querySelector('.btn');
const menuDialog = document.getElementById('ul-menu');
const list = document.querySelector('.hidden');
console.log(menuDialog);

menuBtn.addEventListener('click', (event) => {
    console.log('clicked');
    menuDialog.showModal();
    document.body.style.filter = 'blur(5px)';
    event.stopPropagation();
});

document.body.addEventListener('click', (event) => {
    menuDialog.close();
    document.body.style.filter = 'none'; 
    event.stopPropagation()
});

list.addEventListener('click', (event) => {
    event.stopPropagation();
})