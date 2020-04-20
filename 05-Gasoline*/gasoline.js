var input = prompt('benzinin miqdarini daxil edin gallon ile:');
input = parseInt(input);
var litr = 3.7854 * input;
var barrel = 19.5 * input;
var co2 = 20 * input;
var btu = 115.00 * input * 75.700;
var usd = 4 * input;
alert('litr ile: ' + litr + '\n' + 'barrel ile:' + barrel + '\n' + 'co2 ile: ' + co2 + '\n' + 'btu ile: ' + '\n' + 'usd ile: ' + usd);