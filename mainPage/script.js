
//============================================================= navBar Dropdown ===============================================================

        //================= using jquery ==================================
        // $(".dropdown").hover(function(){
        //     $(this).children().toggleClass("show");
        //     }
        // );


//================= using JS-5======================================
        // var dropdownList=document.querySelectorAll(".dropdown");
        // for(var i=0;i<dropdownList.length;i++){
        //     dropdownList[i].addEventListener("mouseover",function(){
        //         var childrenList=this.children;
        //         for(var j=0;j<childrenList.length;j++){
        //             childrenList[j].classList.toggle("show");
        //         }
        //     });

        //     dropdownList[i].addEventListener("mouseout",function(){
        //         var childrenList=this.children;'
        //         for(var j=0;j<childrenList.length;j++){
        //             childrenList[j].classList.toggle("show");
        //         }
        //     });
        // }

//========================= using js-6 ===============================
        [...document.querySelectorAll(".dropdown")].map(Dropdown => {
            ['click','mouseover','mouseout'].map(Event => {
                Dropdown.addEventListener(Event,function(){
                    [...this.children].map(Child => {
                        Child.classList.toggle("show");
                    });
                },false);
            });
        });

//================================================================== top slider ===============================================================

$('.top-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    items:1,
    animateIn:'fadeIn',
    animateOut:'fadeOut',

})

// var right = document.getElementsByClassName("right");
// var si = right.length;
// var z=1;
// turnRight();
// function turnRight()
// {
//     if(si>=1){
//         si--;
//     }
//     else{
//         si=right.length-1;
//         function sttmot(i){
//             setTimeout(function(){right[i].style.zIndex="auto";},500);
//         }
//         for(var i=0;i<right.length;i++){
//             right[i].className="right";
//             sttmot(i);
//             z=1;
//         }
        
//         // turnRight();
//     }
//     right[si].classList.add("flip");
//     z++;
//     right[si].style.zIndex=z;
// }
// function turnLeft()
// {
//     if(si<right.length){
//         si++;
//     }
//     else{
//         si=1;
//         for(var i=right.length-1;i>0;i--){
//             right[i].classList.add("flip");
//             right[i].style.zIndex=right.length+1-i;
//         }
//     }
//     right[si-1].className="right";
//     setTimeout(function(){right[si-1].style.zIndex="auto";},700);
// }


//===================================================== Author slider ===========================================================================


function moveToSelected(element){

    if (element == "next") {
        var selected = $(".selected").next();
      } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    

    var right1=$(selected).next();
    var left1=$(selected).prev();
    var right2=$(right1).next();
    var left2=$(left1).prev();
    // var repeatLeft=$(selected).siblings(".leftmost").eq(0);
    // var repeatRight=$(selected).siblings("rightmost").eq(1);

    $(selected).removeClass().addClass("centerElement");
    $(left1).removeClass().addClass("left1");
    $(right1).removeClass().addClass("right1");
    $(left2).removeClass().addClass("left2");
    $(right2).removeClass().addClass("right2");
    // $(repeatLeft).removeClass().addClass("rightmost");
    // $(repeatRight).next().removeClass().addClass("leftmost");
    
}

$(document).keyup(function(e){
    switch(e.which){
        case 37:
            moveToSelected("prev");
            break;
            
            case 39:
                moveToSelected("next");
                break;
                
                default: return;
            }
});
        
$("#carousel div").click(function(){
    moveToSelected($(this));
});




//======================================================== Book Slider =============================================================================

$('.book-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    stagePadding:50,
    
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            stagePadding:60,
        },
        450:{
            items:2,
            stagePadding:0,
        },
        768:{
            items:2
        },
        992:{
            items:3,
        },
        1200:{
            items:4,
        },
        1400:{
            items:5,
        }
    }
});

//============================================================= our cause ======================================================================



//============================================================ Blog ============================================================================
    $('.blogs-content .blog-item').mouseenter(function(){
        $(this).find('p').slideDown();
        $(this).find('.blog-img img').css("transform","scale(1.15)");
    }).mouseleave(function(){
        $(this).find('p').slideUp();
        $(this).find('.blog-img img').css("transform","scale(1)");
    });

//=============================================================== Rivews ==============================================================================
    
$('.rivews .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    items:1
})


// var indicator = document.querySelectorAll('.indicator');
//     var slide = document.getElementById('rivewSlide');

//     console.log(slide);
    
//     indicator[0].onclick = function(){
//         slide.style.transform = "translateX(0px)";
//         for (i=0;i<4;i++){
//             indicator[i].classList.remove("activeIndicator");
//         }
//         this.classList.add("activeIndicator");
//     }

//     indicator[1].onclick = function(){
//         slide.style.transform = "translateX(-800px)";
//         for (i=0;i<4;i++){
//             indicator[i].classList.remove("activeIndicator");
//         }
//         this.classList.add("activeIndicator");
//     }

//     indicator[2].onclick = function(){
//         slide.style.transform = "translateX(-1600px)";
//         for (i=0;i<4;i++){
//             indicator[i].classList.remove("activeIndicator");
//         }
//         this.classList.add("activeIndicator");
//     }

//     indicator[3].onclick = function(){
//         slide.style.transform = "translateX(-2400px)";
//         for (i=0;i<4;i++){
//             indicator[i].classList.remove("activeIndicator");
//         }
//         this.classList.add("activeIndicator");
//     }

        
        
        //===================================================== Same JQUERY Code for javascript ==============================================================
        

        
        