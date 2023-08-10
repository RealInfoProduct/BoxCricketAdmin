import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';
import { RegistrationList } from 'src/interface/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private fService: Firestore
  ) { }


  addRegistrationData(data: RegistrationList) {
    data.id = doc(collection(this.fService, 'id')).id
    return addDoc(collection(this.fService, 'RegistrationList'), data)
  }

  getAllRegistrationData() {
    let dataRef = collection(this.fService, `RegistrationList`)
    return collectionData(dataRef, { idField: 'id' })
  }

  updateRegistrationData(data: RegistrationList, RegistrationList: any) {
    let dataRef = doc(this.fService, `RegistrationList/${data}`);
    return updateDoc(dataRef, RegistrationList)
  }

  deleteRegistrationList(data: RegistrationList) {
    let docRef = doc(collection(this.fService, `RegistrationList`), data.id);
    return deleteDoc(docRef)
  }

}
