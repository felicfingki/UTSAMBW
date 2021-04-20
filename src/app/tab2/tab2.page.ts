import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FotoService } from '../fot.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  
  isiData : Observable<data[]>
  isiDataColl : AngularFirestoreCollection<data>;
  constructor(afs : AngularFirestore,public fotoService:FotoService, public afStorage:AngularFireStorage,public Routers:Router) 
  {
    this.isiDataColl = afs.collection('ToDo');
    this.isiData = this.isiDataColl.valueChanges();
  }

  async ngOnInit()
  {
    
  }
}

interface data{
  judulnote : string;
  waktunote : string;
  tanggalnote :string;
  FotoNote : string;
}