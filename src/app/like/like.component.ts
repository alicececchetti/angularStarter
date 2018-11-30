import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-magic-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"]
})
export class LikeComponent implements OnInit {
  isLike = false;
  bgColor = "red";
  testo = "NON MI PIACE!!";

  clickedButton = () => {
    this.isLike = !this.isLike;
    console.log("isLike", this.isLike);

    if (this.isLike) {
      this.bgColor = "green";
      this.testo = "MI PIACE! :)";
    } else {
      this.bgColor = "red";
      this.testo = "NON MI PIACE!!";
    }

    console.log("isLike", this.isLike, this.bgColor);
  }

  constructor() {}

  ngOnInit() {}
}
