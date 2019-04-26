
intAdd = (inputString) =>{
    let delimiter = ","
    let i = 0
    let negError = false
    let negNums = []

    if (inputString.substr(0,2) === "//"){
        delimiter = inputString.substr(2, 1)
        console.log("custom delimiter: " + delimiter)
        i++
    }

    let stringArray = inputString.split(delimiter)
    //console.log(stringArray)
    let sum = 0
    for(i; i < stringArray.length; i++){
        if(stringArray[i] < 0){
            negError = true
            negNums.push(stringArray[i])
        }
        if(stringArray[i] <= 1000){
            sum = sum + Number(stringArray[i])
        }
    }
    

    if (negError === true){
        let listNegNums = negNums.join()
        return "Negatives not allowed: " + listNegNums
    } else {
        return sum
    }
}



console.log("\n======== Comma Delimiters =========\n")

let question1 =  "1,2,5"
let question2A =  "1\n,2,3"
let question2B =  "1,2\n,4"

console.log("with string: " + question1 + " \n returned " + intAdd(question1))
console.log("------------------")
console.log("with string: " + question2A + " \n returned " + intAdd(question2A))
console.log("------------------")
console.log("with string: " + question2B + " \n returned " + intAdd(question2B))
console.log("------------------")

console.log("\n======== Custom Delimiters =========\n")

let question3C = "//;\n1;3;4"
let question3Ei = "//$\n1$2$3"
let question3Eii =  "//@\n2@3@8"

console.log("with string: " + question3C + " \n returned " + intAdd(question3C))
console.log("------------------")
console.log("with string: " + question3Ei + " \n returned " + intAdd(question3Ei))
console.log("------------------")
console.log("with string: " + question3Eii + " \n returned " + intAdd(question3Eii))
console.log("------------------")

console.log("\n======== Negative Number =========\n")

let question4 = "-3,2,7"
let question4b = "7,-2,8,-4"

console.log("with string: " + question4 + " \n returned " + intAdd(question4))
console.log("------------------")
console.log("with string: " + question4b + " \n returned " + intAdd(question4b))
console.log("------------------")

console.log("\n======== Bonus =========\n")

let overThousand = "2,1001"
console.log("with string: " + overThousand + " \n returned " + intAdd(overThousand))
console.log("------------------")

let arbLength = "//***\n1***2***3"
console.log("with string: " + arbLength + " \n returned " + intAdd(arbLength))
console.log("------------------")


module.exports = intAdd;