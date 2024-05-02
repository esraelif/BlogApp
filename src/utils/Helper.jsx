export const secretEmail = (email) => {
    console.log(email)
    // const splitEmail = email.split("@")
    // console.log(splitEmail)
    const [username, domain] = email.split("@")
    const secretUser = username.substring(0, 2) + "*".repeat(username.length - 2)
    console.log(secretUser)
    return `${secretUser}@${domain}`
}