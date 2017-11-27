/**
 * Created by lucky on 17-11-25.
 */
"use strict";

var main = require('../main/main');

describe('main_spec', function () {

        it('return when given the number more than 1', function () {
            var result = main(99);
            expect(result).toEqual('99 bottles of beer on the wall, 99 bottles of beer.\nTake one down, pass it around, 98 bottles of beer on the wall.');
        });
        it('return when given the number equals 1', function () {
            var result = main(1);
            expect(result).toEqual('1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.')
        });
        it('return when given the number equals 0', function () {
            var result = main(0)
            expect(result).toEqual('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.')
        });
        it('return when given the number equals -1', function () {
            var result = main(-1)
            expect(result).toEqual('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.')
        });


    }
);
