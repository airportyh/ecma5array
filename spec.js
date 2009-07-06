$.describe('Array ecmascript 5')
  .should('have length', function(){
    $t([1,2,3].length).shouldEqual(3);
  })
  .should('indexOf', function(){
    $t([1,2,3,1].indexOf(1)).shouldEqual(0);
    $t([1,2,3,1].indexOf(1, 1)).shouldEqual(3);
    $t([].indexOf(1)).shouldEqual(-1);
  })
  .should('lastIndexOf', function(){
    $t([1,2,3,1].lastIndexOf(1)).shouldEqual(3);
    $t([1,2,3,1].lastIndexOf(1, 2)).shouldEqual(0);
    $t([].indexOf(1)).shouldEqual(-1);
  })
  .should('map', function(){
    var arr = [1,2,3];
    var indices = [];
    var context = {};
    $t(arr.map(function(n,i,a){
      indices.push(i);
      $t(a).shouldEqual(arr);
      $t(this).shouldBeSameObjectAs(context);
      return n * 2;
    }, context)).shouldEqual([2,4,6]);
    $t(indices).shouldEqual([0,1,2]);
  })
  .should('filter', function(){
    var arr = [1,2,3];
    var indices = [];
    var context = {};
    $t(arr.filter(function(n, i, a){
      indices.push(i);
      $t(a).shouldEqual(arr);
      $t(this).shouldBeSameObjectAs(context);
      return n % 2 == 0;
    }, context)).shouldEqual([2]);
    $t(indices).shouldEqual([0,1,2]);
  })
  .should('forEach', function(){
    var results = [];
    var arr = [1,2,3];
    var indices = [];
    var context = {};
    arr.forEach(function(item, index, a){
      results.push(item);
      indices.push(index);
      $t(a).shouldEqual(arr);
      $t(this).shouldBeSameObjectAs(context);
    }, context);
    $t(results).shouldEqual([1,2,3]);
    $t(indices).shouldEqual([0,1,2]);
  })
  .should('reduce', function(){
    var elms = [];
    var indices = [];
    var arr = [1,2,3];
    $t(arr.reduce(function(cur, n, i, a){
      elms.push(n);
      indices.push(i);
      $t(a).shouldEqual(arr);
      return cur + n;
    }, 0)).shouldEqual(6);
    $t(elms).shouldEqual([1,2,3]);
    $t(indices).shouldEqual([0,1,2]);
  })
  .should('reduceRight', function(){
    var elms = [];
    var indices = [];
    var arr = [1,2,3];
    $t(arr.reduceRight(function(cur, n, i, a){
      elms.push(n);
      indices.push(i);
      $t(a).shouldEqual(arr);
      return cur + n;
    }, 0)).shouldEqual(6);
    $t(elms).shouldEqual([3,2,1]);
    $t(indices).shouldEqual([2,1,0]);    
  })
  .should('every', function(){
    var indices = [];
    var arr = [1,2,3];
    var context = {};
    $t(arr.every(function(n, i, a){
      $t(a).shouldEqual(arr);
      indices.push(i);
      $t(this).shouldBeSameObjectAs(context);
      return n > 0;
      }, context)).shouldBeTrue();
    $t(indices).shouldEqual([0,1,2]);
    $t(arr.every(function(n){ return n < 2; })).shouldBeFalse();
  })
  .should('some', function(){
    var indices = [];
    var arr = [1,2,3];
    var context = {};
    $t(arr.some(function(n, i, a){
      $t(a).shouldEqual(arr);
      indices.push(i);
      $t(this).shouldBeSameObjectAs(context);
      return n > 2;
      }, context)).shouldBeTrue();
    $t(indices).shouldEqual([0,1,2]);
    $t(arr.some(function(n){ return n > 3; })).shouldBeFalse();    
  })
 
$.describe('Array extras')
  .should('have first', function(){
    $t([1,2].first()).shouldEqual(1);
    $t([].first()).shouldEqual(null);
  })
  .should('have last', function(){
    $t([1,2].last()).shouldEqual(2);
    $t([].last()).shouldEqual(null);
  })
  .should('have find', function(){
    $t([1,2,3].find(function(n){ return n % 2 == 0; })).shouldEqual(2);
    $t([1,2,3].find(function(n){ return false; })).shouldEqual(null);
  })
  .should('have contains', function(){
    $t([1,2,3].contains(2)).shouldBeTrue();
  })