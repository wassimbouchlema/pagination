import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../fireBaseConfig";

export const fetchTotalDocs = async () => {
  try {
    const collectionRef = collection(db, "users");
    const snapshot = await getCountFromServer(collectionRef);
    return snapshot.data().count;
  } catch (error) {
    console.error("Error fetching total document count: ", error);
    return 0;
  }
};

export const fetchUsers = async (page, rowsPerPage) => {
  try {
    const totalLimit = page * rowsPerPage;
    const usersQuery = query(
      collection(db, "users"),
      orderBy("name"),
      limit(totalLimit)
    );

    const querySnapshot = await getDocs(usersQuery);
    const allFetchedUsers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return allFetchedUsers.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
};
