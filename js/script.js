window.onload = function () {
    /*fct qui prend en parametre un nombre
      et affiche dans le catalogue le film associé à ce nombre
  
  
      */
    for (var i = 0; i < filmData.length; i++) {
        createFilm(i);
    }
    function createFilm(number) {
        var someFilm = filmData[number];
        //création d'un film
        var film = document.createElement("div");
        film.className = "film";
        film.id = number + "-film";

        //creation image
        var image = document.createElement("img");
        image.src = someFilm.image;
        image.alt = someFilm.title;

        //creation du titre du film
        var titre = document.createElement("h3");
        titre.innerHTML = someFilm.title;

        film.appendChild(image);
        film.appendChild(titre);
        document.getElementById("films").appendChild(film);
    }
    var input = document.getElementsByTagName("input");
    var films = document.getElementById("films");
    var selection = document.getElementById("selection");
    input[0].addEventListener("keyup", recherche);
    input[1].addEventListener("mouseup", checkbox);
    films.addEventListener("mouseover", survolFilm);
    films.addEventListener("mouseout", finSurvol);
    films.addEventListener("click", selectionFilm);
    selection.addEventListener("click", clickSelection);

    function recherche(event) {
        var inputValue = event.target.value;
        inputValue = inputValue.toLowerCase();
        console.log(inputValue);
        //input n'est pas vide
        for (var i = 0; i < filmData.length; i++) {
            var titre = filmData[i].title;
            titre = titre.toLowerCase();
            var film = document.getElementById(i + "-film");
            if (titre.includes(inputValue) == false) {
                film.style.display = "none";
            } else {
                film.style.display = "inline-block";
            }
        }
    } // function recherche
    function checkbox(event) {
        var details = document.getElementById("details");
        console.log(event.target.checked);
        if (event.target.checked) {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    } // fin checkbox

    function survolFilm(event) {
        var elementSurvolee = event.target.parentNode;
        var identifiantFilm = elementSurvolee.id;
        var position;
        if (identifiantFilm == "catalog") {
            return;
        } else if (identifiantFilm.length == 6) {
            position = identifiantFilm[0];
        } else if (identifiantFilm.length == 7) {
            position = identifiantFilm[0] + identifiantFilm[1];
        } else {
            return;
        }
        var descriptionFilm = filmData[position].text;
        document.getElementById("details").innerHTML = descriptionFilm;
        //console.log(description);
    } //fin fonction survolFilm

    function finSurvol(event) {
        document.getElementById("details").innerHTML = "";
    } //fin fonction finSurvol

    function selectionFilm(event) {
        var film = event.target.parentNode;
        var select1 = document.getElementById("selection1");
        var select2 = document.getElementById("selection2");
        film.addEventListener("mouseover", survolFilm);
        film.addEventListener("mouseout", finSurvol);

        var select1Child = select1.childNodes;
        var select2Child = select2.childNodes;

        if (select1Child.length == 1) {
            //partie seclection1 est vide
            select1.insertBefore(film, select1Child[0]);
        } else if (select2Child.length == 1) {
            //partie seclection2 est vide
            select2.insertBefore(film, select2Child[0]);
        } else {
            alert("Désolé, vous avez déjà 2 films !");
        }
        //console.log(select2Child);
    } // fin selecte film
    function clickSelection(event) {
        var elementClick = event.target;
        var film = elementClick.parentNode;

        var select = film.parentNode;
        var selectChild = select.childNodes;

        if (selectChild[0].className == "film") {
            var copyFilm = selectChild[0];
            select.removeChild(copyFilm);
            document.getElementById("films").appendChild(copyFilm);
        }
        //console.log(selectChild);
    }
};
