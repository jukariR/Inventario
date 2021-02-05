import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  url = '../../../assets/upload2.png';
  id: number;

  constructor() {

    this.generadorId();

   }

  ngOnInit(): void {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
      }
    }
  }

  generadorId(){
    let temp:string, rand:number ;

    temp = '';

    for(let k = 0; k < 5; k++){
      rand = Math.random() * 9 | 0;
      temp += rand;
    }

    this.id = parseInt(temp);

  }

}
