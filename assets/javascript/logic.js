let user_one_color_choice = 0;
let page_index = 1;
let sliderRange = 15;


$(document).ready(function () {
    //Initial things that needs to happen as soon as the document loads
    page_decider(page_index);
    
    function page_decider(page_index) {
        $('.generalWrapper').html('');
        switch (page_index) {
            case 1: page1();
            break;
            case 2: page2();
            break;
            case 3: page3();
            break;
        }
    }
    
    // Start of my page functionality
    function page1() {
        $('.generalWrapper').html('<div id="topMessage">Welcome To Collaborative Art Project!</div><div id="largeButton" class="x">Get Started!</div></div>');
        $('#sideBar').hide();
    }
    function page2() {
        $('.generalWrapper').html('<div id="topMessage">First, lets choose how big of a grid we want to draw on. You can choose a grid from 15px to 50px long and tall</div><div id="gridInformation">Number</div><div class="sliderContainer"><div class="slider"><input type="range" min="15" max="50" value="" class="slider" id="myRange"></div></div><div id="largeButton" class="x">Next</div></div>');
    }
    function page3() {
        $('.generalWrapper').append('<div id="topMessage">Enjoy your project!</div><div id="artBox1"></div></div>');
        $('#sideBar').slideDown(800);
        
    }
    
    function gridSize(sliderRange) {
        console.log('running');
        for (let i = 0; i < sliderRange; i++) {
            let newDiv = $("<div>");
            newDiv.attr('class', 'row');
            $("#artBox1").append(newDiv);
            
        }
        for (let i = 0; i < sliderRange; i++) {
            $('.row').append(
                $('<div/>')
                .attr('class', 'pixel')
            );
            
        }
        
    }
    
    
    //all my DOM click events
    $(document).on('click', '.pixel', function () {
        user_one_color_choice = $('#colorPicker').val();
    $(this).css('background', user_one_color_choice);
});

$(document).on('input', sliderRange, () => {
    sliderRange = $('#myRange').val();
    $('#gridInformation').html(sliderRange);
});

$(document).on('click', '#largeButton', function () {
    sliderRange = $('#myRange').val();
    page_index++;
    page_decider(page_index);
    $('#gridInformation').html(sliderRange);
    gridSize(sliderRange);
});





});

