const check = (password, repeat_password) => {

    let length = false
    let match = false
    let uppercase = false

    if (!password) return { length, match, uppercase }

    if (password === repeat_password) match = true
    if (password.length >= 8) length = true
    if (/[A-Z]/.test(password)) uppercase = true

    if (length && match && uppercase) return { length, match, uppercase, all_met: true }

    else return { length, match, uppercase }

}

export default check