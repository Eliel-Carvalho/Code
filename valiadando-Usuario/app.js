function checkUser(user) {
    const regex = /^[A-Za-z]\w+[A-Za-z0-9]$/
    console.log(user.length >= 4 && user.length <= 25 && regex.test(user))
    
}

checkUser("eliel")

