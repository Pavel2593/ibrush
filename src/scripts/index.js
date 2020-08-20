$(document).ready(function() {
    $('.select__option-default').click(function() {
        $(this).parent().toggleClass('active');
        $(this).siblings('.select').toggleClass('display-block');
        $('.select__option-default').toggleClass('select__option-default-active');
    });

    $('.select .select__option').click(function() {
        var currentle = $(this).html();
        $('.select__option-default').html(currentle);
        $(this).parent().toggleClass('display-block');
        $('.select__option-default').toggleClass('select__option-default-active');
        $('.select__option-default').addClass('select__option-default-active-text');
    });

    var starActive = {
        fill: '#ffb400',
        stroke: '#ffb400'
    }

    var starDefault = {
        fill: '#ededed',
        stroke: '#cbcbcb'
    }

    $('.star5').hover(
        function(){
            $(this).children('svg').css(starActive);
            $('.star4').children('svg').css(starActive);
            $('.star3').children('svg').css(starActive);
            $('.star2').children('svg').css(starActive);
            $('.star1').children('svg').css(starActive);
        },
        function(){
            $(this).children('svg').css(starDefault);
            $('.star4').children('svg').css(starDefault);
            $('.star3').children('svg').css(starDefault);
            $('.star2').children('svg').css(starDefault);
            $('.star1').children('svg').css(starDefault);
        }
    );

    $('.star4').hover(
        function(){
            $(this).children('svg').css(starActive);
            $('.star3').children('svg').css(starActive);
            $('.star2').children('svg').css(starActive);
            $('.star1').children('svg').css(starActive);
        },
        function(){
            $(this).children('svg').css(starDefault);
            $('.star3').children('svg').css(starDefault);
            $('.star2').children('svg').css(starDefault);
            $('.star1').children('svg').css(starDefault);
        }
    );

    $('.star3').hover(
        function(){
            $(this).children('svg').css(starActive);
            $('.star2').children('svg').css(starActive);
            $('.star1').children('svg').css(starActive);
        },
        function(){
            $(this).children('svg').css(starDefault);
            $('.star2').children('svg').css(starDefault);
            $('.star1').children('svg').css(starDefault);
        }
    );

    $('.star2').hover(
        function(){
            $(this).children('svg').css(starActive);
            $('.star1').children('svg').css(starActive);
        },
        function(){
            $(this).children('svg').css(starDefault);
            $('.star1').children('svg').css(starDefault);
        }
    );

    $('.star1').hover(
        function(){
            $(this).children('svg').css(starActive);
        },
        function(){
            $(this).children('svg').css(starDefault);
        }
    );
});