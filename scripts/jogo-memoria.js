document.addEventListener("DOMContentLoaded", function() {
    
    // CARREGA BOARD DO JOGO
    var board = [new Array(4), new Array(4), new Array(4), new Array(4)];
    const idToPositionMap = new Map([
        ["card-1", { row: 0, col: 0 }],
        ["card-2", { row: 0, col: 1 }],
        ["card-3", { row: 0, col: 2 }],
        ["card-4", { row: 0, col: 3 }],
        ["card-5", { row: 1, col: 0 }],
        ["card-6", { row: 1, col: 1 }],
        ["card-7", { row: 1, col: 2 }],
        ["card-8", { row: 1, col: 3 }],
        ["card-9", { row: 2, col: 0 }],
        ["card-10", { row: 2, col: 1 }],
        ["card-11", { row: 2, col: 2 }],
        ["card-12", { row: 2, col: 3 }],
        ["card-13", { row: 3, col: 0 }],
        ["card-14", { row: 3, col: 1 }],
        ["card-15", { row: 3, col: 2 }],
        ["card-16", { row: 3, col: 3 }],
    ]);
    var numberOfPlays = 0;

    const checkPlayerMove = (card1, card2) => {
        const pos1 = idToPositionMap.get(card1);
        const pos2 = idToPositionMap.get(card2);

        if(pos1 && pos2) {
            return board[pos1.row][pos1.col] === board[pos2.row][pos2.col];
        }
        return false;
    }

    var cardsOptionts = ["carro", "carro", "casa", "casa", "energia", "energia", "eolica", "eolica", "geotermica", "geotermica", "hidroeletrica", "hidroeletrica", "nuclear", "nuclear", "solar", "solar"];

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const shuffledCards = shuffle(cardsOptionts);

    const selectImage = (id, type) => {
        var image = "";
        switch(type) {
            case "carro":
                image = "carro.jpg";
                break;
            case "casa":
                image = "casa.jpg";
                break;
            case "energia":
                image = "energia.jpg";
                break;
            case "eolica":
                image = "eolica.jpg";
                break;
            case "geotermica":
                image = "geotermica.jpg";
                break;
            case "hidroeletrica":
                image = "hidreletrica.jpg";
                break;
            case "nuclear":
                image = "nuclear.jpg";
                break;
            case "solar":
                image = "solar.jpg";
                break;
        }
        
        var cardImg = document.getElementById("card-" + id);
        if (cardImg) {
            cardImg.src = "../assets/images/jogo-memoria-images/" + image;
        }
    }

    var id = 0;
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[i].length; j++) {
            var id = id + 1;

            if(board[i][j] == undefined) {
                board[i][j] = shuffledCards[0];

                shuffledCards.shift();

                selectImage(id, board[i][j]);
            }
        }
    }

    // TIMER
    var timePassed = 0
    const timer = setInterval(() => {
        timePassed = timePassed + 1;

        document.querySelector('#timer').textContent = timePassed;
    }, 1000);

    // AÇÕES DE CLIQUE
    const cards = document.querySelectorAll(".card");
    let visibleCards = [];
    let clickedIds = [];
    var matchesFound = 0;

    cards.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.add('visible');
            this.classList.add('disabled');

            visibleCards.push(this);
            clickedIds.push(this.querySelector('.card-front').querySelector('img').id);

            if(visibleCards.length == 2) {
                numberOfPlays = numberOfPlays + 1;

                document.querySelector('.game-container').classList.add('disabled');
                document.querySelector('#flips').textContent = numberOfPlays

                var check = checkPlayerMove(clickedIds[0], clickedIds[1]);
                if(check) {
                    matchesFound = matchesFound + 1;
                    visibleCards.forEach(element => {
                        element.style.borderColor = "#7be663";

                        element.style.opacity = 0;
                    });
                    if(matchesFound == 8) {
                        setTimeout(() => {
                            document.querySelector('.blur-effect').style.display = "block";
                            document.querySelector('.victory').style.display = "block";

                            clearInterval(timer);
                        }, 1500);
                        
                    }
                }

                setTimeout(() => {
                    visibleCards.forEach(card => card.classList.remove('visible'));
                    visibleCards.forEach(card => card.classList.remove('disabled'));

                    visibleCards = [];
                    clickedIds = [];

                    document.querySelector('.game-container').classList.remove('disabled');

                }, 1500);
            }
        });
    });
});