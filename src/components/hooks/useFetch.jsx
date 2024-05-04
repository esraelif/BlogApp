// import {
//     collection,
//     doc,
//     getDoc,
//     getDocs,
//     onSnapshot,
//     orderBy,
//     query,
// } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { db } from "../../firebase/firebase";

// const useFetch = (collectionName) => {
//     const [data, setData] = useState(null); // Varsayılan değeri null olarak değiştirildi
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const getDatas = async () => {
//             const postRef = query(
//                 collection(db, collectionName),
//                 orderBy("created", "desc")
//             );

//             const unsubscribe = onSnapshot(postRef, async (snapshot) => {
//                 const postData = [];
//                 for (const doc of snapshot.docs) {
//                     const postItems = { ...doc.data(), id: doc.id };
//                     const userRef = doc(db, "users", postItems.userId);
//                     const userDoc = await getDoc(userRef);
//                     if (userDoc.exists) {
//                         const userData = userDoc.data();
//                         const { created, ...rest } = userData;
//                         postData.push({ ...postItems, ...rest });
//                     }
//                 }
//                 setData(postData);
//                 setLoading(false);
//             });

//             return () => unsubscribe();
//         };

//         getDatas();
//     }, [collectionName]);
//     return {
//         data,
//         loading,
//     };
// };

// export default useFetch;
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
                for (const doc of snapshot.docs) {
                    const postItems = { ...doc.data(), id: doc.id };
                    const userRef = doc(db, "users", postItems.userId); // Bu satır yanlış
                    console.log("userRef:", userRef);
                    const userDoc = await getDoc(userRef);
                    if (userDoc.exists) {
                        const userData = userDoc.data();
                        const { created, ...rest } = userData;
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

