import {
    collection,
    doc,
    getDoc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";


const useFetch = (collectionName) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getDatas = async () => {
            const postRef = query(
                collection(db, collectionName),
                orderBy("created", "desc")
            );

            const unsubscribe = onSnapshot(postRef, async (snapshot) => {
                const postData = [];
                for (const docSnap of snapshot.docs) {
                    const postItems = { ...docSnap.data(), id: docSnap.id };
                    const userDoc = await getDoc(doc(db, "users", postItems.userId)); // Doğru şekilde doc fonksiyonunu çağırıldı

                    if (userDoc.exists) {
                        const userData = userDoc.data();
                        const { created, ...rest } = userData || {}; // userData tanımlı değilse boş bir nesne oluştur
                        postData.push({ ...postItems, ...rest });
                    }
                }
                setData(postData);
                setLoading(false);
            });
            return () => unsubscribe();

        };

        getDatas();
    }, [collectionName]);
    return {
        data,
        loading,
    };
};

export default useFetch;
