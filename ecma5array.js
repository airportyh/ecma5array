/*
Copyright (c) 2010, Toby Ho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/* ============= Array methods added in ECMAScript 5 ================ */
(function(){ 
    /* An anonymous function called once avoid to create a global arrayMethods function.
     */

    function arrayMethods(methods){
      var arrProto = Array.prototype;
      for (var name in methods){
        var method = methods[name];
        arrProto[name] = /*arrProto[name] ||*/ methods[name];
      }
    }

    arrayMethods({
      forEach: function(iter, context){
        for (var i = 0; i < this.length; i++){
          iter.call(context, this[i], i, this);
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
          return curr.concat([func.call(context, item, i, arr)])
        }, []);
      }
      ,
      filter: function(accept, context){
        return this.reduce(function(curr, item, i, arr){
          return accept.call(context, item, i, arr) ? curr.concat(item) : curr;
        }, []);
      }
      ,
      every: function(predicate, context){
        return this.reduce(function(curr, item, i, arr){
          return curr && predicate.call(context, item, i, arr);
        }, true);
      }
      ,
      some: function(predicate, context){
        return this.reduce(function(curr, item, i, arr){
          return curr || predicate.call(context, item, i, arr);
        }, false);
      }
      ,
      indexOf: function(target){
        var fromIndex = arguments[1];
        fromIndex = typeof(fromIndex) == 'boolean' ? 
          (fromIndex ? 1 : 0) :
          parseInt(fromIndex) || 0;
        if (fromIndex < 0)
          fromIndex = this.length + fromIndex;
        for (var i = fromIndex; i < this.length; i++)
          if (this[i] === target) return i;
        return -1;
      }
      ,
      lastIndexOf: function(target){
        var fromIndex = arguments.length > 1 ? arguments[1] : this.length - 1;
        if (typeof(fromIndex) == 'boolean')
          fromIndex = fromIndex ? 1 : 0;
        else
          fromIndex = parseInt(fromIndex) || 0;
        if (fromIndex < 0)
            fromIndex = this.length + fromIndex;
        for (var i = fromIndex; i >= 0; i--)
          if (this[i] === target) return i;
        return -1;
      }
    });
    
})();
