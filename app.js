document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    var myDiv = document.getElementById("cartContainer");
  
    // Set initial opacity to 0 (hidden)
    gsap.set(myDiv, { opacity: 0 });
  
    // Use GSAP to animate the opacity property
    gsap.to(myDiv, { opacity: 1, duration: 2  });
  });

  var left = document.getElementsByClassName("cart-item");

  // Set initial opacity to 0 (hidden) and initial position
  gsap.set(left, { opacity: 0, x: +100 });

  // Use GSAP to animate the opacity and position with a delay
  gsap.to(left, { opacity: 1, x: 0, duration: 1, delay: 1 });


















let incrementButton = document.getElementsByClassName('inc-btn');
let decrementButton = document.getElementsByClassName('dec-btn');

for ( let i=0 ; i < incrementButton.length; i++){
    let button = incrementButton[i];
    // console.log(button)
    button.addEventListener('click' ,function(event){
        
        let buttonClicked = event.target;
        // console.log(buttonClicked);
        let input = buttonClicked.parentElement.parentElement.children[2].children[1];
        console.log(input);
        let inputValue = input.textContent;
        console.log(inputValue);
        let newValue = parseInt(inputValue) + 1;
        console.log(newValue);
        input.textContent = newValue;

    }) 
}

for ( let i=0 ; i < decrementButton.length; i++){
    let button = decrementButton[i];
    // console.log(button)
    button.addEventListener('click' ,function(event){
        
        let buttonClicked = event.target;
        // console.log(buttonClicked);
        let input = buttonClicked.parentElement.parentElement.children[2].children[1];
        // console.log(input);
        let inputValue = input.textContent;
        // console.log(inputValue);
        let newValue = parseInt(inputValue) - 1;
        // console.log(newValue);
        if(newValue >= 0){
            input.textContent = newValue;
        }
        else{
            alert('quantity can not be less than zero')
        }
    }) 
}


const closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const container = this.parentNode;
    container.remove();
  });
});


