prompt('adinizi daxil edin');
var paper = 1;
var rock = 2;
var scissors = 3;

var input = prompt('bunlardan birini secin: ' + paper + '-kagiz ' + rock + '-das ' + scissors + '-qayci');

var random = Math.floor(Math.random() * 3 + 1);
if (input == paper || input == rock || input == scissors) {
    document.write('sizin sectiyiniz:' + input + '<br>');
    document.write('reqibinizin secdiyi:' + random + '<br>')
    if (input == random) {
        document.write('beraber');
    } else if (input == paper && random == rock || input == rock && random == scissors || input == scissors && random == paper) {
        document.write('siz qazandiniz!')
    } else {
        document.write('meglub oldunuz.')
    }
} else {

    document.write('seciminiz [1-3] araligindan kenardadir');
}