
// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


const theArray = [
    {
    nome:"Wayne Barnett",
    role:"Founder & CEO",
    image:"wayne-barnett-founder-ceo.jpg",
},
];
//Quando si clicca su add 
    //Si crea un nuovo oggetto 
        //Prima prelevo i dati 
    //Va inserito nell'array iniziale
    //Viene stampata una nuova Card cpn tutte le informazini inserite dall'utente.

const add = document.getElementById(`addMemberButton`);
add.addEventListener("click",function(){

    //Prelevo i dati
    nameValue = document.getElementById("name").value;

    roleValue = document.getElementById("role").value;

    imageValue = document.getElementById("image").value;


    const newObject = {
        nome:nameValue,
        role:roleValue,
        image:imageValue,
    }

    //Push dentro l'array principale
    theArray.push(newObject);
    console.log(theArray)
     
    
    for (let i = 0; i < theArray.length; i++){
        addInfo = theArray[i];
        // console.log(addInfo.image);
        
        const cardContainer = document.querySelector(".team-container");
        console.log(cardContainer);

        const sectionCard = document.createElement("div");
        sectionCard.classList.add("team-card");

        const newCard = document.createElement("div");
        newCard.classList.add("card-image");
        newCard.innerHTML += `<img src = "img/${addInfo.image}"/>`;
        
        sectionCard.append(newCard);

        cardContainer.append(sectionCard);

        // console.log(newCArd);
    }
    //scrivo su dom i dati ottenuti
})

// new-team-member-01.jpg
// barbara-ramos-graphic-designer.jpg