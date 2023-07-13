var trash1 = document.getElementById('trash1')
var trash2 = document.getElementById('trash2')
var trash3 = document.getElementById('trash3')
var trash4 = document.getElementById('trash4')
var publish2 = document.querySelector(".published2");
var close = document.querySelector(".closed");
var publish1 = document.querySelector(".published1");
var inprogress = document.querySelector(".inprogress");

trash1.onclick = function () {
    publish1.style.display = 'none';
    disapear_publish1.style.display = 'none';
    disapear_publish2.style.display = 'none';
    disapear_publish3.style.display = 'none';
}
trash2.onclick = function () {
    close.style.display = 'none';
    disapear_close1.style.display = 'none';
    disapear_close2.style.display = 'none';
    disapear_close3.style.display = 'none';
}
trash3.onclick = function () {
    inprogress.style.display = 'none';
    disapear_inprogress1.style.display = 'none';
    disapear_inprogress2.style.display = 'none';
    disapear_inprogress3.style.display = 'none';
}
trash4.onclick = function () {
    publish2.style.display = 'none';
    disapear_publish21.style.display = 'none';
    disapear_publish22.style.display = 'none';
    disapear_publish23.style.display = 'none';
}

var btn_request1 = document.getElementById('btn1_function');
var disapear_publish1 = document.querySelector('.disapear1');
var disapear_publish2 = document.querySelector('.disapear2');
var disapear_publish3 = document.querySelector('.disapear3');
btn_request1.onclick = function () {
    disapear_publish1.style.display ='block';
    disapear_publish2.style.display ='block';
    disapear_publish3.style.display ='block';
}

var btn_request2 = document.getElementById('btn2_function');
var disapear_close1 = document.querySelector('.disapear1_close');
var disapear_close2 = document.querySelector('.disapear2_close');
var disapear_close3 = document.querySelector('.disapear3_close');
btn_request2.onclick = function () {
    disapear_close1.style.display = 'block';
    disapear_close2.style.display = 'block';
    disapear_close3.style.display = 'block';
}

var btn_request3 = document.getElementById('btn3_function');
var disapear_inprogress1 = document.querySelector('.disapear1_inprogress');
var disapear_inprogress2 = document.querySelector('.disapear2_inprogress');
var disapear_inprogress3 = document.querySelector('.disapear3_inprogress');
btn_request3.onclick = function () {
    disapear_inprogress1.style.display = 'block';
    disapear_inprogress2.style.display = 'block';
    disapear_inprogress3.style.display = 'block';
}

var btn_request4 = document.getElementById('btn4_function');
var disapear_publish21 = document.querySelector('.disapear1_publish2');
var disapear_publish22 = document.querySelector('.disapear2_publish2');
var disapear_publish23 = document.querySelector('.disapear3_publish2');
btn_request4.onclick = function () {
    disapear_publish21.style.display = 'block';
    disapear_publish22.style.display = 'block';
    disapear_publish23.style.display = 'block';
}
