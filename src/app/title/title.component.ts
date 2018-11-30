import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"]
})
export class TitleComponent implements OnInit {
  title: string = "CIAO";
  nome = "pippo";
  counter = 0;
  isOff = true;
  textColor = "#ff6600";
  size = "100px";

  greet = () => {
    return "ciao " + this.nome;
  }

  increment = () => {
    this.counter++;
    this.isOff = !this.isOff;
    console.log(this.counter);
  }

  constructor() { }

  ngOnInit() {
    console.log("Title component pronto!");

    // setInterval(this.increment, 1 * 1000);
    // 1000 sono in millisecondi
  }

}


