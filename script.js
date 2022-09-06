const tableBody = document.querySelector('#table-body')

let flights = [
    {
        time: "05:00",
        destination: "PARIS",
        flight: "GA 7687",
        gate: "A 01",
        remark: "ON TIME"
    },
    {
        time: "08:11",
        destination: "JAKARTA",
        flight: "GA 1551",
        gate: "A 03",
        remark: "ON TIME"
    },
    {
        time: "12:30",
        destination: "BATAM",
        flight: "JT 3320",
        gate: "C 05",
        remark: "DELAYED"
    },
    {
        time: "14:20",
        destination: "SINGAPORE",
        flight: "BTK 6160",
        gate: "B 02",
        remark: "ON TIME"
    },
    {
        time: "18:15",
        destination: "HONG KONG",
        flight: "JT 1307",
        gate: "F 05",
        remark: "DELAYED"
    },
]

const destinations = ['PARIS', 'BALI', 'OSAKA', 'JAKARTA', 'SURABAYA', 'BANGKOK', 'PERTH', ]
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']
let hour = 18


const showTable = () =>{
    for(let flight of flights){
        const tableRow = document.createElement('tr')
        
        tableBody.append(tableRow)
        for( i in flight){
            const tableCell = document.createElement('td')
            const word = Array.from(flight[i])

            for ( const [index, letter] of word.entries()){
                const letterSplit = document.createElement('div')
                
                setTimeout(() =>{
                    letterSplit.classList.add('flip')
                    letterSplit.textContent = letter
                    tableCell.appendChild(letterSplit)
                }, 100 * index)
            }
            tableRow.appendChild(tableCell)
        }  
        tableBody.append(tableRow)      
    }
    
}

showTable()

// RandomLetter
const randomLetter = () =>{
    const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return alph.charAt(Math.floor(Math.random() * alph.length))
}
// Random Number
const randomNumber = (maxNum) =>{
    const number = '0123456789'
    if(maxNum){
        const newNumbers = number.slice(0, maxNum)
        return  newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return number.charAt(Math.floor(Math.random() * number.length))
}

// random Time
const randomTime = () =>{
    let displayHour = hour

    if ( hour < 24){
        hour++
    }
    if( hour >=24){
        hour = 1
        displayHour = hour
    }
    if ( hour < 10 ){
        displayHour = "0" + hour
    }

    return displayHour + ":" + randomNumber(5) + randomNumber(5)
}

// Randomize
const randomize = () =>{
    flights.shift()
    flights.push({
        time: randomTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: randomLetter() + randomLetter() + " " + randomNumber() + randomNumber() + randomNumber(),
        gate: randomLetter() + " " + randomNumber() + randomNumber(),
        remark: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ''
    showTable()
}

setInterval(randomize, 2000)