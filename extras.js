/* =============== A few extra convience methods =============== */

arrayMethods({
  first: function(){
    return this[0];
  }
  ,
  last: function(){
    return this[this.length-1];
  }
  ,
  find: function(match){
    return this.reduce(function(curr, item){
      return match(item) ? item : curr;
    }, null);
  }
  ,
  contains: function(target){
    return this.find(function(item){ return item == target; }) != null;
  }
}) 
