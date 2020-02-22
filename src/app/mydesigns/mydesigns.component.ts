import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydesigns',
  templateUrl: './mydesigns.component.html',
  styleUrls: ['./mydesigns.component.scss']
})
export class MydesignsComponent implements OnInit {

  recentDesigns = [
    {designId:"001",title:"Title1",iconURL: "https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"},
    {designId:"002",title:"Title2",iconURL: "https://static.boredpanda.com/blog/wp-content/uploads/2014/11/creative-t-shirts-20__605.jpg"},
    {designId:"002",title:"Title3",iconURL: "https://medias.protee.shop/images/mens-awesome--trendy-tshirt-designs-trump-2020-fuck-your-feelings-t-shirt-254576-80-42431.jpg"},
  ]

  designs = [
    {designId:"003",title:"Title4",iconURL: "https://www.buytshirtdesigns.net/wp-content/uploads/2017/12/Born-To-Fish-Mockup.jpg"},
    {designId:"004",title:"Title5",iconURL: "https://vangogh.teespring.com/v3/image/hDG1EAZuyKf_snTgMgs2a_A4XIw/480/560.jpg"},
    {designId:"005",title:"Title6",iconURL: "https://images.all-free-download.com/images/graphicthumb/tshirt_vector_149316.jpg"},
    {designId:"006",title:"Title7",iconURL: "https://www.thefancydeal.com/wp-content/uploads/edd/2017/10/Golfer-T-shirt-design-29599.jpg"},
    {designId:"0017",title:"Title8",iconURL: "https://res.cloudinary.com/teepublic/image/private/s--G_MGkV13--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1498396085/production/designs/1692455_1.jpg"},

  ]

  designerURL = 'http://127.0.0.1:5501/Redcoredesigner3D.html';

  constructor() { }

  ngOnInit() {

  }

  redirectToDesigner(){
    window.location.href = this.designerURL;
  }

}
