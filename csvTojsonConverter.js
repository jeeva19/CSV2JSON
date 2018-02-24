const path = require('path')
const fs = require('fs')
const csv = require('csvtojson')

const csvFilePath = path.join(__dirname, 'customer-data.csv')
const jsonFile = path.join(__dirname, 'customer-data.json')
let jsonArr = []
csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        jsonArr.push(jsonObj)
    })
    .on('done', (err) => {
        if (err) {
            console.log(err)
        }
        fs.writeFileSync(jsonFile, JSON.stringify(jsonArr,null,2))
        console.log(jsonArr.length +'records converted from csv to json')
    })

