import {getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc} from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getItems = async () => {
    const items = await getDocs(collection(db, "items"))
    return items.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

export const getItemsByCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category))

    const items = await getDocs(q)
    return items.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

export const getItemById = async (id) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)
    
    if(docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()}
    } else {
        return null
    }
}

export const getCategories = async () => {
    const categories = await getDocs(collection(db, "categories"));
    return categories.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
}

export const createOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order)
    console.log(docRef.id)
}
  
