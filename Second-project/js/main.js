$(".counter").counterUp({
    delay:10,time:3000
})



// To the top
var button = document.getElementById("topbtn")

window.onscroll=function(){scrollfunc()};

function scrollfunc(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        button.style.display="block"
    }
    else{
        button.style.display="none"
    }
}

//when button clicked move to top
function topfunc(){
    document.body.scrollTop = 0 //safari
    document.documentElement.scrollTop = 0 //chrome, mozila , opera

 }