// adding the nav toggle when using the click option
// document.getElementById("button").onclick = function(){
// display: flex, display: none;
//}
document.querySelector('.nav-toggle-container').addEventListener('click', openMenu);

function openMenu() {
    document.querySelector('.menu').classList.toggle('active');
    
}


// ==== List of Product added into the array ===== 

const ProdArr = [
    {
        prod_name: 'Prod1',
        prod_img: 'Honda_Civic_1.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 20,
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod2',
        prod_img: 'Mazda_CX-30.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 21,
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod3',
        prod_img: 'Toyota Camry.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 22,
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod4',
        prod_img: 'toyota-corolla.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 23,
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod5',
        prod_img: 'Toyota_Rav4.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 20,
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod6',
        prod_img: 'Toyota_Acura_1.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 29,
        prod_rate: 4,
        prod_type: ['Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    }
];

// selecting the elements of prouducts 

const prod_table = document.querySelector(`.results`);


// creating a single template for all the products
const prodTable = function(prodarray) {
    prod_table.innerHTML = ``;
    prodarray.forEach((prod) => {
        
        //creating article for each element
        const art_item = document.createElement(`article`);
        art_item.classList.add('product');
        const art_type = prod.prod_type;
        const art_col = prod.prod_color;
        const art_rate = prod.prod_rate;


    //Addition of product to class list
    let a_type = [];
        art_type.forEach((typ) => {
            a_type = `<li><label><input type="radio" name="type" value="d"> ${typ}</label></li>`;
        });

        //color values
        let a_color = [];
        art_col.forEach((col)=>{
            a_color = `<li><label><input type="radio" name="colour" value="r"> ${col}</label></li>`;
        });
        //ratings
        let a_rate = [];
        for (let i =0 ; i < 5; i++) {
            if(art_rate > i) {
                a_rate +=`<span class="fas fa-star"></span>`;
        } else {
            a_rate += `<span class="fas fa-star-half"></span>`;
        }
    
    }
    // art_item.classList.add(`.product`);

    art_item.innerHTML = `
    <header>
    <img src="img/${prod.prod_img}" alt="Product Image">
    <h3><a href="./product.html"></a>${prod.prod_name}</h3>
    <data value="${prod.prod_price}"><del>22</del> <ins>${prod.prod_price}</ins></data>
    <p>${prod.prod_desc}.<a href="./product.html">see more</a></p>
    <dl>
      <dt>Rating</dt>
      <dd>4.4 ${a_rate}</dd>
    </dl> 
  </header>
  <form class="filter-set">
    <fieldset>
      <legend>Colours</legend>
      <ul>
      ${a_col}
      </ul>
    </fieldset>
    <fieldset>
      <legend>Types</legend>
      <ol>
       ${a_typ}
      </ol>
    </fieldset>
  </form>
  <footer>
    <button type="button"><span class="fa fas fa-shopping-cart"></span> Add to Cart</button>
    <button type="button"><span class="fas fa-heart"></span></button>
  </footer>
    `;

    //adding article to the result
    prod_table.appendChild(art_item);

    //filter by c
});
};

const sortBy = document.querySelector('#sort');


sortBy.addEventListener('click', function(event) {
  
  const hightolow = (ProdArr = []) => {
    const sortByPrice = (x,y) => {
      // let p = ProdArr.;
      // console.log(y.prod_price , x.prod_price);
      return y.prod_price - x.prod_price;
    };

    ProdArr.sort(sortByPrice);
    // console.log(ProdArr);
    prodTable(ProdArr);

  };

  if (sortBy.selectedIndex == 0) {
    hightolow(ProdArr);
  }
});


// const prodTable = function(prod_array) {
    
// };
 prodTable(ProdArr);