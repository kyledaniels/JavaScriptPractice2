const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[]
    },
  
  addDishToCourse(courseName,dishName,dishPrice){
     const dish = {
      name:dishName,
      price:dishPrice
    }    
     return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
     const dishes = thise._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length)
     return dishes[randomIndex];
  },

  generateRandomMeal(){

    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price - main.price + dessert.price;
    return `Your meal is ${appetizer.name}`

  },

    get courses(){
      return {
        appetizers:this.appetizers,
        mains:this.mains,
        desserts:this._desserts
      }
    },
  
    get appetizers(){
        return this._courses.appetizers;
    },
  
    set appetizers(appetizerIn){
        this._courses.appetizers = appetizerIn
    },
  
    get mains(){
        return this._courses.mains;
    },
  
    set mains(mainsIn){
        this._courses.mains = mainsIn
    },
  
    get desserts(){
        return this._courses.desserts;
    },
  
    set desserts(dessertsIn){
        this._courses.desserts = dessertsIn
    }
  
  }