// const names = ["John","Cathy","Amy"]

// names.forEach((a,b,c) => console.log(b,a)) //a-name, b-index, c-array

const score = [56,78,90]
const names = ["John","Cathy","Amy"]

names.forEach((name,index) => {
    console.log(`${name}, ${score[index]}`)
})