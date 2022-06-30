import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may-tinh',
  templateUrl: './may-tinh.component.html',
  styleUrls: ['./may-tinh.component.css']
})
export class MayTinhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cong(){
    //@ts-ignore
    let st1 = +document.getElementById("st1").value;
    //@ts-ignore
    let st2 = +document.getElementById("st2").value;
    let result = st1+st2;
    alert("Kết quả = " + result);
  }

  tru(){
    //@ts-ignore
    let st1 = +document.getElementById("st1").value;
    //@ts-ignore
    let st2 = +document.getElementById("st2").value;
    let result = st1-st2;
    alert("Kết quả = " + result);
  }

  nhan(){
    //@ts-ignore
    let st1 = +document.getElementById("st1").value;
    //@ts-ignore
    let st2 = +document.getElementById("st2").value;
    let result = st1*st2;
    alert("Kết quả = " + result);
  }

  chia(){
    //@ts-ignore
    let st1 = +document.getElementById("st1").value;
    //@ts-ignore
    let st2 = +document.getElementById("st2").value;
    let result = st1/st2;
    if (st2 == 0){
      alert("Warning!")
    }
    alert("Kết quả = " + result);
  }

  pow(){
    let so;
    //@ts-ignore
    let st1 = +document.getElementById("st1").value;
    let result= Math.pow(st1,2);
    alert("Kết quả = " + result);

  }
}
