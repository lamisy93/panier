(function() {

	var panier = [];

	var total = 0;

	var quantité = 0;

	var start = function () {


		var getProduits = function (n, q, p) {

			var article = {nom: n,
				           quantite: q,
				           prix: p,
				          };

			panier.push(article);


			var ul = document.getElementById("liste");
			var li = document.createElement("li");
	        var li = ul.appendChild(li);

	        li.innerHTML = `Votre panier comporte ${article.quantite} ${article.nom} pour une valeur de ${article.prix} euros`;

           
            console.log(panier);


     		total = total + article.prix;
            quantité = panier.length;

            document.getElementById("divT").innerHTML = "Total: " + total.toFixed(2) + " euros";
            document.getElementById("divQ").innerHTML = "Quantité: " + quantité + " articles";


            };

            document.getElementById("pomme").addEventListener("click", getProduits.bind("evt", "pomme", 1, 0.80));
            document.getElementById("banane").addEventListener("click", getProduits.bind("evt", "ananas", 1, 0.99));
            document.getElementById("ananas").addEventListener("click", getProduits.bind("evt", "fraise", 1, 1.20));
            document.getElementById("fraise").addEventListener("click", getProduits.bind("evt", "banane", 1, 0.40));
            
           
			};
		

	window.addEventListener("DOMContentLoaded", start);



}());