import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  sideBar = true ;

  constructor() { }

  ngOnInit(): void {
  }

  //********************************ABRE Y CIERRA EL SIDEBAR**************************
  toggleSideBar() {

    if(this.sideBar === true){
      document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
      this.sideBar = false;
    }
    else if(this.sideBar === false){
      document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
      this.sideBar = true;
    }
    
 }

}
