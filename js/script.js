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
        prod_type: ['Diesel','Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod2',
        prod_img: 'Mazda_CX-30.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 21,
        prod_rate: 4,
        prod_type: ['Diesel','Gas', 'Electric'],
        prod_color:['Red', 'Black', 'Blue']
    },
    {
        prod_name: 'Prod3',
        prod_img: 'Toyota Camry.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 22,
        prod_rate: 4,
        prod_type: ['Diesel','Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    },
    {
        prod_name: 'Prod4',
        prod_img: 'toyota-corolla.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 23,
        prod_rate: 4,
        prod_type: ['Diesel','Gas', 'Electric'],
        prod_color:['White', 'Black', 'Green']
    },
    {
        prod_name: 'Prod5',
        prod_img: 'Toyota_Rav4.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 20,
        prod_rate: 4,
        prod_type: ['Diesel','Gas', 'Electric'],
        prod_color:['White', 'Black', 'Blue']
    },
    {
        prod_name: 'Prod6',
        prod_img: 'Toyota_Acura_1.jpg',
        prod_link: 'product.html',
        prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart',
        prod_price: 29,
        prod_rate: 4,
        prod_type: ['Diesel','Gas', 'Electric'],
        prod_color:['Red', 'Black', 'White']
    }
];

// selecting the elements of prouducts 

const prod_table = document.querySelector('.results');

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
            a_type += `<li><label><input type="radio" name="type" value="d"> ${typ}</label></li>`;
        });

        console.log(a_type);

        //color values
        let a_color = [];
        art_col.forEach((col)=>{
            a_color += `<li><label><input type="radio" name="colour" value="r"> ${col}</label></li>`;
        });
        //ratings
        let a_rate = [];
        for (let i =0 ; i < 5; i++) {
            if(art_rate > i) {
                a_rate +=`<span class="material-icons">star</span>`;
        } else {
            a_rate += `<span class="material-icons">star_half</span>`;
        }
    }
    // art_item.classList.add(`.product`);
    art_item.innerHTML = 
    `<header>
    <h2 class="subheading">Results</h2>
    <img src="img/${prod.prod_img}" alt="Product Image" class="img-class">
    <h3><a href="${prod.prod_link}"></a>${prod.prod_name}</h3>
    <data value="${prod.prod_price}"><del>22</del> <ins>${prod.prod_price}</ins></data>
    <p>${prod.prod_desc}.<a href="${prod.prod_link}">see more</a></p>
    <dl>
      <dt>Rating</dt>
      <dd>4.4 ${a_rate}</dd>
    </dl>  
    </header>
    <form class="product-filter">
      <fieldset class="field-list">
        <legend>Colours</legend>
        <ul>
        ${a_color}
      </ul>
    </fieldset>
    <fieldset class="field-list">
      <legend>Types</legend>
      <ol>
       ${a_type}
       </ol>
    </fieldset>
  </form>
  <footer>
  <button type="button"><span class="material-icons">add_shopping_cart</span></button>
   <button type="button"><span class="material-icons">favorite</span></button>
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

sortBy.addEventListener('click', function(event) {
  const lowtoHigh = (ProdArr = []) => {
    const sortByPrice = (x,y) => {
      return x.prod_price - y.prod-price;
     };
     ProdArr.sort(sortByPrice);
     // console.log(ProdArr);
     prodTable(ProdArr);
   };
   if (sortBy.selectedIndex != 0) {
    lowtoHigh(ProdArr);
  }
  });

// const prodTable = function(prod_array) {
    
// };
 prodTable(ProdArr);