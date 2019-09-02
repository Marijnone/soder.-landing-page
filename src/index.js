

const canvasTag = document.querySelector("canvas");
console.log(canvasTag);

canvasTag.width = window.innerWidth * 2;
canvasTag.height = window.innerHeight * 2;

canvasTag.style.width = window.innerWidth + "px";
canvasTag.style.height = window.innerHeight + "px";

const context = canvasTag.getContext("2d");
// context.font = "200px system-ui";
// context.fillText("soder.", window.innerHeight / 2, window.innerWidth / 2);
context.scale(2, 2);

let aimX = null; //emtpy cursor
let aimY = null;
let currentX = null;
let currentY = null;

let i = 0;

const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg"
].map(src => {
  const image = document.createElement("img");
  image.src = src;
  return image;
});

const image = document.createElement("img");
image.src = "./images/image1.jpg";
image.src = "./images/image1.jpg";
// console.log(images);

document.addEventListener("mousemove", function(event) {
  aimX = event.pageX;
  aimY = event.pageY;
  if (currentX === null) {
    currentX = event.pageX;
    currentY = event.pageY;
  }
  //   if (images[i].complete) {
  //     context.drawImage(images[i], event.pageX, event.pageY, 600, 400);
  //   }
  // });
});
canvasTag.addEventListener("click", function() {
  console.log(images.length);
  console.log(i);
  //reset the images array 
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
});

const draw = function() {
  if (currentX) {
    if (images[i].complete) {
      context.drawImage(images[i], currentX - 100, currentY - 300, 600, 400);
    }
    currentX = currentX + (aimX - currentX) * 0.5;
    currentY = currentY + (aimY - currentY) * 0.5;
  }

  requestAnimationFrame(draw);
};

draw();
