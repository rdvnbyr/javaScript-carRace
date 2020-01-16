
let startGame = () => {
    var canv = document.getElementById("myCanvas");
    var contex = canv.getContext("2d");
    contex.fillStyle = "black"
    contex.fillRect(750, 0 ,1 ,200 )

    var imgCar = document.getElementById("Vosvos");
    var imgTax = document.getElementById("taxi");

    posVosvos = 0;
    posTaxi = 0;


    setInterval(function () {
        var moveVos = 1 + Math.floor(Math.random() * 5);
        var moveTax = 1 + Math.floor(Math.random() * 5);
        posVosvos += moveVos;
        posTaxi += moveTax;

        if (posVosvos > 700) {
            moveVos = 0;
            moveTax = 0;
            document.getElementById("text_p").innerHTML = `Vosvos kazandi.`
        }

        if (posTaxi > 700) {
            moveVos = 0;
            moveTax = 0;
            document.getElementById("text_p").innerHTML = `Taxi kazandi.`
        }

        if (posTaxi > 700 && posVosvos > 700) {
            moveVos = 0;
            moveTax = 0;
            document.getElementById("text_p").innerHTML = `Beraberlik.`
        }

        contex.drawImage(imgCar, posVosvos, 0, 50, 50);
        contex.drawImage(imgTax, posTaxi, 100, 50, 50);

    }, 30)

}
