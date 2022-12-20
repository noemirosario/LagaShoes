import APIFeaturesShoes from "./../src/utils/APIFeaturesShoes.js";

const shoesAPI = new APIFeaturesShoes();

const getCurrentShoes = () => {
  const shoes = shoesAPI.getShoes();
  const idShoes = shoesAPI.getCurrentIDShoes();

  return shoes.find((el) => el.id === idShoes);
};

const currentShoesDetails = getCurrentShoes();
console.log(currentShoesDetails)
const headerShoes = document.querySelector('.header-shoes'); 
const shoesDetails = document.querySelector(".shoes-details");
const size = document.querySelector('.size'); 

headerShoes.innerHTML = ""; 
shoesDetails.innerHTML = "";
size.innerHTML = "";


const markupShoesHeader = `
<div class="header-shoes">
  <a href="#" class="mb-7 d-block fs-4 text-success">${currentShoesDetails.name}</a>
  <h2 class="mb-1 h1">${currentShoesDetails.description}</h2>
  <div class="mb-4">
    <small class="text-warning">
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-half"></i></small><a href="#" class="ms-2 text-success">(30 reviews)</a>
  </div>
  <div class="fs-4 padding-botoom: 4">
  <span class="fw-bold text-success fw-bold">$ ${currentShoesDetails.price}</span>
</div>`;


const markupShoes = `
  <table class="table table-borderless">
    <tbody>
      <tr>
        <td>ID:</td>
        <td>${currentShoesDetails.id}</td>
      </tr>
      <tr>
        <td>Marca:</td>
        <td>${currentShoesDetails.name}
        </td>
      </tr>
      <tr>
        <td>Descripcion:</td>
        <td>${currentShoesDetails.description}</td>
      </tr>
      <tr>
        <td>Entregas en:</td>
        <td>Edificio B</td>
      </tr>
      
      <tr>
      </tr>
    </tbody>
  </table>
`;

const markupShoesSize = `
<div class="markupShoesSize">
  <div class="col-auto">
                          <ul class="list-inline pb-3">
                              <li class="list-inline-item">Talla disponible:
                                  <input type="hidden" name="product-size" id="product-size" value="">
                              </li>
                              <li class="list-inline-item">
                                <span class="btn btn-success btn-size">${currentShoesDetails.talla}</span>
                              </li>
                          </ul>
                      </div>

                      <div class="col-auto">
                        <ul class="list-inline pb-3"></ul>
                      </div>
                
                      
                    </div>
`;




headerShoes.insertAdjacentHTML("beforebegin", markupShoesHeader);
shoesDetails.insertAdjacentHTML("beforebegin", markupShoes);
size.insertAdjacentHTML("beforebegin", markupShoesSize);

