const x = [
    1,2,3,4
]

const m = x.filter((item)=>{
    return item%2 === 0
}).map((item)=>{
    return `Ola ${item}` 
})



console.log(...m.join(","))