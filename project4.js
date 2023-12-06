// const reviews = [
//     {
//     id:1,
//     name:"susan smith",
//     job:"web developer",
//     Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.westend61.de%2Fen%2FimageView%2FRBF001645%2Fportrait-of-smiling-man&psig=AOvVaw3dPM41y00GyfY6_4BBgBJ8&ust=1698402000291000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqGAoTCNDXldG-k4IDFQAAAAAdAAAAABCzAQ",
//     text: "To offer a writer's personal opinion of the qualities of the book, film or other type of text."
//  },
//  {
//     id:2,
//     name:"anna jonshn",
//     job:"web designer",
//     Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.westend61.de%2Fen%2FimageView%2FRBF001645%2Fportrait-of-smiling-man&psig=AOvVaw3dPM41y00GyfY6_4BBgBJ8&ust=1698402000291000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqGAoTCNDXldG-k4IDFQAAAAAdAAAAABCzAQ",
//     text: "To offer a writer's personal opinion of the qualities of the book, film or other type of text."
//  },
//  {
//     id:3,
//     name:"bhawani shankar",
//     job:"data base operator",
//     Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.westend61.de%2Fen%2FimageView%2FRBF001645%2Fportrait-of-smiling-man&psig=AOvVaw3dPM41y00GyfY6_4BBgBJ8&ust=1698402000291000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqGAoTCNDXldG-k4IDFQAAAAAdAAAAABCzAQ",
//     text: "To offer a writer's personal opinion of the qualities of the book, film or other type of text."
//  },
//  {
//     id:4,
//     name:"kishan",
//     job:"charted accountant",
//     Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.westend61.de%2Fen%2FimageView%2FRBF001645%2Fportrait-of-smiling-man&psig=AOvVaw3dPM41y00GyfY6_4BBgBJ8&ust=1698402000291000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqGAoTCNDXldG-k4IDFQAAAAAdAAAAABCzAQ",
//     text: "To offer a writer's personal opinion of the qualities of the book, film or other type of text."
//  },
// ]
let currentItem = 0;

const Img = document.getElementById('person-img');
const boxe = document.querySelectorAll('boxes');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const btnfirst = document.getElementById('gonext');
const btnsecond = document.getElementById('goprevious');

boxe.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goprev = () => {
  currentItem++;
  nextreview();
};

const gonext = () => {
  currentItem--;
  nextreview();
};

const nextreview = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentItem * 100}%)`;
  });
};
