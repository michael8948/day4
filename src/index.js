var isPal = function(word){
    var lowerCase = word.toLowerCase()
    return lowerCase
}

console.log(isPal('Mom'))


var user = '2354690233@qq.com'
var password = 'maiko55555'

var isCorrectLogin = function(u,p){
    var typeUser = u.toLowerCase()
    var actualUser = user.toLowerCase()
    var isCorrectUser = typeUser === actualUser
    var isCorrectPassword = p === password

    // var isCorrect = isCorrectUser && isCorrectPassword
    var isCorrect = typeUser === actualUser && p === password
    return isCorrect
}
console.log(isCorrectLogin('2354690233@qq.com', 'maiko55555'))


// var isCorrectLogin2 = function(u,p){
//     return u.toLowerCase() === user.toLowerCase() && p === password
// }
