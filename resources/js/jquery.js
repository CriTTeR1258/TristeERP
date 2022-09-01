import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-ui/ui/widgets/autocomplete.js';
import 'jquery-ui/ui/widgets/datepicker.js';

function dateUpdate(){
    $('input[name="dates"]').datepicker({
        dateFormat: "dd/mm/yy"
    });
}

function dateUpdateWithParameters(ini, end){
    $('input[name="dates"]').datepicker({
        dateFormat: "dd/mm/yy",
        minDate: new Date(ini),
        maxDate: new Date(end)
    });
}

window.dateUpdate = dateUpdate;
window.dateUpdateWithParameters = dateUpdateWithParameters;