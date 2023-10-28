$(document).on("keydown",function() {
    $("h1").text("Level 1");
})

$(".btn").click(function (e) {
    switch($(this).attr('id')){
        case 'g':
            playSound('1');
            break;
        case 'r':
            playSound('2');
            break;
        case 'y':
            playSound('3');
            break;
        case 'b':
            playSound('4');
            break;
        default:
            break;
    }
    changeBackground($(this).attr('id'));
})

function playSound(num) {
    var audio = new Audio('css/sounds/sound'+num+'.mp3');
    audio.play();
}

function changeBackground(i) {
    $('#'+i).addClass("pressed");
    setTimeout(function(){
        $('#'+i).removeClass("pressed");
    },200)
}