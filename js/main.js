let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300
    }
];

let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

let getProto = (arr, proto) => {
    return arr.map(product => {
        let newProduct = Object.create(proto);
        for (let key in product) {
            newProduct[key] = product[key];
        }
        console.log(newProduct);
        return newProduct;
    });
}

let arr = [
    getProto(kitchenProducts, Kitchen),
    getProto(devicesProducts, Devices),
    getProto(cosmeticsProducts, Cosmetics)
];
console.log(arr);

let renderArr = [];

arr.forEach(categoryArray => {
    let categoryArr = `<section class="category">
        <h2 class="category__heading"> Category: ${categoryArray[0].category}</h2>
        <div class="category__box">`;
    
    categoryArray.forEach(obj => {
        categoryArr += `
        <div class="category__item ${categoryArray[0].category}">
            <div class="category__image">
                <img src="images/${obj.type}.svg" alt="${obj.type}">
            </div>
            <div class="category__title">
                <p class="category__name">Name: <span>${obj.type.charAt(0).toUpperCase()+ obj.type.slice(1)}</span></p>
                <p class="category__price">Price: <span>$${Array.isArray(obj.price) ? obj.price[0] + '-' + obj.price[1] : obj.price}</span></p>
            </div>
        </div>`;
    });
    
    categoryArr += `</div></section>`;
    renderArr.push(categoryArr);
});

document.write(`<div class="wrapper">${renderArr.join('')}</div>`);