//hw3
//tab slider
const tabContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const parentBlock = document.querySelector('.tab_contents_block');

let currentIndex = 0;
let slideInterval;

const hideTabsContent = () => {
    tabContent.forEach((content) =>{
        content.style.display= 'none';
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    });
}
const showTabContent = (i=0) =>{
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');
    currentIndex=i;
}
hideTabsContent();
showTabContent(0);

const nextSlide = ()=>{
    currentIndex++;
    if (currentIndex>=tabs.length){
        currentIndex=0;
    }
    hideTabsContent();
    showTabContent(currentIndex);
}
slideInterval = setInterval(nextSlide, 3000);

parentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,i) => {
            if (event.target === tab) {
                hideTabsContent();
                showTabContent(i);
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 3000)
            }
        });
    }
}