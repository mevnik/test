require('./less');

var App = function() {
    console.log('Hello git');
};

var app = new App();

var str = require('./constant');

var App2 = function() {
    console.log(str);
};

var app2 = new App2();

var $ = require('jquery');
$('body').html('<div class ="first"><h2 class ="first__second">Hello,less!<div> </div></h2></div>');

