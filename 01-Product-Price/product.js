prompt('adiniz ?');

var input_price = prompt('qiymet ?');
if (isNaN(input_price)) {
    alert('Yalniz eded daxil edin.');
    throw new Error;
}
var input_count = prompt('nece eded ?');
if (isNaN(input_count)) {
    alert('Yalniz eded daxil edin.');
    throw new Error;
}

var input_discount = prompt('endirim nece faiz ?');
if (isNaN(input_discount)) {
    alert('Yalniz eded daxil edin.');
    throw new Error;
}


input_price = parseInt(input_price);
input_count = parseInt(input_count);
input_discount = parseInt(input_discount);
var p_summary = input_price * input_count - input_price * input_count * input_discount / 100;
alert('odeyeceyiniz mebleg: ' + p_summary);