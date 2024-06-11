import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepageform',
  templateUrl: './homepageform.component.html',
  styleUrl: './homepageform.component.scss'
})
export class HomepageformComponent implements OnInit{
  hospitalApi: string = 'https://hcp-api-stg.genesolutions.vn/api/HCP/GetCategoryHospitals';
  hospital: any[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDataHospitals();
  }


  loadDataHospitals() {
    this.apiService.getData(this.hospitalApi).subscribe((data: any) => {
      debugger;
      this.hospital = data;
    });
  }


}
