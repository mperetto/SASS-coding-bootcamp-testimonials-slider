const btnPrev = document.querySelector('.previus');
const btnNext = document.querySelector('.next');
var current = 0;

const slide = (n, list) => {
    current = Math.abs((current + n)%list.length);
    console.log(current);
    const desc = document.querySelector('.slide-container__desc');
    const info = document.querySelector('.slide-container__info');
    const img = document.querySelector('.slide-container__image');
    const name = info.querySelector(':scope .name');
    const role = info.querySelector(':scope .role');
    desc.innerHTML = list[current].content;
    name.innerHTML = list[current].name;
    role.innerHTML = list[current].role;
    img.src = list[current].url_image;
}

let slides = [
    {
        url_image: './images/image-tanya.jpg',
        content: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        name: 'Tanya Sinclair',
        role: 'UX Engineer'
    },
    {
        url_image: './images/image-john.jpg',
        content: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer'
    }
];

slide(0, slides)

btnPrev.addEventListener('click', () => {
    slide(-1, slides)
});
btnNext.addEventListener('click', () => {
    slide(1, slides)
});