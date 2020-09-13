const menu = {
    _courses:{
      _appetizers:[],
      _mains:[],
      _desserts:[]
    },
  
  addDishToCourse(courseName,dishName,dishPrice){
    return dish = {
      name:courseName,
      price:dishPrice
    }    
  },
    get courses(){
      return {
        appetizers:this._appetizers,
        mains:this._mains,
        desserts:this._desserts
      }
    },
  
    get appetizers(){
  
    },
  
    set appetizers(appetizerIn){
  
    },
  
    get mains(){
  
    },
  
    set mains(mainsIn){
  
    },
  
    get desserts(){
  
    },
  
    set desserts(desertsIn){
  
    }
  
  }