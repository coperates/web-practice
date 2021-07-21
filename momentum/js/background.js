const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; 

const bgImage = document.createElement("img");

bgImage.setAttribute('src', `img/${chosenImage}`)

document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = 'cover';