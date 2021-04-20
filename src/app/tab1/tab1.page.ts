import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FotoService } from '../fot.service';

interface data{
  judulnote : string;
  waktunote : string;
  tanggalnote :string;
  FotoNote : string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isiData : Observable<data[]>
  isiDataColl : AngularFirestoreCollection<data>;
  status : string;
  constructor(afs : AngularFirestore,public fotoService:FotoService, public afStorage:AngularFireStorage,public Routers:Router) 
  {
    this.isiDataColl = afs.collection('ToDo');
    this.isiData = this.isiDataColl.valueChanges();
  }

  judul : string;
  waktu : string;
  tanggal : string;

  urlImage : string[] = [];
  namaFoto : string;
  async ngOnInit()
  {
    await this.fotoService.loadFoto();
  }

  TambahFoto()
  {
    this.fotoService.AddPic();
    status="Foto Terupload";
  }

  uploadData()
  {
    this.urlImage = [];
    
    for (var index in this.fotoService.dataFoto)
    {
      const imgFilepath = `imgStorage/${this.fotoService.dataFoto[index].filePath}`;
      this.afStorage.upload(imgFilepath, this.fotoService.dataFoto[index].dataImage).then(() => {
        this.afStorage.storage.ref().child(imgFilepath).getDownloadURL().then((url)=> {
      
        });
      });
      this.namaFoto = imgFilepath;
    }
    this.isiDataColl.doc(this.judul).set({
      judulnote : this.judul,
      waktunote : this.waktu,
      tanggalnote : this.tanggal,
      FotoNote : this.namaFoto
    })
    this.judul="";
    this.namaFoto="";
    this.waktu="";
    this.tanggal="";
    this.Routers.navigate(['tab2']);
  }

}
