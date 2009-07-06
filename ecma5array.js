/* ============= Array methods added in ECMAScript 5 ================ */
function arrayMethods(methods){
  var arrProto = Array.prototype;
  for (var name in methods)
    arrProto[name] = arrProto[name] || methods[name];
}

arrayMethods({
  forEach: function(iter, context){
    for (var i = 0; i < this.length; i++){
      iter.apply(context, [this[i], i, this]);
    }
  }
  ,
  reduce: function(accumlator, initVal){
    var curr = initVal;
    this.forEach(function(item, i, arr){
      curr = accumlator(curr, item, i, arr);
    });
    return curr;
  }
  ,
  reduceRight: function(accumlator, initVal){
    var curr = initVal;
    for (var i = this.length - 1; i >= 0; i--){
      var item = this[i];
      curr = accumlator(curr, item, i, this);
    }
    return curr;
  }
  ,
  map: function(func, context){
    return this.reduce(function(curr, item, i, arr){
      return curr.concat([func.apply(context, [item, i, arr])])
    }, []);
  }
  ,
  filter: function(accept, context){
    return this.reduce(function(curr, item, i, arr){
      return accept.apply(context, [item, i, arr]) ? curr.concat(item) : curr;
    }, []);
  }
  ,
  every: function(predicate, context){
    return this.reduce(function(curr, item, i, arr){
      return predicate.apply(context, [item, i, arr]) && curr;
    }, true);
  }
  ,
  some: function(predicate, context){
    return this.reduce(function(curr, item, i, arr){
      return predicate.apply(context, [item, i, arr]) || curr;
    }, false);
  }
  ,
  indexOf: function(target, startFrom){
    for (var i = startFrom || 0; i < this.length; i++)
      if (this[i] === target) return i;
    return -1;
  }
  ,
  lastIndexOf: function(target, startFrom){
    for (var i = startFrom || this.length - 1; i >= 0; i--)
      if (this[i] === target) return i;
    return -1;
  }
});


