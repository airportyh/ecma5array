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
