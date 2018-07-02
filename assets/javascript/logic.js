let user_one_color_choice = 0;
let page_index = 1;


function page_decider(page_index){
    $('body').html('');
    switch (page_index) {
        case 1 : $('body').html('<div class="generalWrapper"><div id="welcomeMessage">Welcome To Collaborative Art Project!</div><div id="largeButton" class="x">Get Started!</div></div>');
        break;
        }
    }


$('.pixel').on('click', function () {
    user_one_color_choice = $('#colorPicker').val();
    $(this).css('background', user_one_color_choice);
})


$(document).ready(function () {

page_decider(page_index);


      
    

});
