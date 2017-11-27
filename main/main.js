/**
 * Created by lucky on 17-11-25.
 */
function main(number) {
    if (number > 1) {
        return number + 'bottles of beer on the wall,' + number + 'bottles of beer.\nTake one down, pass it around,' + number - 1 + 'bottles of beer on the wall.'
    }
    else if (number < 1) {
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'

    }
    else
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.'
}
module.exports = main;
