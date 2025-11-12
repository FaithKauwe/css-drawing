// this approach grabs all the buttons with the class theme-btn and adds an event listener to each 
// with a for each loop, 3 event listeners. can cause memory leaks if the button is deleted and the 
// listener is not deleted- can happen often on production level teams with many members and 
// fast pace. alternative is Mitchell's suggestion for event delegation

// APPROACH 1: Individual listeners (one per button)
// const themeButtons = document.querySelectorAll('.theme-btn');

// themeButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const theme = button.getAttribute('data-theme');
//         document.body.setAttribute('data-theme', theme);
//     });
// });


// APPROACH 2: Event Delegation (Mitchell's recommendation)
// Instead of attaching listeners to each button, we attach ONE listener to a parent element.
// When a click happens anywhere in .theme-controls, we check if the clicked element is a button.
// Benefits: 1) Only ONE listener in memory, 2) No cleanup needed when buttons are removed,
// 3) Automatically works for dynamically added buttons, 4) Scales better for many elements
// "bubbling" gets the event objects to the parent element which have event.targets that have data-them attributes
// set that data-theme in a variable, theme, and then apply that theme's settings to the body 

const themeControls = document.querySelector('.theme-controls');

themeControls.addEventListener('click', (event) => {
    if (event.target.classList.contains('theme-btn')) {
        const theme = event.target.getAttribute('data-theme');
        document.body.setAttribute('data-theme', theme);
    }
});

