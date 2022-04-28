
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
    nameValue = document.getElementById("name").value;
    console.log(nameValue);
    roleValue = document.getElementById("role").value;
    console.log(roleValue);
    imageValue = document.getElementById("image").value;
    console.log(imageValue);


    const newObject = {
        nome:"nameValue",
        role:"",
        image:"",
    }

    // let key in newObject={}
    // .push("nameValue")
    console.log(newObject);


})

