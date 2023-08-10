import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';
import { RegistrationList } from 'src/interface/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private fService: Firestore
  ) { }


  addCompanyData(data: RegistrationList) {
    data.id = doc(collection(this.fService, 'id')).id
    return addDoc(collection(this.fService, 'RegistrationList'), data)
  }

  getAllRegistrationList() {
    let dataRef = collection(this.fService, `RegistrationList`)
    return collectionData(dataRef, { idField: 'id' })
  }

  updateCompanyData(data: RegistrationList, RegistrationList: any) {
    let dataRef = doc(this.fService, `RegistrationList/${data}`);
    return updateDoc(dataRef, RegistrationList)
  }
}
