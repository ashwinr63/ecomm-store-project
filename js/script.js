// adding the nav toggle when using the click option
function Menu(){
    document.querySelector(`.navigation`).classList.toggle(`active`);
    // document.querySelector(`.nav-toggle`).classList.toggle(`active`);
    }
    document.querySelector(`.nav-toggle`).addEventListener(`click`, Menu);

// ==== List of Product added into the array ===== 

const ProdArr = [
    {
        prod_name: 'Prod1',
        prod_img: 'Honda_Civic_1.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: '[50k, 20k]',
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod2',
        prod_img: 'Mazda_CX-30.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: '[50k, 20k]',
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod3',
        prod_img: 'Toyota Camry.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: '[50k, 20k]',
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod4',
        prod_img: 'toyota-corolla.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: '[50k, 20k]',
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod5',
        prod_img: 'Toyota_Rav4.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: '[50k, 20k]',
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod6',
        prod_img: 'Toyota_Acura_1.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: '[50k, 20k]',
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    }
]

// selecting the elements of prouducts 

const prod_table = document.querySelector(`.results`);
let theProdArr = ProdArr;
let prod_arr = [];

// creating a single template for all the products

const prodTable = function(prod_array) {
    prod_table.innerHTML = ``
    prod_array.array.forEach(prod => {
        
        //creating article for each element
        const art_item = document.createElement(`article`);
        const art_type = prod.prod_type;
        const art_col = prod.prod_color;
        const art_rate = prod.prod_rate;

        //filtering out types 
        let a_type = [];
        art_type.forEach((typ) => {
            a_type += `<li><label><input type="radio" name="type" value="d"> ${typ}</label></li>`;
        });

        //color values

        let a_color = [];
        art_col.forEach((col)=>{
            a_color = `<li><label><input type="radio" name="colour" value="r"> ${col}</label></li>`;
        });

        let a_rate = []
        for (let i =0 ; i < 5; i++) {
            if(art_rate > x) {
                a_rate +=`<span class="fas fa-star"></span>`;            }
        } else {
            a_rate += `<span class="fas fa-star-half"></span>`;
        }
    
    });

    //Addition of product to class list
    
}