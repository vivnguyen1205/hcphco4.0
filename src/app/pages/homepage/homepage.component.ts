// import { HomepageComponent } from '@pages/homepage/homepage.component';
import {Component, OnInit} from '@angular/core';
import {HomepageformComponent} from '@components/homepageform/homepageform.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    faBookmark,
    faEnvelope,
    faChartSimple,
    faCartShopping,
    faUserPlus,
    faChartPie
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  faBookmark = faBookmark;
  faEnvelope = faEnvelope;
  faChartSimple = faChartSimple;
  faCartShopping = faCartShopping;
  faUserPlus = faUserPlus;
  faChartPie = faChartPie;
}