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


describe('Array ecmascript 5', function(){

    it('should not be in hole', function(){
        expect(1 in [1,,3]).toBe(false)
    })

    it('should have length', function(){
        expect([1,2,3].length).toBe(3)
    })
    
    it('should indexOf', function(){
        expect([1,2,3,1].indexOf(1)).toBe(0)
        expect([1,2,3,1].indexOf(1, 1)).toBe(3)
        expect([].indexOf(1)).toBe(-1)
        expect([1,,3].indexOf(undefined)).toBe(-1)
        expect([1, undefined, 3].indexOf(undefined)).toBe(1)
    })
    
    it('should lastIndexOf', function(){
        expect([1,2,3,1].lastIndexOf(1)).toBe(3);
        expect([1,2,3,1].lastIndexOf(1, 2)).toBe(0);
        expect([].indexOf(1)).toBe(-1);
        expect([1,,3].lastIndexOf(undefined)).toBe(-1)
        expect([1,undefined, 3].lastIndexOf(undefined)).toBe(1)
    })
    
    it('should map', function(){
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
        expect([1,,3].map(function(n){
            return n * 2
        })).toEqual([2,,6])
    })
    
    it('should filter', function(){
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
    it('should forEach', function(){
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
    it('should reduce', function(){
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
    it('should reduceRight', function(){
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
    it('should every', function(){
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
    
    it('should some', function(){
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
 })