function init() {

    // déclaration des variables globales

    let chaineArticles = new Array;
    let optimizeChaineArticles = new Array;
    let colis = new Array;
    let optimizedColis = new Array;

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
           // console.log(chaineArticles);
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
                // console.log(i);
                // console.log('1ère condition');
                i = i + 3;
            } else {
                if (chaineArticles[i] + (chaineArticles[i + 1]) > 10) {
                    // console.log('colis trop rempli');
                    // console.log('i = ' + chaineArticles[i]);
                    // console.log('i + 1 = ' + chaineArticles[i + 1]);
                    // console.log(chaineArticles);
                    colis.push(chaineArticles[i] + '/')
                    // console.log(i);
                    // console.log('2e condition');
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
                        // console.log(i);
                        // console.log('3e condition');
                        i = i + 2;
                    } else {
                        // console.log(chaineArticles[i]);
                        colis.push(chaineArticles[i]);
                        // console.log('4e condition');
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
        optimizeChaineArticles = chaineArticles;
        while (i < optimizeChaineArticles.length) {
            if (((optimizeChaineArticles[i] + optimizeChaineArticles[i + 1] + optimizeChaineArticles[i + 2]) == 10)
                && ((optimizeChaineArticles[i + 2] != undefined))) {
                // console.log('colis de 3 séquences');
                optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[i + 1] + '' + optimizeChaineArticles[i + 2] + '/');
                //  console.log('i = ' + i);
                console.log('1ère condition');
                i = i + 3;
            } else {
                if (optimizeChaineArticles[i + 1] != undefined) {
                    if (optimizeChaineArticles[i] + optimizeChaineArticles[i + 1] == 10) {
                        optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[i + 1] + '/')
                        //  console.log('i = ' + i);
                        console.log('2e condition');
                        i = i + 2;
                    }
                    else {
                        // Ecriture de l'algo d'optimisation des séquences à apairer
                        // suprimer pos(i)

                        if (optimizeChaineArticles[i + 1] != undefined) {
                            let j;
                            for (j = i + 1; j < optimizeChaineArticles.length; j + 1) {
                                // console.log('optimizeChaineArticles' + optimizeChaineArticles);
                                if (optimizeChaineArticles[i] + optimizeChaineArticles[j] == 10) {
                                    optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '/');
                                    console.log('Article à supprimer: ' + optimizeChaineArticles.splice(j, 1));
                                    optimizeChaineArticles.splice(j, 1);
                                    console.log('boucle interne 1');
                                    //  console.log('optimizeChaineArticles' + optimizeChaineArticles);
                                    //  console.log('optimizeChaineArticles[i]' + optimizeChaineArticles[i]);
                                    //  console.log('optimizeChaineArticles[j]' + optimizeChaineArticles[j]);
                                    i++;
                                } else {
                                    if (optimizeChaineArticles[j + 1] != undefined && (optimizeChaineArticles[i] + optimizeChaineArticles[j] <= 10)) {
                                       
                                        // Si le lot d'articles ne se complète pas avec le suivant

                                        let k = j+1;                       

                                        for(k=0;k<optimizeChaineArticles.length;k++){
                                            if(optimizeChaineArticles[i]+optimizeChaineArticles[j]+optimizeChaineArticles[k] == 10 ){
                                                optimizedColis.push(optimizeChaineArticles[i]+''+optimizeChaineArticles[j]+''+optimizeChaineArticles[k]+'/');
                                                i=i+3;
                                                console.log('optimisation groupe de 3 séquences articles')
                                            }else{k++; console.log('k = '+ k)};

                                        };                                       
                                        // optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '/');
                                        // console.log('boucle interne 2');                                        
                                        // optimizeChaineArticles.splice(j, 1);
                                        // console.log('Article à supprimer: ' + optimizeChaineArticles.splice(j, 1));
                                        // console.log('Colis optimisé ' + optimizedColis );
                                        j++;
                                        // console.log('optimizeChaineArticles' + optimizeChaineArticles);
                                        // console.log('optimizeChaineArticles[i]' + optimizeChaineArticles[i]);
                                        // console.log('optimizeChaineArticles[j]' + optimizeChaineArticles[j]);
                                        
                                    } else {
                                        // gestion des articles ne pouvant être complétés.*
                                        // Algo d'optimisation à créer
                                        
                                    



                                        console.log(optimizeChaineArticles[i]);                    
                                        break;
                                    }

                                }

                            };
                            optimizedColis.push(optimizeChaineArticles[i] + '/');
                            i++;
                            // console.log('i = ' + i);
                            // console.log('j = ' + j);
                            // console.log('3e condition');
                            // console.log('optimizeChaineArticles[i]' + optimizeChaineArticles[i]);
                            // console.log('optimizeChaineArticles[j]' + optimizeChaineArticles[j]);
                            // optimizedColis.push(optimizeChaineArticles[i]);
                            // i++;
                        } else {
                            // gestion du dernier article
                           // console.log('optimizeChaineArticles[i]' + optimizeChaineArticles[i]);
                           // optimizedColis.push(optimizeChaineArticles[i]);
                            console.log('4e condition');
                            break;
                        };
                    };
                } else {
                    // gestion du dernier article
                   // console.log('optimizeChaineArticles[i]' + optimizeChaineArticles[i]);
                    optimizedColis.push(optimizeChaineArticles[i]);
                    console.log('5e condition');
                    console.log('Chaine: '+ optimizeChaineArticles);
                    break;
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
         //   console.log('Précolisage ' + colis);
        }
       // console.log('Colis ' + colis);
       // console.log('Détail articles ' + chaineArticles);

        let affichageNbColis = document.getElementById("affichageNbColis");
        affichageNbColis.innerHTML = colis.length + ' cartons utilisés.';

        optimizeColis();

        let affichageColisOptimized = document.getElementById("affichageOptimizedColis");
        affichageColisOptimized.innerHTML = optimizedColis.join('');

        let affichageNbColisOptimized = document.getElementById("affichageNbColisOptimized");
        affichageNbColisOptimized.innerHTML = optimizedColis.length + ' cartons utilisés.';

    }

};

/// init

window.onload = init;


