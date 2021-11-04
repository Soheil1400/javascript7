const list = [
    {name: "aliReza", age: 20},
    {name: "MohamadHossain", age: 22},
    {name: "mohammadAli", age: 20},

]

const sortKey = (obj) => {
    let Result = {}
    obj.map(item => {
        Result[item.age] = []
        for(let i =0 ; i < obj.length; i++){
            if (item.age === obj[i].age){
                Result[item.age].push(obj[i])
            }
        }
    })
    return Result
}

console.log(sortKey(list))