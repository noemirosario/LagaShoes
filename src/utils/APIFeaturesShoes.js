const APIFatureShoes = class {
  // GET ALL SHOES
  getShoes() {
    const shoes = localStorage.getItem("shoes");

    return shoes ? JSON.parse(shoes) : null;
  }

  // SET SHOES DATA
  setShoes = (data) => {
    localStorage.setItem("shoes", JSON.stringify(data));
  };

  // SET CURRENT ID OF SHOES
  currenShoes = (curShoes) => {
    localStorage.removeItem("currentShoes");
    localStorage.setItem("currentShoes", JSON.stringify(curShoes));

    return JSON.stringify(localStorage.getItem("currentShoes"));
  };

  getCurrentIDShoes() {
    const shoes = localStorage.getItem("currentShoes");
    return shoes ? JSON.parse(shoes) : null;
  }

  // INIT API CALL GETSHOES AND SETSHOES METHOTS
  initAPIFeaturesShoes(data) {
    console.log(data);
    if (this.getShoes()) return this.getShoes();

    this.setShoes(data);
    return this.getShoes();
  }
};

export default APIFatureShoes;
