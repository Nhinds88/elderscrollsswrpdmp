import { firestore } from "./firebase"

const getUsers = async () => {
    const snapshot = await firestore.collection("users").get()
    snapshot.docs.forEach(doc => console.log(doc.data()))
}

const createCharacter = async (user) => {
    const ref = await firestore.collection("users").add(user)
    
    const newUser = {
        id: ref.id,
        ...user
    }
    
    console.log(newUser)
    return newUser
}

export { getUsers, createCharacter }