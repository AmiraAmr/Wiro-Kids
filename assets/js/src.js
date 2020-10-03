$('.navbar-toggler').on('click', () => {
    $('.navbar-toggler i').toggleClass('fa-bars').toggleClass('fa-times');
    $('nav.navbar').slideToggle(300);
})


// --- Reisizing --- //
var resizedZoom = Math.round(window.devicePixelRatio * 100);

function home_Resizing() {

    if (resizedZoom < 90) { // range less than 90%
        $('.testimonials').css({ 'zoom': '1.1' });
    } else if (resizedZoom >= 90 && resizedZoom < 100) { //range 90%
        $('.testimonials').css({ 'zoom': '0.9' });
    } else if (resizedZoom >= 100 && resizedZoom < 115) { //range 100% 110%
        $('.testimonials').css({ 'zoom': '0.8' });
    } else if (resizedZoom >= 115) { //range 125%
        $('.testimonials').css({ 'zoom': '0.7' });
    }

}
function servicsDetails_Resizing() {
    if (resizedZoom > 110) {
        $('.details .content').css({ 'zoom': '0.68' });
    } else {
        $('.details .content').css({ 'zoom': '1' });
    }

}

home_Resizing();
servicsDetails_Resizing();

$(window).resize(function () {
    resizedZoom = Math.round(window.devicePixelRatio * 100);

    home_Resizing();
    servicsDetails_Resizing();

});




// --------------------- HOME --------------------- //

//Our services slider
$('.our-services .services-list li').each(function () {
    var num = $(this).data('target');
    $(this).children('span').text(num);
})

//List items clicking
$('.our-services .services-list li').on('click', function () {
    var num = $(this).data('target');
    $('.our-services .services-list li').removeClass('active');
    $(this).addClass('active');
    $('.our-services .slider .item').removeClass('active');
    var sliderItem = '.our-services .slider .item:nth-of-type(' + num + ')';
    $(sliderItem).addClass('active');
})
//Slider arrows clicking
$('.our-services i').on('click', function () {
    var num = $(this).parents('.item').data('target');
    $('.our-services .slider .item').removeClass('active');
    $('.our-services .services-list li').removeClass('active');

    if ($(this).hasClass('next')) {
        num = num + 1;
        if ($(this).parents('.item').is(':last-child')) {
            $('.our-services .item:first-child').addClass('active');
            num = $('.our-services .item:first-child').data('target');
        } else {
            $(this).parents('.item').next('.item').addClass('active');
        }
        var listItem = '.our-services .services-list li:nth-of-type(' + num + ')';
        $(listItem).addClass('active');
    }


    else if ($(this).hasClass('prev')) {
        num = num - 1;
        if ($(this).parents('.item').is(':first-child')) {
            $('.our-services .item:last-child').addClass('active');
            num = $('.our-services .item:last-child').data('target');
        } else {
            $(this).parents('.item').prev('.item').addClass('active');
        }
        var listItem = '.our-services .services-list li:nth-of-type(' + num + ')';
        $(listItem).addClass('active');
    }
})



// --------------------- OUR CLIENTS --------------------- //

$('.customers .image-background-color').each(function () {
    $(this).css({ "backgroundColor": $(this).data("color") });
})
$('.customers .image-background-color .image-border').each(function () {
    $(this).css({ "border-color": $(this).data("color") });
})




// --------------------- ABOUT US --------------------- //
// --------------------- MEDIA --------------------- //

$('.our-media .buttons button.btn').on('click', function () {
    var mediaData = $(this).data('target');
    var visible = '.media-data ' + mediaData;

    $('.our-media .buttons button.btn').removeClass('active');
    $(this).addClass('active');
    $('.media-data>div').fadeOut(300);
    $(visible).fadeIn(400);
})



// --------------------- Courses --------------------- //
// --------------------- Courses details --------------------- //

$('.descriptions .descr h4.show-text').on('click', () => {
    $('.descriptions .descr h4.show-text').fadeToggle(200);
    $('.descriptions .descr .more-details').slideToggle(300);
})


$('.course-content .unit.active .lectures').show();
$('.faq .head-topic.active').siblings('.answer').show();


function RemovingActive(element, toggling) {
    element.children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    element.removeClass('active');
    toggling.slideUp(300);
}

$('.course-content .unit .head-topic').on('click', function () {

    if ($(this).parent('.unit').hasClass('active')) {
        RemovingActive($('.course-content .unit'), $('.course-content .unit .lectures'));
    }
    else {
        RemovingActive($('.course-content .unit'), $('.course-content .unit .lectures'));
        $(this).parent('.unit').addClass('active');
        $('.course-content .unit.active .lectures').slideDown(300);
        $('.course-content .unit.active .head-topic i').removeClass('fa-angle-down').addClass('fa-angle-up');
    }
})

$('.course-content .unit .lectures .topic i').on('click', function () {

    $(this).parent('div').parent('.row').children('.topic-details').fadeToggle(300);
    $(this).toggleClass('fa-angle-down').toggleClass('fa-angle-up');
})



$('.faq .head-topic').on('click', function () {
    if ($(this).hasClass('active')) {
        RemovingActive($('.faq .head-topic'), $('.faq .answer'));
    } else {
        RemovingActive($('.faq .head-topic'), $('.faq .answer'));
        $(this).addClass('active');
        $(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up')
        $(this).siblings('.answer').slideDown(300);
    }
})

// --- Resizing --- //

var resizedZoom = Math.round(window.devicePixelRatio * 100);
function courses_Resizing() {

    if (resizedZoom < 95) {
        $('.course .main-row').css({ 'zoom': '1' });
    } else if (resizedZoom < 120) {
        $('.course .main-row').css({ 'zoom': '0.8' });
    } else {
        $('.course .main-row').css({ 'zoom': '0.7' });
    }

}
courses_Resizing();

$(window).resize(function () {
    resizedZoom = Math.round(window.devicePixelRatio * 100);

    courses_Resizing();

});



// --------------------- EXAM --------------------- //
$('.exam .row .questions .choices h4').on('click', function () {
    $(this).siblings('h4').removeClass('active');
    $(this).addClass('active');
    console.log('in');
})



// --------------------- PROFILE --------------------- //

$('.account .select h4').on('click', function () {
    var target = $(this).data('target');

    $('.account .select h4').removeClass('active')
    $(this).addClass('active');

    $('.content >div').slideUp(400);
    $('.content >div' + target).slideDown(400);
})
