'use strict';

import Search from './components/search';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';

(() => {
  const search = new Search();
  search.addSearch('h3', 'Search:');
  search.addSearch('input');
  search.addSearch('button', 'Go');

})();