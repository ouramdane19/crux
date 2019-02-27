// CSS
import 'materialize-css/dist/css/materialize.css';

// JS
import M from 'materialize-css';

// Other imports

import initAutocomplete from '../plugins/init_autocomplete';

// Launch js

initAutocomplete();

// Init materialize JS components
const tabs = document.querySelector('.tabs');

if (tabs) {
  M.Tabs.init(tabs);
};

 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});

 // Profile edition

const activities = document.querySelectorAll('#user_activity_level');
console.log(activities);

activities.forEach( (element) => {
  element.addEventListener('click', (e) => {
    const value = e.currentTarget.value;
    e.currentTarget.closest('form').submit();
  });
});





