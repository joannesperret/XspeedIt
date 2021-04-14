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
        while (i < optimizeChaineArticles.length) {
            if (optimizeChaineArticles[i + 1] != undefined) {
                let j = i + 1;
                while (j < optimizeChaineArticles.length) {
                    if (optimizeChaineArticles[i] + optimizeChaineArticles[j] == 10) {
                        optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '/');
                      
                        optimizeChaineArticles.splice([j], 1, '');
                        i++;
                    } else {
                        if (optimizeChaineArticles[i + 2] != undefined && (optimizeChaineArticles[i] + optimizeChaineArticles[j] != 10)) {
                            let k = j + 1;
                            while (k < optimizeChaineArticles.length) {
                                if (optimizeChaineArticles[i] + optimizeChaineArticles[j] + optimizeChaineArticles[k] == 10) {
                                    optimizedColis.push(optimizeChaineArticles[i] + '' + optimizeChaineArticles[j] + '' + optimizeChaineArticles[k] + '/');
                                  
                                    optimizeChaineArticles.splice([k], 1, '');
                                    optimizeChaineArticles.splice([j], 1, '');
                                    i++;
                                } else {
                                    k++;
                                };
                            };
                            j++;
                        } else {
                            break;
                        };
                    };

                    if (i == optimizeChaineArticles.length - 1) {
                        let n = 0;
                        while (n < reliquatColis.length) {
                            let o = n + 1;
                            if (reliquatColis[n] + reliquatColis[o] <= 10) {
                                optimizedColis.push(reliquatColis[n] + '' + reliquatColis[o] + '/');
              
                                reliquatColis.splice([o], 1)
                                n++;
                            } else {
                     
                                optimizedColis.push(reliquatColis[n] + '/');
                            
                                n++;
                            };
                        };
                    };
                };
                if (optimizeChaineArticles[i] != undefined) {
                    if (optimizeChaineArticles[i] != '') {
                        reliquatColis.push(optimizeChaineArticles[i]);
                                 
                    };
                    i++;
                } else {
                    break;
                }
            } else {
                if (optimizeChaineArticles[i] != '') { reliquatColis.push(optimizeChaineArticles[i])             
            };
                reliquatColis = reliquatColis.sort(compareNombres);                
                if (i == optimizeChaineArticles.length - 1) {
                    let l = 0;
                    while (l < reliquatColis.length) {
                        let m = l + 1;
                        while (m < reliquatColis.length) {
                            if (reliquatColis[l] + reliquatColis[m] == 10) {
                                optimizedColis.push(reliquatColis[l] + '' + reliquatColis[m] + '/');                                              
                                reliquatColis.splice(m, 1);                                
                                if (l < reliquatColis.length) {
                                    l++;
                                };
                            } else {
                                m++;
                            }
                            m++;
                        }
                        if (reliquatColis[l] != undefined) {                            
                            m = l + 1;                           
                            if ((reliquatColis[l + 2] != undefined) && (reliquatColis[l] + reliquatColis[m] + reliquatColis[m + 1] <= 10)) {                                
                                optimizedColis.push(reliquatColis[l] + '' + reliquatColis[m] + reliquatColis[m + 1] + '/');             
                                reliquatColis.splice(m + 1, 1, '');
                                reliquatColis.splice(m, 1, '');                                                               
                                l++;                                
                            };                                                                                
                            if ((reliquatColis[l] + reliquatColis[m] <= 10) && (reliquatColis[l] + reliquatColis[m] ) != '') {
                                optimizedColis.push(reliquatColis[l] + '' + reliquatColis[m] + '/');     
                                reliquatColis.splice(m, 1);                                
                                l++;
                            } else {
                                if(reliquatColis[l] !=''){
                                optimizedColis.push(reliquatColis[l] + '/');                                                   
                                l++;}else{
                                    l++;}
                            };
                        } else {
                            l++;
                        };
                    };
                };
                break;
            };
        };
    };


    function afficher() {

        generateArticles();

        let affichageChaineArticles = document.getElementById("affichageChaineArticles");
        affichageChaineArticles.innerHTML = chaineArticles.join('');

        makeColis();

        let affichageColis = document.getElementById("affichageColis");

        if ((colis.join('').substr(-1, 1)) === "/") {
            affichageColis.innerHTML = colis.join('').slice(0, -1);
        }
        else {
            affichageColis.innerHTML = colis.join('');
        }

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

window.onload = init;