fetch("https://reqres.in/api/users?page=2")
.then(function(result){
    return result.json()
})
.then(function(a){
    console.log(a);
    console.log(a.page);
})