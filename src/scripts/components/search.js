'use strict';

class Search {
  constructor () {
    this.body = document.querySelector('body');
  }

  addSearch(type, text=''){
    let element = document.createElement(type);
    element.classList.add(type);


    if( type!=='input') {
      element.innerHTML = text;
    }
   
    this.body.appendChild(element);

  }
}

export default Search;