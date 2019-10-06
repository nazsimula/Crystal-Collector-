//global variable

$(document).ready(function () {
    var crystals = ['Assets/image/red.png', 'Assets/image/blue.png', 'Assets/image/yellow.png', 'Assets/image/green.png'];

    var counter = 0;
    var wins = 0;
    var losses = 0;

    $("#win").text(wins);
    $("#loss").text(losses);

    newCrystals();
    newGame();

    function newCrystals() {
        var numbers = []

        while (numbers.length < 4) {
            var randomNumber = Math.floor(Math.random() * 15)
            var found = false;

            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] == randomNumber) {
                    found = true; break
                }
            }

            if (!found) numbers[numbers.length] = randomNumber;
        }


        for (i = 0; i < numbers.length; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.attr("data-num", numbers[i]);
            imageCrystal.attr("src", crystals[i]);
            imageCrystal.attr("alt", "crystals");
            imageCrystal.addClass("crystalImage");
            $("#crystals").append(imageCrystal);
        }
    }

    function newGame() {
        counter = 0;
        $("#yourScore").text(counter);

        function randomInFormInterval(min, max) {
            return Math.floor(Math.random() * (max - min) + 1);
        }
        var numberToGuess = randomInFormInterval(19, 120);

        $(".value").text(numberToGuess);
        $(".crystalImage").on("click", function () {
            counter = counter + parseInt($(this).data("num"));
            $("#yourScore").text(counter);

            if (counter == numberToGuess) {
                $('#status').text('You won!!!!');
                wins++;

                $('#win').text(wins);
                console.log(wins)
                $('#crystals').empty();
                newCrystals();
                newGame();
            
        } else if (counter > numberToGuess) {
            $('#status').text('You lost!');
            losses++;
            $('#loss').text(losses);
            console.log(losses)
            $('#crystals').empty();
            newCrystals();
            newGame();

        }

    });
    }
});