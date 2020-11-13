// fonction de récupération du INPUT
// @param: int
// Déclaration des variables globales



function init() {


// script conversion Romaine en nombre

// le clic sur la Div Btn déclenche le script

   document.getElementById("divBtn").onclick = convertir;
   
// récupération de la valeur saisie

    var saisie = document.getElementById("in").value;
    // var result="";

// fonction de récupération de la valeur saisie
    function getValue() {
        document.getElementById("in").value;
    }



// fonction d'affichage

    function afficher() {
        var pResultats = document.getElementById("pResultats");
        pResultats.innerHTML = (saisie + " s'écrit: " + unit + " en nombres.");
    }
    ;

    // Fonction de conversion des unités Romaines en chiffres
    function unit() {
        // récupération de la valeur saisie
        var input = document.getElementById("in").value;
        // récupération de l'objet HTML d'affichage du résultat
        var pResultats = document.getElementById("pResultats");
        // déclaration des variables
        // unité
        var unitRom = 0;
        // récupération du dernier caractère de la saisie
        var unit1 = (input.substr(-1, 1));
        switch (unit1) {

            case 'I':
                unitRom = 1;
                break;
            case 'V':
                unitRom = 5;
                break;
//            case 'X':
//                unitRom = 10;
//                break;
        }
        // récupération des deux derniers caractères de la saisie               
        var unit2 = (input.substr(-2));
        switch (unit2) {
            case 'II':
                unitRom = 2;
                break;
            case 'IV':
                unitRom = 4;
                break;
            case 'VI':
                unitRom = 6;
                break;
            case 'IX':
                unitRom = 9;
                break;
        }

        // récupération des deux derniers caractères de la saisie
        var unit3 = (input.substr(-3));
        switch (unit3) {
            case 'III':
                unitRom = 3;
                break;
            case 'VII':
                unitRom = 7;
                break;
            case 'IIX':
                unitRom = 8;
                break;
        }
    
        console.log("unit1: "+unit1);
        
        console.log("unit3: "+unit3);
        console.log("unit2: "+unit2);
        console.log("unit1: "+unit1);
        console.log("unitRom: "+unitRom);
 
         
        
        console.log("unitRom: "+unitRom);
        return unitRom; 
    };
    
       function ten(){
        // récupération de la valeur saisie
        var input = document.getElementById("in").value;
       // récupération de l'objet HTML d'affichage du résultat
        var pResultats = document.getElementById("pResultats"); 
       
        // contrôle de la présence des centaines dans la saisie 
         // centaine
        var dizaine = new Object();  
        var tenRom = 0;         
        
        dizaine["XXX"] = 30;
        dizaine["XL"] = 40;           
        dizaine["LXX"] = 70;
        dizaine["LX"] = 60;
        dizaine["L"] = 50;
        dizaine["XXC"] = 80;
        dizaine["XC"] = 90;
        dizaine["XX"] = 20;
        dizaine["X"] = 10;
        
        for (var i in dizaine)
        {
            if(input.includes(i)){tenRom = dizaine[i];
            break;
        }
            
        }
        
        return tenRom; 
    };  
    
        function cent(){
        // récupération de la valeur saisie
        var input = document.getElementById("in").value;
       // récupération de l'objet HTML d'affichage du résultat
               
        // contrôle de la présence des centaines dans la saisie 
         // centaine
        var centaine = new Object();  
        var centRom = 0;         
        
        centaine["CCC"] = 300;
        centaine["CD"] = 400;           
        centaine["DCC"] = 700;
        centaine["DC"] = 600;
        centaine["D"] = 500;
        centaine["CCM"] = 800;
        centaine["CM"] = 900;
        centaine["CC"] = 200;
        centaine["C"] = 100;
        
        for (var i in centaine)
        {
            if(input.includes(i)){centRom = centaine[i];
            break;
        }
            
        }
        
        return centRom; 
    };  
    
       function mille(){
        // récupération de la valeur saisie
        var input = document.getElementById("in").value;
       // récupération de l'objet HTML d'affichage du résultat
               
        // contrôle de la présence des milliers dans la saisie 
        
        var milliers = new Object();  
        var koRom = 0;         
        
        milliers["MMMM"] = 4000;
        milliers["MMM"] = 3000;           
        milliers["MM"] = 2000;
        milliers["M"] = 1000;      
        
        for (var i in milliers)
        {
            if(input.includes(i)){koRom = milliers[i];
            break;
        }
            
        }
        
        return koRom; 
        
    }; 
   
   function convertir(){
       //saisie= getValue;
       var saisie= document.getElementById("in").value;
       var resultUnit= unit();
       var resultTen= ten();
       var resultCent= cent();
       var resultKo= mille();
       var pResultats = document.getElementById("pResultats"); 
       var result= resultUnit + resultTen+ resultCent + resultKo;
       console.log("saisie: " + saisie);
       console.log("resultat unite: " + resultUnit);
       console.log("resultat dizaine: " + resultTen);
       console.log("resultat centaines: " + resultCent);
       console.log("resultat milliers: " + resultKo);
       console.log("somme: " + result);
       if(result===0){pResultats.innerHTML = ("Vous essayez de traduire des hiéroglyphes? ;) ");
       }
       else{
       pResultats.innerHTML = (saisie + " s'écrit: " + result + " en nombres.");
      }
    };
   
};

/// init

window.onload = init;


