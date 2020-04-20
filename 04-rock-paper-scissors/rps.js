prompt('adinizi daxil edin');
var k = 1;
var d = 2;
var q = 3;

var input = prompt('bunlardan birini secin: ' + k + '-kagiz ' + d + '-das ' + q + '-qayci');
var random = Math.floor(Math.random() * 3 + 1);
document.write('sizin sectiyiniz:' + input + '<br>');
document.write('reqibinizin secdiyi:' + random + '<br>')
if (input == 1 && random == 1 || input == 2 && random == 2 || input == 3 && random == 3) {
    document.write('beraber');
} else if (input == 1 && random == 2 || input == 2 && random == 3 || input == 3 && random == 1) {
    document.write('siz qazandiniz!')
} else {
    document.write('meglub oldunuz.')
}