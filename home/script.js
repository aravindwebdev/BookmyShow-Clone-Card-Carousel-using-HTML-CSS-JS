/* Code by aravind.web */

$(document).ready(function () {
    // Hide the previous button initially
    $('#prev').hide();

    // Add event listener for when the carousel slides
    $('#myCarousel').on('slide.bs.carousel', function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;

        // If the current index is greater than or equal to the total items minus the items per slide, hide the next button
        if (idx >= totalItems - (itemsPerSlide - 1)) {
            $('#next').hide();
        }

        // If the current index is zero, hide the previous button and show the next button
        if (idx == 0) {
            $('#prev').hide();
            $('#next').show();
        } else {
            // In all other cases, show the previous button and hide the next button
            $('#prev').show();
            $('#next').hide();
        }
    });
});

$(document).ready(function () {
    // Hide the previous button initially
    $('#prev1').hide();

    // Add event listener for when the carousel slides
    $('#myCarousel1').on('slide.bs.carousel', function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('.carousel-item').length;

        // If the current index is greater than or equal to the total items minus the items per slide, hide the next button
        if (idx >= totalItems - (itemsPerSlide - 1)) {
            $('#next1').hide();
        }

        // If the current index is zero, hide the previous button and show the next button
        if (idx == 0) {
            $('#prev1').hide();
            $('#next1').show();
        } else {
            // In all other cases, show the previous button and hide the next button
            $('#prev1').show();
            $('#next1').hide();
        }
    });
});

function toggleCities(){
    var x = document.getElementById('hidecities');
    if(x.style.display == 'none'){
        x.style.display='block';
    }else{
        x.style.display='none';
    }

}
$(document).ready(function(){
$(".toggleCity").click(function(){
    $(this).text(function(i, v){
       return v === 'View All Cities' ? 'Hide All Cities' : 'View All Cities'
    });
});
});