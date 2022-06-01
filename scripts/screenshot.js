(function (window) {
    'use strict';

    let App = window.App || {};
    var $ = window.jQuery;

    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });

});