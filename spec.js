describe('Array ecmascript 5')
  .should('have length', function(){
    expect([1,2,3].length).toBe(3);
  })
  .should('indexOf', function(){
    expect([1,2,3,1].indexOf(1)).toBe(0);
    expect([1,2,3,1].indexOf(1, 1)).toBe(3);
    expect([].indexOf(1)).toBe(-1);
  })
  .should('lastIndexOf', function(){
    expect([1,2,3,1].lastIndexOf(1)).toBe(3);
    expect([1,2,3,1].lastIndexOf(1, 2)).toBe(0);
    expect([].indexOf(1)).toBe(-1);
  })
  .should('map', function(){
    var arr = [1,2,3];
    var indices = [];
    var context = {};
    expect(arr.map(function(n,i,a){
      indices.push(i);
      expect(a).toEqual(arr);
      expect(this).toBe(context);
      return n * 2;
    }, context)).toEqual([2,4,6]);
    expect(indices).toEqual([0,1,2]);
  })
  .should('filter', function(){
    var arr = [1,2,3];
    var indices = [];
    var context = {};
    expect(arr.filter(function(n, i, a){
      indices.push(i);
      expect(a).toEqual(arr);
      expect(this).toBe(context);
      return n % 2 == 0;
    }, context)).toEqual([2]);
    expect(indices).toEqual([0,1,2]);
  })
  .should('forEach', function(){
    var results = [];
    var arr = [1,2,3];
    var indices = [];
    var context = {};
    arr.forEach(function(item, index, a){
      results.push(item);
      indices.push(index);
      expect(a).toEqual(arr);
      expect(this).toBe(context);
    }, context);
    expect(results).toEqual([1,2,3]);
    expect(indices).toEqual([0,1,2]);
  })
  .should('reduce', function(){
    var elms = [];
    var indices = [];
    var arr = [1,2,3];
    expect(arr.reduce(function(cur, n, i, a){
      elms.push(n);
      indices.push(i);
      expect(a).toEqual(arr);
      return cur + n;
    }, 0)).toBe(6);
    expect(elms).toEqual([1,2,3]);
    expect(indices).toEqual([0,1,2]);
  })
  .should('reduceRight', function(){
    var elms = [];
    var indices = [];
    var arr = [1,2,3];
    expect(arr.reduceRight(function(cur, n, i, a){
      elms.push(n);
      indices.push(i);
      expect(a).toEqual(arr);
      return cur + n;
    }, 0)).toBe(6);
    expect(elms).toEqual([3,2,1]);
    expect(indices).toEqual([2,1,0]);    
  })
  .should('every', function(){
    var indices = [];
    var arr = [1,2,3];
    var context = {};
    expect(arr.every(function(n, i, a){
      expect(a).toEqual(arr);
      indices.push(i);
      expect(this).toBe(context);
      return n > 0;
      }, context)).toBe(true);
    expect(indices).toEqual([0,1,2]);
    expect(arr.every(function(n){ return n < 2; })).toBe(false);
  })
  .should('some', function(){
    var indices = [];
    var arr = [1,2,3];
    var context = {};
    expect(arr.some(function(n, i, a){
      expect(a).toEqual(arr);
      indices.push(i);
      expect(this).toBe(context);
      return n > 2;
      }, context)).toBe(true);
    expect(indices).toEqual([0,1,2]);
    expect(arr.some(function(n){ return n > 3; })).toBe(false);    
  })
 
describe('Array extras')
  .should('have first', function(){
    expect([1,2].first()).toBe(1);
    expect([].first()).toBe(undefined);
  })
  .should('have last', function(){
    expect([1,2].last()).toBe(2);
    expect([].last()).toBe(undefined);
  })
  .should('have find', function(){
    expect([1,2,3].find(function(n){ return n % 2 == 0; })).toBe(2);
    expect([1,2,3].find(function(n){ return false; })).toBe(null);
  })
  .should('have contains', function(){
    expect([1,2,3].contains(2)).toBe(true);
  })
  .should('do max', function(){
    expect([1,2,3].max()).toBe(3);
  })
  .should('do min', function(){
    expect([1,2,3].min()).toBe(1);
  })
  .should('do sum', function(){
    expect([1,2,3].sum()).toBe(6);
  })
  .should('do average', function(){
    expect([1,2,3].average()).toBe(2);
  })