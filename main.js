// //get all elements from menu
// const allItems = document.querySelectorAll(".navbar ul li a")

// allItems.forEach(item =>{
//     item.addEventListener("click",function(e){
//         //here we will write loop remove all previous classes active
//         for(var i = 0; i< allItems.length; i++){
//             allItems[i].classList.remove("active");
//         }
//         this.classList.add("active");
//     })
// })

const cards= document.querySelectorAll(".cardCol")
console.log(cards)
function myFunction(x) {
    if (x.matches) { // If media query matches
      for(var i = 0; i< cards.length; i++){
            cards[i].classList.remove("collapse");}
    } else {
     for(var i = 0; i< cards.length; i++){
        cards[i].classList.add("collapse");}
    }
  }
  
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

//   function stickyNavigation()
// {         
// 	if($(window).scrollTop() > lnStickyNavigation) 
// 	{   
// 		$('body').addClass('fixed');  
// 	} 
// 	else 
// 	{  
// 		$('body').removeClass('fixed');   
// 	}  
// }