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
                colis.push(chaineArticles[i] + '' + chaineArticles[i + 1] + '' + chaineArticles[i + 2] + '/');
                i = i + 3;
            } else {
                if (chaineArticles[i] + (chaineArticles[i + 1]) > 10) {
                    colis.push(chaineArticles[i] + '/')
                    i++;
                }
                else {
                    if (chaineArticles[i + 1] != undefined) {
                        colis.push(chaineArticles[i] + '' + chaineArticles[i + 1] + '/');
                        i = i + 2;
                    } else {
                        colis.push(chaineArticles[i]);
                        i++;
                    };
                };
            };
        };
    };

    // fonction de comparaison des nombres pour tri du tableau reliquat
    function compareNombres(a, b) {
        return b - a;
      }

    // fonction optimisée

    function optimizeColis() {
        let i = 0;
        optimizedColis = [];
        optimizeChaineArticles = [];
        reliquatColis = [];
        optimizeChaineArticles = chaineArticles;
        console.log('chaineArticles démarrage: ' + chaineArticles);
        console.log('optimizeChaineArticles démarrage: ' + optimizeChaineArticles);
        while (i < optimizeChaineArticles.length) {
            if (optimizeChaineArticles[i + 1] != undefined) {
                let j = i + 1;
                // for (j = i + 1; j < optimizeChaineArticles.length; j + 1) {
                while (j < optimizeChaineArticles.length){
                    if (optimizeChaineArticles[i] + optimizeChaineArticles[j] == 10) {
                        optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '/');
                        console.log('Articles push: ' + optimizeChaineArticles[i] + '' + optimizeChaineArticles[j]);
                        console.log('L 78 Splice J: '+optimizeChaineArticles.splice([j],1,''));
                        optimizeChaineArticles.splice([j],1,''); 
                        console.log('Chaîne: ' + optimizeChaineArticles);                       
                        //   console.log('ligne 113 algo optimisation 2 colis = 10');
                       // break;
                       i++;
                    } else {
                        if (optimizeChaineArticles[i + 2] != undefined && (optimizeChaineArticles[i] + optimizeChaineArticles[j] != 10)) {

                            // Si le lot d'articles ne se complète pas avec le suivant
                            // Création d'un groupe de 3 lots d'articles = 10

                            // let k;
                            let k = j + 1;
                                                        
                           // for (k = j + 1; k < optimizeChaineArticles.length; k++) {
                            while(k < optimizeChaineArticles.length){
                                if (optimizeChaineArticles[i] + optimizeChaineArticles[j] + optimizeChaineArticles[k] == 10) {
                                    optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '' + optimizeChaineArticles[k] + '/');
                                    // console.log('ligne 109 concaténation 3 lots = 10');
                                    console.log('Push lot de 3 ' + optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '' + optimizeChaineArticles[k]);
                                    console.log('L 95 k splice = ' + optimizeChaineArticles.splice([k],1,''));
                                    optimizeChaineArticles.splice([k],1,'');
                                    console.log('L 97 j splice = ' + optimizeChaineArticles.splice([j],1,''));
                                    optimizeChaineArticles.splice([j],1,'');
                                    console.log('Chaîne: ' + optimizeChaineArticles); 
                                    //break;
                                    i++;
                                } else {
                                    //console.log('k++ = ' + k);
                                    k++;
                                    
                                };
                            };
                            //console.log('j++ = ' + j);
                            j++;
                        } else {
                            //relance la boucle                                             
                            break;
                        };
                       // console.log('Point');
                    }// algo d'optimisation des reliquats à positionner ici sur lots de 2 

                    if (i == optimizeChaineArticles.length-1) {
                        console.log('Positionnement algo reliquat 2')
                        let n = 0;                        
                        while (n < reliquatColis.length) {
                            let o = n + 1;
                            if (reliquatColis[n] + reliquatColis[o] <= 10) {
                                optimizedColis.push(reliquatColis[n] + '' + reliquatColis[o] + '/');
                                console.log('Opti 2 ' + reliquatColis[n] + '' + reliquatColis[o] + '/');
                                reliquatColis.splice([o], 1)
                               // console.log('Sup 2 ' + reliquatColis.splice(o, 1))
                               // console.log('length ' + reliquatColis.length);
                               // console.log('n' + n);
                                console.log('Chaîne: ' + optimizeChaineArticles); 
                               // reliquatColis.splice(o, 1);
                                n++;
                            } else {
                                optimizedColis.push(reliquatColis[n] + '/');
                                console.log('non opti' + reliquatColis[n]);
                                console.log('Chaîne: ' + optimizeChaineArticles); 
                                n++;
                            };
                        };
                    };
                };
                if (optimizeChaineArticles[i] != undefined) {
                    // optimizedColis.push(optimizeChaineArticles[i] + '/');
                    // console.log('ligne 126 si pas d\'optimisation par 2 et par 3 = 10');
                    //console.log(optimizeChaineArticles[i]);
                    // Création d'un tableau reprenant les lot non optimisables
                    if(optimizeChaineArticles[i]!=''){
                    reliquatColis.push(optimizeChaineArticles[i]);
                    console.log('Chaîne: ' + optimizeChaineArticles); 
                    // console.log('reliquat: ' + reliquatColis)
                    };
                    i++;
                } else {
                    break;
                   // i++;
                    
                }
            } else {
                // optimizedColis.push(optimizeChaineArticles[i] + '!'); 
                // console.log('4e condition');
                // optimizedColis.push(optimizeChaineArticles[i]);
                // console.log(optimizeChaineArticles[i]);
                if(optimizeChaineArticles[i]!=''){reliquatColis.push(optimizeChaineArticles[i])};
                // console.log('ligne 154 dernier article?');
                console.log('Chaine: ' + optimizeChaineArticles);
               // console.log('reliquat: ' + reliquatColis);
                // console.log('Dernier article?' + optimizeChaineArticles[i]);
                // console.log('dernière ligne?');
                // Algo optimisation si dernier lot = 1
                reliquatColis = reliquatColis.sort(compareNombres);
                console.log('reliquat trié : ' + reliquatColis);
                if (i == optimizeChaineArticles.length-1) {
                    console.log('Positionnement algo reliquat 1');
                    let l = 0;
                    while (l <= reliquatColis.length) {
                      //  console.log('while l: ' + reliquatColis[l]);
                        let m = l + 1;
                        while (m < reliquatColis.length) {
                         //   console.log('while m: '+ reliquatColis[m]);
                            if (reliquatColis[l] + reliquatColis[m] <= 10) {
                                optimizedColis.push(reliquatColis[l] + '' + reliquatColis[m] + '/');
                               // console.log('Opti 2 ' + reliquatColis[l] + '' + reliquatColis[m] + '/');
                             //   console.log('Sup 2 ' + reliquatColis.splice(m, 1))
                                // console.log('l ' + l);
                                reliquatColis.splice(m, 1);
                             //   console.log('reliquatColis ' + reliquatColis);                                
                                if(l<reliquatColis.length){
                                    console.log('L 172 + ' + reliquatColis[l]);
                                l++;                                    
                                };
                            } else {
                              //  optimizedColis.push(reliquatColis[l] + '/');
                              //  console.log('non opti' + reliquatColis[l]);                                
                              //  console.log(reliquatColis);
                           //   console.log('L 179 + ' + reliquatColis[l]);
                              m++;
                            }
                         //   console.log('L 182 +' + reliquatColis[l]);                            
                            m++;
                        }
                        if(reliquatColis[l]!=undefined){
                        optimizedColis.push(reliquatColis[l] + '/');
                      //  console.log('non opti' + reliquatColis[l]);                                
                      //  console.log('reliquatColis' + reliquatColis);
                      //  console.log('L 189 +' + reliquatColis[l]);
                        l++;}else{
                       //     console.log('L 191 +' + reliquatColis[l]);
                            l++;
                        }
                    };
                    //  break;
                };
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
        // console.log(optimizeChaineArticles);

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


