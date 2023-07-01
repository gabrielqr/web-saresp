import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import { schoolsRef } from "./configuration.js";
import {
  getDocs,
  orderBy,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js";

class FirebaseAdapter {
  
    async getSchoolsRanked() {
      const schoolsRankingQuery = query(schoolsRef, orderBy("medprof", "desc"));
      return await getDocs(schoolsRankingQuery);
    }
  
    async getSchoolsByYear(year) {
      const schoolsRankingQuery = query(schoolsRef, where("ano", "==", year));
      return await getDocs(schoolsRankingQuery);
    }
  
    async getSchoolsBySearchTerm(type, searchTerm) {
      const schoolsSearchQuery = query(schoolsRef, where(type, "==", searchTerm));
      return await getDocs(schoolsSearchQuery);
    }
  }

  export { FirebaseAdapter };