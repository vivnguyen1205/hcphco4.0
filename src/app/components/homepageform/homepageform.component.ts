import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';


import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'app-homepageform',
  templateUrl: './homepageform.component.html',
  styleUrl: './homepageform.component.scss'
})
export class HomepageformComponent implements OnInit{

  private tokenKey:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJVc2VybmFtZSI6ImRvY3RvcjIiLCJUeXBlIjoiUGFydG5lciIsIkZ1bGxOYW1lIjoiZG9jdG9yIDIiLCJFbWFpbCI6IjJAZ21haWwuY29tIiwiUGhvbmUiOiIwIiwiSXNBZ3JlZW1lbnQiOiJUcnVlIiwiSXNMb3lhbHR5UHJvZ3JhbSI6IlRydWUiLCJMaXN0SG9zcGl0YWwiOiJbe1wiSWRcIjo0NzczLFwiVHlwZVwiOlwiYnZcIixcIkNvZGVcIjpcIkdTMDA3NDhcIixcIk5hbWVcIjpcIkJWIFBTIE1la29uZ1wifSx7XCJJZFwiOjQ5MjUsXCJUeXBlXCI6XCJwa1wiLFwiQ29kZVwiOlwiR1MwMDA3MVwiLFwiTmFtZVwiOlwiUEsgQlMgVHLhuqduIFRo4buLIFPGoW4gVHLDoFwifSx7XCJJZFwiOjQ5MzQsXCJUeXBlXCI6XCJwa1wiLFwiQ29kZVwiOlwiR1MwMDM2NFwiLFwiTmFtZVwiOlwiUEsgQlMgVHLGsMahbmcgTmfhu41jIFRo4bqjb1wifSx7XCJJZFwiOjQ5ODMsXCJUeXBlXCI6XCJvdGhlclwiLFwiQ29kZVwiOlwiR1MwMDczNFwiLFwiTmFtZVwiOlwiVklOQ0lCSU9cIn0se1wiSWRcIjo1MTQxLFwiVHlwZVwiOlwicGtcIixcIkNvZGVcIjpcIkdTMDA0MTNcIixcIk5hbWVcIjpcIlBLIFRoYW5oIEjDom5cIn0se1wiSWRcIjo2ODU5LFwiVHlwZVwiOlwiYnZcIixcIkNvZGVcIjpcIkdTMDIxMDlcIixcIk5hbWVcIjpcIlBYTiBZIEtob2EgNDhcIn0se1wiSWRcIjo2OTg3LFwiVHlwZVwiOlwiYnZcIixcIkNvZGVcIjpcIkdTMDIyMzdcIixcIk5hbWVcIjpcIlBLIEJTIMSQb8OgbiBUaOG7iyBLaW0gRHVuZ1wifV0iLCJleHAiOjE3MTgyNDUyNjcsImlzcyI6ImhjcC1nZW5lc29sdXRpb24iLCJhdWQiOiJoY3AtZ2VuZXNvbHV0aW9uIn0._coJH_oBD6c5Gr9NiJfDZZcHgGAUZm3uck7mddcI-_';
// HOSPITAL API 
  hospitalApi: string = 'https://hcp-api-stg.genesolutions.vn/api/HCP/GetCategoryHospitals';
  hospital: any[];
  HospitalList: any []=[];
  HospitalID: number;
// DOCTOR API
  doctor: any[];
  DoctorList: any []=[];
// COMBO API 
  comboApi: string = 'https://hcp-api-stg.genesolutions.vn/api/HCP/GetCategoryCombo';
  ComboList: any []=[];


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getHospital();
    this.getCombo();
    // this.getDoctor();
    // this.getCombo();
  }
  getHospital() {
    this.apiService.getData(this.hospitalApi).subscribe((data: any) => {
      this.HospitalList = data.Data;

      console.log(this.HospitalList);
  })
}

onChangeHospital(hospitalId: any) {
 
  const doctorApi = 'https://hcp-api-stg.genesolutions.vn/api/HCP/GetCategoryDoctor?hospitalId=' + hospitalId?.target?.value;
  this.apiService.getData(doctorApi).subscribe((data: any) => {
    this.DoctorList = data.Data;
    // console.log(this.DoctorList);
  });
  
  }

// getHospitalID(){
//   const selectedHospital = document.getElementById('hospital') as HTMLSelectElement;
//   return selectedHospital.value;
// }
//   getHospitalID(HospitalList: any){
//     this.apiService.getData(this.hospitalApi).subscribe((data: any) => {
//     return this.Hospital.ID;
//     })

// }

getCombo(){
  this.apiService.getData(this.comboApi).subscribe((data: any) => {
    this.ComboList = data.Data;
    console.log(this.ComboList);
  }
  )
}
}