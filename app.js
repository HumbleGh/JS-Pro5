// Creating Array for the menu

const menu = [
    {
        id: 1,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-1.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 2,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-2.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 3,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-3.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 4,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-4.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 5,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-5.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 6,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-6.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 7,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-7.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 8,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-8.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 9,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-9.jpeg",
        desc: `Something about the product goes here`
    },
    {
        id: 10,
        title: "title goes here",
        categort: "categories",
        price: 232,
        img: "./images/item-10.jpeg",
        desc: `Something about the product goes here`
    },
];


// Getting Elements 
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Dsiplay all items 
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

// defining the display function
function displayMenuItems(menu) {
    let displayMenu = menuItems.map(function (item) {

        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    });

    displayMenu = displayMenu.join("")

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons ( ) {
    const categories = menu.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["all"]
      );
      const categoryBtns = categories
        .map(function (category) {
          return `<button type="button" class="filter-btn" data-id=${category}>
              ${category}
            </button>`;
        })
        .join("");
    
      btnContainer.innerHTML = categoryBtns;
      const filterBtns = btnContainer.querySelectorAll(".filter-btn");
      console.log(filterBtns);
    
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          // console.log(e.currentTarget.dataset);
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
              return menuItem;
            }
        });
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }