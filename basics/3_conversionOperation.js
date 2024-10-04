// let score = 33
// let score = "33"
// let score = "33abc" // After conversion it appear as NaN
// let score = null // After conversion it appear as 0
// let score = undefined // After conversion it appear as NaN
let score = true // After conversion it appear as 1 and false as 0
console.table([score,typeof score])
let newScore = Number(score)
console.table([newScore,typeof newScore])
console.log("----------------------------------------------------------------------------");
let isLoggedIn = 1 // Returns true after boolean conversion
// let isLoggedIn = "  " // Returns true after boolean conversion
// let isLoggedIn = "sccs" // Returns true after boolean conversion
// let isLoggedIn = "" // Returns false after boolean conversion
// let isLoggedIn = 0  // Returns false after boolean conversion
let boolisLoggedIn = Boolean(isLoggedIn)
console.table([isLoggedIn,typeof isLoggedIn])
console.table([boolisLoggedIn,typeof boolisLoggedIn])
