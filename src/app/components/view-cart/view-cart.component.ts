import { Component, OnInit } from "@angular/core";
import { CartService } from "./../../cart.service";

@Component({
  selector: "app-view-cart",
  templateUrl: "./view-cart.component.html",
  styleUrls: ["./view-cart.component.css"],
})
export class ViewCartComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
