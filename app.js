const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Campus",
    price: 1999,
    colors: [
      {
        code: "white",
        img: "./img/campus.png",
      },
      {
        code: "darkblue",
        img: "./img/campus2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Adidas",
    price: 1149,
    colors: [
      {
        code: "lightgray",
        img: "./img/adidas.png",
      },
      {
        code: "green",
        img: "./img/adidas2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Bata",
    price: 2100,
    colors: [
      {
        code: "brown",
        img: "./img/bata.png",
      },
      {
        code: "black",
        img: "./img/bata2.png",
      },
    ],
  },
  {
    id: 4,
    title: "nike",
    price: 2999,
    
    colors: [
      {
        code: "white",
        img: "./img/nike.png",
      },
       {
        code: "green",
        img: "./img/nike2.png",

       },
    ],
  },
  {
    id: 5,
    title: "Sparx",
    price: 999,
    colors: [
      {
        code: "white",
        img: "./img/sparx.png",
      },
      {
        code: "red",
        img: "./img/sparx2.png" ,
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
   
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});




