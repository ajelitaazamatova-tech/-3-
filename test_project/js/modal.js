const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal_close');

const modalOpen = (() =>{
    modal.style.display = 'block';
});

const modalClose = (() =>{
    modal.style.display ='none';
});
modalCloseBtn.onclick = ()=>{
    modalClose();
};

modal.onclick = (event) =>{
    (event.target === modal) ? modalClose() :false;
};
//hw3 part 2
const scroll = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        modalOpen();
        window.removeEventListener('scroll', scroll);
    }
};
window.addEventListener('scroll', scroll);

//part3
const modalTimer = setTimeout(() => {
    modalOpen();
},10000);
