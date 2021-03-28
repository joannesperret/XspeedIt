function init() {

    // déclaration des variables globales

    let chaineArticles = new Array;
    let colis = new Array;

    // script optimisation colisage articles

    // le clic sur la Div Btn déclenche le script

    document.getElementById("divBtn").onclick = afficher;

    // fonction de génération d'une chaine d'articles

    function generateArticles() {
        chaineArticles = [];
        for (i = 0; i < 15; i++) {
            let randomColis;
            randomColis = Math.floor((Math.random() * (10 - 1) + 1));
            chaineArticles.push(randomColis);
            console.log(chaineArticles);
        }
    };

    // fonction de colisage initiale

    function makeColis() {
        let i = 0;
        colis = [];
        while (i < chaineArticles.length) {
            if (((chaineArticles[i] + chaineArticles[i + 1] + chaineArticles[i + 2]) <= 10) 
            && ((chaineArticles[i + 2] != undefined))) { 
                console.log('colis de 3 séquences');
                // console.log('i = ' + chaineArticles[i]);
                // console.log('i + 1 = ' + chaineArticles[i + 1]);
                // console.log(chaineArticles);
                colis.push(chaineArticles[i] + '' + chaineArticles[i + 1] + '' + chaineArticles[i + 2] + '/');
                console.log(i);
                console.log('1ère condition');
                i = i + 3;
            } else {
                if (chaineArticles[i] + (chaineArticles[i + 1]) > 10) {
                    // console.log('colis trop rempli');
                    // console.log('i = ' + chaineArticles[i]);
                    // console.log('i + 1 = ' + chaineArticles[i + 1]);
                    // console.log(chaineArticles);
                    colis.push(chaineArticles[i] + '/')
                    console.log(i);
                    console.log('2e condition');
                    i++;
                }
                else {
                    if (chaineArticles[i + 1] != undefined) {

                        // console.log('i = ' + chaineArticles[i]);
                        // console.log('i + 1 = ' + chaineArticles[i + 1])
                        colis.push(chaineArticles[i] + '' + chaineArticles[i + 1] + '/');
                        // console.log('colis' + colis);
                        // console.log(chaineArticles);
                        // console.log('on continue le remplissage');
                        console.log(i);
                        console.log('3e condition');
                        i = i + 2;
                    } else {
                        console.log(chaineArticles[i]);
                        colis.push(chaineArticles[i]);
                        console.log('4e condition');
                        i++;
                    };
                };
            };
        };
    };

    // fonction d'affichage


    function afficher() {

        generateArticles();

        let affichageChaineArticles = document.getElementById("affichageChaineArticles");
        affichageChaineArticles.innerHTML = chaineArticles.join('');
        console.log('dernier caractère à supprimer')

        makeColis();

        let affichageColis = document.getElementById("affichageColis");

        if ((colis.join('').substr(-1, 1)) === "/") {
            affichageColis.innerHTML = colis.join('').slice(0, -1);
        }
        else {
            affichageColis.innerHTML = colis.join('');
            console.log('Précolisage ' + colis);
        }
        console.log('Colis ' + colis);
        console.log('Détail articles ' + chaineArticles);

        let affichageNbColis = document.getElementById("affichageNbColis");
        affichageNbColis.innerHTML = colis.length + ' cartons utilisés.';
    }

};

/// init

window.onload = init;


