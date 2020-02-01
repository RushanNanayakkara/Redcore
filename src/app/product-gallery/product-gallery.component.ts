import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ImageModalComponent } from '../image-modal/image-modal.component'

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {

  productTypes = [
    "All",
    "Tshirts",
    "Trousers",
    "Shorts",
    "Skinnies"
  ]

  products = [
    {name:"product 1", photoLink:"https://static.boredpanda.com/blog/wp-content/uploads/2014/11/creative-t-shirts-20__605.jpg", type:"Tshirts"},
    {name:"product 2", photoLink:"https://i3.stycdn.net/images/2019/02/06/article/nike/kt5574702/nike-club-t-shirt-weiss-1030-zoom-0.jpg", type:"Tshirts"},
    {name:"product 3", photoLink:"https://i3.stycdn.net/images/2018/05/21/article/nike/kt5570002/nike-t-shirt-grau-meliert-1731-zoom-0.jpg", type:"Tshirts"},
    {name:"product 4", photoLink:"https://www.ubexpress.pk/wp-content/uploads/2019/05/Red-Nike-T-Shirt-AA-13-600x714.jpg", type:"Tshirts"},
    {name:"product 5", photoLink:"https://cdn.baseballmonkey.com/media/catalog/product/cache/5/thumbnail/600x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-tshirt-mens-dry-baseball-896546.jpg", type:"Tshirts"},
    {name:"product 6", photoLink:"https://images-na.ssl-images-amazon.com/images/I/51I1yz30FvL._UX679_.jpg", type:"Trousers"},
    {name:"product 7", photoLink:"https://www.ourshopee.com/ourshopee-img/ourshopee_promotionimages/617014198604.jpg", type:"Trousers"},
  ]

  ActiveProductType = "All"
  activeProducts = null

  constructor(
    private modalService:NgbModal
    ) { }

    ngOnInit() {
      this.activeProducts = this.products;
    }

  SetActiveProductType(type){
    this.ActiveProductType = type;
    let self  = this;
    console.log(type)
    this.activeProducts = this.products.filter((p)=>{
      return p.type == self.ActiveProductType || self.ActiveProductType == "All";
    });
  }

  open(index) {
    console.log(index);
    const modalRef = this.modalService.open(ImageModalComponent);
    modalRef.componentInstance.products = this.activeProducts;
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.activeImg = index;
  }

}
