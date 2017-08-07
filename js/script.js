$(document).ready(function() {
    $('.buttons span').mouseenter(function() {
        $(this).css('background-color', 'rgba(50%, 50%, 50%, .4)');
    })

    $('.buttons span').mouseleave(function() {
        $(this).css('background-color', 'rgba(50%, 50%, 50%, 0)');
    })
})