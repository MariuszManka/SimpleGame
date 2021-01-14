const minimum = document.querySelector(".min")
const maximum = document.querySelector(".max")
const lifesNumber = document.querySelector(".lifes-number")

// Start button event
document.querySelector(".start-button").addEventListener("click", event => {
    validation()
    getRandomNumber()
})

// Check button event
document.querySelector(".check-button").addEventListener("click", event => {
    checkPlayerAnswer()
})

function validation () {
   //Tutaj powinieneś parsować wartości string które siedzą w value na liczby, przypisywać je do zmiennych
   //i w dalszych krokach operować na liczbach, skoro wartości to liczby


    if(!minimum.value.indexOf("-") || !maximum.value.indexOf("-") || !lifesNumber.value.indexOf("-")) { //Porównywanie liczb jest o wiele czytelniejsze niż sprawdzanie czy w danym stringu nie ma "-", tutaj powinieneś sprawdzać parsowane wcześniej liczby
        alert("Liczba nie może być ujemna")
    } else if(minimum.value === "" || maximum.value === "" || lifesNumber.value === ""  ) {
        alert("Miejsca nie mogą byc puste ani zawierać znaków specialnych i liter")
    } else if (minimum.value == maximum.value) { //Powinieneś porównywać parsowane wcześniej liczby, i zawsze używać === zamiast ==. == Jest nie do końca jawny i może w większych aplikacjach prowadzić do błędów cieżkich do wykrycia na pierwszy rzut oka
        alert("Liczby są jednkowe")
    } else {
        document.querySelector(".wrapper").classList.add("hidden") 
        document.querySelector(".wrapper2").classList.remove("hidden") 
        document.querySelector(".numerical-range").innerText = `${minimum.value} do ${maximum.value}`
    }
}

function getRandomNumber() {
    min = Math.ceil(minimum.value);
    max = Math.floor(maximum.value);
    random =  Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(random)
}

function checkPlayerAnswer() {
    if (document.querySelector(".players-answer").value == random) {//Nie powinno się używać ""=="", lepiej parsować value na liczbę i operować na liczbach znakiem "==="
        confetti.start();
        document.querySelector(".win").innerText = "Gratulacje wygrałeś!"//Lepiej to przenieść na górę pliku tam gdzie reszta querySelectorów, kod będzie czystszy 
        playAgain()
   } else {
        gameOver()
   }
}

function gameOver() {
    if (lifesNumber.value == 1 || lifesNumber.value == 0) {
        document.querySelector(".win").innerText = ("Koniec gry :( spróbuj jeszcze raz")//Lepiej to przenieść na górę pliku tam gdzie reszta querySelectorów, kod będzie czystszy 
        playAgain()
        
    } else {
        lifesNumber.value--
        alert(
            `NIE ZGADŁEŚ
            
            Pozostało: ${lifesNumber.value} trafień 
            Podpowiedż: ${hint()}`)
    }
}

function hint() {
    if(document.querySelector(".players-answer").value < random) {
        //querySelector powinien iść "na górę". value powinno być parsowane do typu number, w takim zapisie porównujesz stringa z liczbą co prowadzi do błędu
        return "Podana liczba jest mniejsza od wyslosowanej"
    } else {
        return "Podana liczba jest większa od wylosowanej"
    }
}

function playAgain() {
    check = document.querySelector(".check-button") //Tutaj chyba powinny być consty przed deklaracją zmiennych
    play = document.querySelector(".play-again")

    check.classList.add("hidden")
    play.classList.remove("hidden")

    play.addEventListener("click", event => {
        check.classList.remove("hidden")
        play.classList.add("hidden")
        
        document.querySelector(".win").innerText = ""
        confetti.stop()
        document.querySelector(".wrapper").classList.remove("hidden") 
        document.querySelector(".wrapper2").classList.add("hidden") 
    })
}
 
   


   

    

