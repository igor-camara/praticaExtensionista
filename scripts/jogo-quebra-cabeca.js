const board = [new Array(3), new Array(3), new Array(3), new Array(3)];

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");  

  if(ev.target.hasChildNodes()) {
    ev.target.parentElement.appendChild(document.getElementById(data));
    document.querySelector('.figures').appendChild(ev.target);
  }else {
    ev.target.appendChild(document.getElementById(data));
  }
}

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

function randomImage() {
    const grid = document.querySelector('.board');
    const container = document.querySelector('.figures');

    var random_image_id = Math.floor(Math.random() * 5) + 1;

    var width = grid.offsetWidth;
    var height = grid.offsetWidth;

    var images = [];
    for(var i = 0; i <= 2; i++) {
        for(var j = 0; j <= 3; j++) {
            board[j][i] = "figure-" + i + "_" + j;
            var img = document.createElement("img");
            img.setAttribute("src", "../assets/images/jogo-quebra-cabeca-images/image-" + random_image_id + "/imagem_"+ i + "_" + j +".jpg");
            img.setAttribute("id", "figure-"+ i + "_" + j);
            img.setAttribute("class", "figure");
            img.setAttribute("draggable", "true");
            img.setAttribute("ondragstart", "drag(event)");
            img.setAttribute("width", width - 350);
            img.setAttribute("height", height - 350);
            var p = document.createElement("p");
            img.appendChild(p);

            images.push(img);
        }
    }

    var shuffled = shuffle(images);

    shuffled.forEach(image => container.appendChild(image));
}

function wrongPiece(element) {
    setTimeout(() => document.querySelector(element).classList.add('wrong'), 0);
    document.querySelector(element).classList.remove('wrong');
}

function correctPiece(element) {
    setTimeout(() => document.querySelector(element).classList.add('correct'), 0);
    document.querySelector(element).classList.remove('correct');
}

function verify() {
    var position_cords = [];
    var image_cords = [];

    const verify = document.querySelector('#verify');

    verify.addEventListener('click', function() {

        const grid_collection = document.querySelectorAll('.grid-position');

        grid_collection.forEach(element => {
            position_cords.push(element.id.replace("position-", ""));

            var child = element.querySelector('img');

            if(child == undefined) {
                image_cords.push('undefined');
            }else {    
                image_cords.push(child.id.replace("figure-", ""));
            }
        });

        var corrects = 0;
        for(var i = 0; i < position_cords.length; i++) {
            
            if(position_cords[i] != image_cords[i] && image_cords[i] != 'undefined') {
                wrongPiece("#position-" + position_cords[i]);
            }
            if(position_cords[i] == image_cords[i]) {
                corrects = corrects + 1;
                correctPiece("#position-" + position_cords[i]);
            }

            if(corrects == position_cords.length) {
                setTimeout(() => {
                    var finished = document.querySelector('.finished');

                    document.querySelector('.blur-effect').style.display = "block";
                    document.querySelector('.finished').style.display = "block";

                    finished.insertBefore(document.createTextNode("Bom trabalho!!!"), document.querySelector(".back-to-menu"));

                    clearInterval(timer);
                }, 1500);
                corrects = 0;
            }
        }
        position_cords = [];
        image_cords = [];
    });
}

document.addEventListener("DOMContentLoaded", function() {
    randomImage();

    verify();
});