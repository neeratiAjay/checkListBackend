// Fetch data and Display Result 

const fetchResult = async ()=>{
    const resultDiv = document.getElementById("result")
    try{
        const response = await fetch("api/evaluate")
        const data = await response.json()
        data.forEach(({rule,status})=>{
            const ruleElement = document.createElement("div")
            ruleElement.classList.add("rule")
            ruleElement.innerHTML = `<span>${rule} :</span> <span class ="status-${status.toLowerCase()}">${status}</span>`
            resultDiv.appendChild(ruleElement)
        })
    }catch(e){
        console.log(`Fetching Error ${e.message}`)
    }
}
fetchResult()