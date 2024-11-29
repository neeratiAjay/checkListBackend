const fetchedData  = async ()=>{
    const url = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639"

    try{
        const response = await fetch(url)
        const data = await response.json()
        return data 

    }catch(e){
        console.log(`Fetching Error : ${e.message}`)
    }
}


module.exports = fetchedData
