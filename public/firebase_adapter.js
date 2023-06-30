import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js";

class FirebaseAdapter {
    constructor(firebaseConfig) {
      this.app = initializeApp(firebaseConfig);
      this.db = getFirestore(this.app);
    }
  
    async getSchoolsRanked() {
      const schoolsRef = collection(this.db, "Escolas");
      const schoolsRankingQuery = query(schoolsRef, orderBy("medprof", "desc"));
      return await getDocs(schoolsRankingQuery);
    }
  
    async getSchoolsByYear(year) {
      const schoolsRef = collection(this.db, "Escolas");
      const schoolsRankingQuery = query(schoolsRef, where("ano", "==", year));
      return await getDocs(schoolsRankingQuery);
    }
  
    async getSchoolsBySearchTerm(type, searchTerm) {
      const schoolsRef = collection(this.db, "Escolas");
      const schoolsSearchQuery = query(schoolsRef, where(type, "==", searchTerm));
      return await getDocs(schoolsSearchQuery);
    }
  }

  export { FirebaseAdapter };