class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content= this.element.querySelector('.dropdown-content')
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();

    })
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden')
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));




//if iterating over elemtns, first make a foreach and queryselector the items, assign to variable to later create class with
//create class from the foreach elements
//make a constructor and a variable
//assign a this. to the constructor variable
//select the element(this.constructor-variable.query...)with query selector trying to modify and assign it to a this.variable
//what happens when the button is clicked? dropdown content shows, so aslos assign this to a this. variable. same this.querysleector.('element')
//now need a click handler. choose element that is being clicked, usually a this.button, and add an event listener with a method call
//lastly define the method, so when method is called underneath, what happenes?
//in example here, this.content.classlist.toggle('item being toggles visible and hidden)

//note, use classlist in the method, not document, because class list is acessing the specific elements list of classes
//something soemthing scope????