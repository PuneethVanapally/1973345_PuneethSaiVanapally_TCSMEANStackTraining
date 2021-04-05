console.log("Manoj")


let itemsCount:number = 0;
const cartItems: HTMLElement | any = document.getElementById('itemsCount');
cartItems.innerHTML += itemsCount;


const details = [{name: "Shoes", quantity: 2, amount: "100", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrloeTPF3vX0PxMAzzguekY-1EBEcOhNoDw&usqp=CAU"},
    {name: "Bag", quantity: 1, amount: "50", img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-68c7db11-d1b4-4f2b-b789-b35e2e508dd3/elite-pro-basketball-backpack-dJKzSg.jpg"},
    {name: "Laptop", quantity: 1, amount: "1000", img:"data:image/jpeg;base64,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"},
    {name: "Table", quantity: 3, amount: "50", img:"data:image/jpeg;base64,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"},
    {name: "Pendrive", quantity: 2, amount: "50", img:"data:image/jpeg;base64,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"},
];
sessionStorage.setItem("details", JSON.stringify(details));
// checkDetails = details;
    

const products: any = document.getElementById('products');
const pname = document.getElementById('name');
const pamount = document.getElementById('amount');
const pquantity = document.getElementById('quantity');



for(let i=0; i<details.length; i++)
{

    const product = document.createElement('div');
    product.className = 'product';

    const image = document.createElement('img');
    image.src = details[i].img;

    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';

    const productName = document.createElement('h3');
    productName.className = 'product-name';
    productName.innerHTML = details[i].name;
    productInfo.appendChild(productName);

    const productAmount = document.createElement('p');
    productAmount.className = 'product-price';
    productAmount.innerHTML = details[i].amount;
    productInfo.appendChild(productAmount);

    const productQty = document.createElement('p');
    productQty.className = 'product-quantity';
    productQty.innerHTML = ""+details[i].quantity;
    productInfo.appendChild(productQty);

    const addButton = document.createElement('p');
    addButton.className = 'product-remove';
    addButton.innerHTML = "Add";
    addButton.onclick = function() {
        itemsCount = itemsCount + (+details[i].quantity);
        cartItems.innerHTML = ("Number of items: "+itemsCount);
        
        console.log("count", itemsCount)
    }
    productInfo.appendChild(addButton);

    product.appendChild(image);
    product.appendChild(productInfo);

    products.appendChild(product);
}














