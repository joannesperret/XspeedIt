function init() {

    // déclaration des variables globales

    let chaineArticles = new Array;
    let optimizeChaineArticles = new Array;
    let colis = new Array;
    let optimizedColis = new Array;
    let reliquatColis = new Array;

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
            //console.log('push ligne 24');
        }
    };

    // fonction de colisage initiale

    function makeColis() {
        let i = 0;
        colis = [];
        while (i < chaineArticles.length) {
            if (((chaineArticles[i] + chaineArticles[i + 1] + chaineArticles[i + 2]) <= 10)
                && ((chaineArticles[i + 2] != undefined))) {
                //console.log('colis de 3 séquences');
                // console.log('i = ' + chaineArticles[i]);
                // console.log('i + 1 = ' + chaineArticles[i + 1]);
                // console.log(chaineArticles);
                colis.push(chaineArticles[i] + '' + chaineArticles[i + 1] + '' + chaineArticles[i + 2] + '/');
                // console.log('push ligne 41');
                // console.log('1ère condition');
                i = i + 3;
            } else {

                if (chaineArticles[i] + (chaineArticles[i + 1]) > 10) {
                    // console.log('colis trop rempli');
                    // console.log('i = ' + chaineArticles[i]);
                    // console.log('i + 1 = ' + chaineArticles[i + 1]);
                    // console.log(chaineArticles);

                    colis.push(chaineArticles[i] + '/')

                    // console.log('push ligne 51');
                    // console.log('2e condition');
                    i++;
                }
                else {
                    if (chaineArticles[i + 1] != undefined) {

                        // console.log('i = ' + chaineArticles[i]);
                        // console.log('i + 1 = ' + chaineArticles[i + 1])
                        colis.push(chaineArticles[i] + '' + chaineArticles[i + 1] + '/');
                        // console.log('push ligne 61');
                        // console.log(chaineArticles);
                        // console.log('on continue le remplissage');
                        // console.log(i);
                        // console.log('3e condition');
                        i = i + 2;
                    } else {
                        // console.log(chaineArticles[i]);
                        colis.push(chaineArticles[i]);
                        // console.log('push ligne 70');
                        i++;
                    };
                };
            };
        };
    };

    // fonction optimisée

    function optimizeColis() {
        let i = 0;
        optimizedColis = [];
        optimizeChaineArticles = [];
        reliquatColis = [];
        optimizeChaineArticles = chaineArticles;
        while (i < optimizeChaineArticles.length) {            
            if (optimizeChaineArticles[i + 1] != undefined) {
                let j;
                for (j = i + 1; j < optimizeChaineArticles.length; j + 1) {
                    if (optimizeChaineArticles[i] + optimizeChaineArticles[j] == 10) {
                        optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '/');
                        console.log('Articles push: '+optimizeChaineArticles[i] + '' + optimizeChaineArticles[j])
                        optimizeChaineArticles.splice(j, 1);
                        console.log('ligne 113 algo optimisation 2 colis = 10');
                        i++;
                    } else {
                        if (optimizeChaineArticles[i + 2] != undefined && (optimizeChaineArticles[i] + optimizeChaineArticles[j] != 10)) {

                            // Si le lot d'articles ne se complète pas avec le suivant

                            let k;

                            for (k = j + 1; k < optimizeChaineArticles.length-1; k++) {
                                if (optimizeChaineArticles[i] + optimizeChaineArticles[j] + optimizeChaineArticles[k] == 10) {
                                    optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '' + optimizeChaineArticles[k] + '/');
                                    optimizeChaineArticles.splice(j, 1);
                                    optimizeChaineArticles.splice(k, 1);
                                    i++;
                                    console.log('ligne 109 concaténation 3 lots = 10');
                                    console.log('Push lot de 3 '+ optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '' + optimizeChaineArticles[k]);
                                } else {
                                    k++;                                    
                                };
                            };
                            j++;
                        } else {
                            //relance la boucle                                             
                            break;
                        }console.log('test');
                    }// algo d'optimisation des reliquats à positionner ici sur lots de 2                     
                if(i == optimizeChaineArticles.length){

                    console.log('Positionnement algo reliquat 2')
                };                    
                };
                if(optimizeChaineArticles[i]!=undefined){
                    optimizedColis.push(optimizeChaineArticles[i] + '/');
                    console.log('ligne 126 si pas d\'optimisation par 2 et par 3 = 10');
                    console.log(optimizeChaineArticles[i]);
                    // Création d'un tableau reprenant les lot non optimisables
                    reliquatColis.push(optimizeChaineArticles[i]);
                    // console.log('reliquat: ' + reliquatColis)
                    i++;
                }else{
                    i++;
                }
            
               
            } else {
                // optimizedColis.push(optimizeChaineArticles[i] + '!'); 
                console.log('4e condition');
                optimizedColis.push(optimizeChaineArticles[i]);
                console.log(optimizeChaineArticles[i]);
                reliquatColis.push(optimizeChaineArticles[i]);
                console.log('ligne 154 dernier article?');
                console.log('Chaine: ' + optimizeChaineArticles);
                console.log('reliquat: ' + reliquatColis);
                console.log('Dernier article?' + optimizeChaineArticles[i]);
                console.log('dernière ligne?');
                // Algo optimisation si dernier lot = 1
                if(i == optimizeChaineArticles.length-1){
                    console.log('Positionnement algo reliquat 1');
                    let l = 0;
                    let m = l + 1;
                    while(l < reliquatColis.length){
                        if(reliquatColis[l] + reliquatColis[m] <= 10){
                            optimizedColis.push(reliquatColis[l]+''+reliquatColis[m]+'/');
                            reliquatColis.slice(m,1);
                            l++
                        }else{
                            optimizedColis.push(reliquatColis[l]+'/');
                            l++
                        }                        
                    }
                }
                break;
            };           
        };       
    };

    // fonction d'affichage

    function afficher() {

        console.log('Let\'s go!')
        generateArticles();

        let affichageChaineArticles = document.getElementById("affichageChaineArticles");
        affichageChaineArticles.innerHTML = chaineArticles.join('');
        // console.log('dernier caractère à supprimer')

        makeColis();

        let affichageColis = document.getElementById("affichageColis");

        if ((colis.join('').substr(-1, 1)) === "/") {
            affichageColis.innerHTML = colis.join('').slice(0, -1);
        }
        else {
            affichageColis.innerHTML = colis.join('');
            //   console.log('Précolisage ' + colis);
        }
        // console.log('Colis ' + colis);
        // console.log('Détail articles ' + chaineArticles);

        let affichageNbColis = document.getElementById("affichageNbColis");
        affichageNbColis.innerHTML = colis.length + ' cartons utilisés.';

        optimizeColis();

        let affichageColisOptimized = document.getElementById("affichageOptimizedColis");

        if ((optimizedColis.join('').substr(-1, 1)) === "/") {
            affichageColisOptimized.innerHTML = optimizedColis.join('').slice(0, -1);
        }
        else {
            affichageColisOptimized.innerHTML = optimizedColis.join('');
        }

        let affichageNbColisOptimized = document.getElementById("affichageNbColisOptimized");
        affichageNbColisOptimized.innerHTML = optimizedColis.length + ' cartons utilisés.';

    }
};

/// init

window.onload = init;


