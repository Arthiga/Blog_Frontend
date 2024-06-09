// store in variables
const share=document.querySelector(".share");
const shareIcon=document.querySelector(".share-img ");
console.log("inside script! after vari");
console.log("shaare icon",shareIcon);
shareIcon.addEventListener("click", (e) => {
    console.log('Clicked element:', e.target); // Debugging line

        console.log('Within shareIcon container'); // Debugging line
        if (window.innerWidth <= 750) {
            share.classList.toggle("active-share-mobile");
            console.log('Toggled mobile class'); // Debugging line
        } else {
            share.classList.toggle("active-share-desktop");
            console.log('Toggled desktop class'); // Debugging line
        }
    
});

