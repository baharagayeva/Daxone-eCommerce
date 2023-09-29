const hid = document.getElementById('hid-main-page');
const addToCartBtn = document.querySelectorAll('.plusBtn');
let productArray = JSON.parse(localStorage.getItem('prod')) || [];

function wishlistPageFunction() {
    addToCartBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = e.target.closest('.product-box');
            const productImg = product.querySelector('img').src;
            const productName = product.querySelector('.pro-name').textContent;
            const productPrice = product.querySelector('.product-cost').textContent;

            const productObject = { img: productImg, name: productName, price: productPrice, count: '1' };

            if (productArray.length > 0) {
                const existingItem = productArray.find(item => item.name === productName);

                if (existingItem) {
                    existingItem.count++;
                } else {
                    productArray.push(productObject);
                }
            }
            else {
                productArray.push(productObject);
            }

            localStorage.setItem('prod', JSON.stringify(productArray));

        });
    });
}

function createProductList() {
    const tbody = document.getElementsByTagName('tbody')[0];

    productArray.forEach(item => {
        let tr = document.createElement('tr');

        let tdImg = document.createElement('td');
        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdCounter = document.createElement('td');
        let tdSubTotal = document.createElement('td');
        let tdDelete = document.createElement('td');

        tdImg.className = 'table-img';
        tdName.className = 'product-name';
        tdPrice.className = 'product-price';
        tdCounter.className = 'product-counter';
        tdSubTotal.className = 'product-price';
        tdDelete.className = 'cart-button';

        let imglink = document.createElement('a');
        let img = document.createElement('img');
        img.src = item.img;
        imglink.appendChild(img);

        let name = document.createElement('a');
        name.textContent = item.name;

        let price = document.createElement('span');
        price.className = 'pro-price';
        price.textContent = item.price;

        tdCounter.innerHTML = `<div class="product-count d-flex align-items-center">
        <div class="count-down d-flex align-items-center justify-content-center">-</div>
        <div>
            <input class="plus-minus-box" type="text" value="1" disabled>
        </div>
        <div class="count-up d-flex align-items-center justify-content-center">+</div>
        </div>
        `;


        let subTotal = document.createElement('span');
        subTotal.className = 'product-subTotal';

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "DELETE";
        deleteBtn.addEventListener('click', deleteProductFromCart);

        tdImg.appendChild(imglink);
        tdName.appendChild(name);
        tdPrice.appendChild(price);
        tdSubTotal.appendChild(subTotal);
        tdDelete.appendChild(deleteBtn);

        tr.appendChild(tdImg);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdCounter);
        tr.appendChild(tdSubTotal);
        tr.appendChild(tdDelete);

        tbody.appendChild(tr);

    });
}

function counter() {
    const table = document.querySelector('table');
    const rows = table.getElementsByTagName('tbody')[0].rows;

    Array.from(rows).forEach(row => {
        const plusBtn = row.querySelector('.count-up');
        const minusBtn = row.querySelector('.count-down');

        const increase = (event) => {
            let item = event.target.parentElement;
            let input = item.querySelector('input');
            let curValue = parseInt(input.value);
            input.value = ++curValue;
        }

        const decrease = (event) => {
            let item = event.target.parentElement;
            let input = item.querySelector('input');
            let curValue = parseInt(input.value);
            input.value = --curValue;

            if (input.value < 0) {
                input.value = 0;
            }

        }

        plusBtn.addEventListener('click', increase);
        minusBtn.addEventListener('click', decrease);

    })

}

function containers() {
    const nonEmpty = document.querySelector('.non-empty-cart');
    const empty = document.querySelector('.empty-cart');
    if (productArray.length > 0) {
        nonEmpty.classList.remove('d-none');
        empty.classList.add('d-none');
    }
    else {
        nonEmpty.classList.add('d-none');
        empty.classList.remove('d-none');
    }
}

const deleteProductFromCart = (e) => {
    const tr = e.target.closest("tr");
    const productName = tr.querySelector('.product-name');

    productArray = productArray.filter(prod => prod.name !== productName.textContent);
    localStorage.setItem('prod', JSON.stringify(productArray));
    location.reload();
}

const pageLoad = () => {
    if (hid) {
        wishlistPageFunction();
    }
    else {
        createProductList();
        counter();
        containers()
    }
}

pageLoad();

