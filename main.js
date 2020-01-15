
let startGame = () => {
    var canv = document.getElementById("myCanvas");
    var contex = canv.getContext("2d");
    contex.fillStyle = "black"
    contex.fillRect(500, 0 ,2 ,200 )

    var imgCar = document.getElementById("scream");
    var imgTax = document.getElementById("vosvos");

    posVosvos = 0;
    posTaxi = 0;
    var moveVos = 1 + Math.floor(Math.random() * 5);
    var moveTax = 1 + Math.floor(Math.random() * 5);

    setInterval(function () {

        posVosvos += moveVos;
        posTaxi += moveTax;

        if (posVosvos > 500) {
            moveVos = 0;
            moveTax = 0;
            document.getElementById("text_p").innerHTML = `Vosvos kazandi.`
        }

        if (posTaxi > 500) {
            moveVos = 0;
            moveTax = 0;
            document.getElementById("text_p").innerHTML = `Taxi kazandi.`
        }

        if (posTaxi > 500 && posVosvos > 500) {
            moveVos = 0;
            moveTax = 0;
            document.getElementById("text_p").innerHTML = `Beraberlik.`
        }

        contex.drawImage(imgCar, posVosvos, 0, 50, 50);
        contex.drawImage(imgTax, posTaxi, 100, 50, 50);

    }, 50)

}