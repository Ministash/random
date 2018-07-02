let user_one_color_choice = 0;
let page_index = 3;
let sliderRange = 1;
gridSize(sliderRange);


function page_decider(page_index) {
    $('body').html('');
    switch (page_index) {
        case 1: $('body').html('<div class="generalWrapper"><div id="topMessage">Welcome To Collaborative Art Project!</div><div id="largeButton" class="x">Get Started!</div></div>');
            break;
        case 2: $('body').html('<div class="generalWrapper"><div id="topMessage">First, lets choose how big of a grid we want to draw on. You can choose a grid from 15px to 50px long and tall</div><div id="gridInformation">0</div><div class="sliderContainer"><div class="slider"><input type="range" min="15" max="50" value="" class="slider" id="myRange"></div></div><div id="largeButton" class="x">Next</div></div>');
            break;
        case 3: $('body').html(' <div class="generalWrapper"><div id="topMessage">Enjoy your project!</div><input id="colorPicker" type="color"><div id="artBox1"></div></div>');
        break;
    }
}

function gridSize(sliderRange){
    for(let i = 0; i < sliderRange.length; i++){
        $('#artBox1').append($$("<div/>"));
    }
    
}




$(document).ready(function () {
    page_decider(page_index);

    $("body").on('click', '.pixel', function () {
        user_one_color_choice = $('#colorPicker').val();
        $(this).css('background', user_one_color_choice);


    }).on('input', '#myRange', function () {
        let sliderRange = $('#myRange').val();
        $('#gridInformation').html(sliderRange);
        gridSize(sliderRange);


    }).on('click', '#largeButton', function(){
        page_index++;
        page_decider(page_index);

    })

});
