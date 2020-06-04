export { };

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// zone des données

const joursOuvres: number = 218;     // 218 jours ouvrés par ans
const joursCongesPayes: number = 25; // 25 jours congés payés CC Syntec

// exemples pour tests
// année 2020 : 366 jours, nombre samedis et dimanche : 104, jours fériés hors weekend : 9
// année 2021 : 365 jours, nombre samedis et dimanche : 104, jours fériés hors weekend : 7

const data_2020: any = { 
    annee: 2020, 
    joursAnnee: 366, 
    joursFinSemaine: 104, 
    joursFeriesHorsFinSemaine: 9,
 };

const data_2021: any = { 
    annee: 2021, 
    joursAnnee: 365, 
    joursFinSemaine: 104, 
    joursFeriesHorsFinSemaine: 7,
 };

 // --------------------------------------------------------------------------------------------
 // --------------------------------------------------------------------------------------------
 // zone de l'application

/**
 * Calcul des RTT
 * 
 * Les composantes ed ce calcul devraient être précalculées, faire appel à des services, ou autres fonctions
 * 
 * @param input 
 * 
 */
function calculRTT(input: any): number{
    return input.joursAnnee - joursOuvres - input.joursFinSemaine - input.joursFeriesHorsFinSemaine - joursCongesPayes;
}

// test de la fonction calculRTT
function affiche_test_calcul (test_data: any, expected: number) {
    console.log("Année : " + test_data.annee);
    console.log("Valeur Générée : " + calculRTT(test_data));
    console.log("Valeur Attendue : " + expected);         
    if(calculRTT(test_data) == expected){              
        console.log("TEST PASS !");        
    } else {
        console.log("TEST FAIL !");
        
    }
    console.log();
};

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// zone des tests

// test 2020
affiche_test_calcul(data_2020, 10);

// test 2021
affiche_test_calcul(data_2021, 11);


// pistes : service / fonctions qui ont fait le précalcul des valeurs non déterminées par les api traitant les dates, spécifiques France