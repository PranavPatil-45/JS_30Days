

const basket =[];


const itemCart = document.getElementById('itemCart');
const prdBTN =document.querySelectorAll('#items .btn');


prdBTN.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const name = btn.dataset.name;
        const price = btn.dataset.price;

        const product ={name,price};
        basket.push(product);

        displayCart();
    })
})


function displayCart() {

    itemCart.innerHTML='';
    
    basket.forEach((product, index) => {

        itemCart.innerHTML+=`
        <div class="itemCart">
        ${product.name}-$${product.price}
        <button class ="btn" onclick="removeItem(${index})">removeProduct</button>
        </div>
        `;
    });
}

function removeItem(index){
    basket.splice(index, 1);
    displayCart();
}