# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot
Desktop version:
![Desktop version](./design/screenshot-desktop.png)

Mobile version:
![Mobile version](./design/screenshot-mobile.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/testimonials-slider-with-sass-and-javascript-1hdA-MKw5)
- Live Site URL: [Live site](https://marcoperetto-testimonials-slider-challenge.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use 2 background image
```css
body {
    background-image: url('../images/pattern-bg.svg'), url('../images/pattern-curve.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: right top, left bottom;
    background-size: contain;   
}
```

Use of lambda to change page content
```js
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
```

Use of list
```js
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
```

### Useful resources

- [CSS Flex Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Author

- Frontend Mentor - [@mperetto](https://www.frontendmentor.io/profile/mperetto)
- Linkedin - [Marco Peretto](https://www.linkedin.com/in/marco-peretto/)
