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
  ,
  max: function(){
    return this.reduce(function(curr, n){
      if (curr === null) return n;
      else return Math.max(n, curr);
    }, null);
  }
  ,
  min: function(){
    return this.reduce(function(curr, n){
      if (curr === null) return n;
      else return Math.min(n, curr);
    }, null);
  }
  ,
  sum: function(){
    return this.reduce(function(curr, n){ return n + curr; }, 0);
  }
  ,
  average: function(){
    return this.sum() / this.length;
  }
}) 
