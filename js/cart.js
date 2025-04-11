let itemList =  document.querySelector('.items');
let cart = document.querySelector('.cart');
let cartList = document.querySelector('.cart-list');
let total = document.querySelector('.total');
let tax = document.querySelector('.tax');
let subtotal = document.querySelector('.subtotal');


let items = [
    {
        id: 1,
        name: 'Fade',
        image: 'https://i.pinimg.com/474x/be/97/d5/be97d542c25ee54ae223f7f55ef159c0.jpg',
        price: 200
    },
    {
        id: 2,
        name: 'Cut 1',
        image: 'https://i.pinimg.com/474x/d7/da/2c/d7da2c554d883c911f74aaf6aa52d29e.jpg',
        price: 150
    },
    {
        id: 3,
        name: 'Cut 2',
        image: 'https://i.pinimg.com/474x/50/fb/6d/50fb6d6dc30905ca8b4a028b373959b3.jpg',
        price: 230
    },
    {
        id: 4,
        name: 'Cut 3',
        image: 'https://i.pinimg.com/474x/aa/18/d1/aa18d16e92c6285a99b15ecf1486de25.jpg',
        price: 180
    },
    {
        id: 5,
        name: 'cut 4',
        image: 'https://i.pinimg.com/474x/89/5d/15/895d15a18e3f2a4bd40a03bd234d9bcd.jpg',
        price: 200
    },
    {
        id: 6,
        name: 'Cut & Dye',
        image: 'https://i.pinimg.com/474x/36/da/0c/36da0c7ce0aa61f2332c896433b8692c.jpg',
        price: 450
    },
    {
        id: 7,
        name: 'Cut & Dye',
        image: 'https://i.pinimg.com/474x/28/e5/4d/28e54da61cd8ea1280a6225f68aa272b.jpg',
        price: 450
    },
{
    id: 8,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/01/25/e1/0125e1741aacc17f2fc564733a6e623d.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/7f/8e/c0/7f8ec0f2007e936143cad2d666b24b1e.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/a9/4a/a6/a94aa6f007013f2f3766eedfd96caf3b.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/f8/e3/22/f8e32211bf51bd93dccd8043b2b1e39e.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/53/ae/4d/53ae4decbb6665b6c04cbea8f4b5ceaa.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/27/ec/36/27ec36aad9f4ac992b00d56ad81a9133.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/736x/a4/83/75/a48375181036e216386cff335a6ab245.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/90/57/b6/9057b6a33ae7ed6128b22dac5115f478.jpg',
    price: 450
},
{
    id: 9,
    name: 'Cut & Dye',
    image: 'https://i.pinimg.com/474x/aa/88/0c/aa880c93c6986328afbd4018afab4c09.jpg',
    price: 450
},
    
]

function initItem() {
    items.forEach((value, key) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'width: 15rem;');
        card.innerHTML = `
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title text-center">${value.name}</h4>
                <p class="card-text text-center">Price: ${value.price}</p>
                <button class="add-to-cart btn btn-dark form-control" onclick="addToCart(${key})">Add to Cart</button>
            </div>`;
        itemList.appendChild(card);
    });
}

initItem();

let cartLists = [];

function addToCart(key) {
    if (cartLists[key] == null) {
        cartLists[key] = JSON.parse(JSON.stringify(items[key]));
        cartLists[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    cartLists.forEach((value, key) => {
        totalPrice = totalPrice + value.price;

        if (value != null) {
            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'list-group-item');
            listItem.innerHTML = `
                <div><img src="${value.image}" style="width: 80px"/></div>
                <div><h5 class="mt-1">${value.name}</h5></div>
                <div><h6 class="mt-2">${value.price.toLocaleString()}</h6></div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count m-2">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            cartList.appendChild(listItem);
        }
    });

    // Calculate subtotal, tax, and total
    subtotal.innerText = totalPrice.toLocaleString();
    tax.innerText = (totalPrice * 0.15).toLocaleString(); // Assuming 12% tax
    total.innerText = (totalPrice + parseFloat(tax.innerText)).toLocaleString();

    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete cartLists[key];
    } else {
        cartLists[key].quantity = quantity;
        cartLists[key].price = quantity * items[key].price;
    }
    reloadCart();
}

function clearCart() {
    cartLists = [];
    reloadCart();
}