function scrollDown1() {
    const currentScroll = window.scrollY;
    const middleOfPage = document.body.scrollHeight; 
    window.scrollTo({ top: 1960, scrollTo, behavior: 'smooth' });
}
function scrollDown2() {
    const currentScroll = window.scrollY; 
    const middleOfPage = document.body.scrollHeight;
    window.scrollTo({ top: 1950, scrollTo, behavior: 'smooth' });
}




const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

let currentImage = null;

function switchImage(newImage) {
    if (currentImage) {
        currentImage.style.opacity = 0;
        setTimeout(() => {
            currentImage.style.display = 'none';
            newImage.style.display = 'block';
            setTimeout(() => {
                newImage.style.opacity = 1;
            }, 10);
        }, 500);
    } else {
        newImage.style.display = 'block';
        setTimeout(() => {
            newImage.style.opacity = 1;
        }, 10);
    }
    currentImage = newImage;
}

text1.addEventListener('click', () => {
    switchImage(image1);
});

text2.addEventListener('click', () => {
    switchImage(image2);
});

text3.addEventListener('click', () => {
    switchImage(image3);
});




let okno = document.querySelector(".window");
let button = document.querySelector(".trigger-button");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
    okno.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === okno) {
        toggleModal();
    }
}

button.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
okno.addEventListener("click", windowOnClick);




burgerOpen.addEventListener("click", ()=> {
    burgerMenu.style.right="0%"
    burgerBack.style.opacity="1"
    burgerBack.style.visibility="visible"
})
burgerClose.addEventListener("click", ()=> {
    burgerMenu.style.right="100%"
    burgerBack.style.opacity="1"
    burgerBack.style.visibility="visible"
})