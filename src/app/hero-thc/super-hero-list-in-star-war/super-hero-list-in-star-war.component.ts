import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { SuperHero } from './superhero';

@Component({
  selector: 'thc-super-hero-list-in-star-war',
  templateUrl: './super-hero-list-in-star-war.component.html',
  styleUrls: ['./super-hero-list-in-star-war.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class SuperHeroListInStarWarComponent implements OnInit {
  styleBorder = {
    'border': '1px solid red'
  };

  // thuộc tính superhero là 1 mảng các SuperHero (SuperHero là class đã tạo ở superhero.ts)
  superhero: SuperHero[] = [
    {
      name: 'Tạ Hữu Công 1',
      weight: 70,
      height: 178,
      image: { url: 'https://www.tiepphan.com/assets/uploads/2016/12/component-hierarchy.png' }
    },
    {
      name: 'Tạ Hữu Công 2',
      weight: 70,
      height: 178,
      image: { url: 'https://www.tiepphan.com/assets/uploads/2016/12/component-hierarchy.png' }
    },
    {
      name: 'Tạ Hữu Công 3',
      weight: 70,
      height: 178,
      image: null
    },
  ];

  image: any = {};
  message = 'Hello Công';
  printable = true;
  index;
  collection;
  textes = [];
  // public txtName: string;
  @ViewChild('yourName') herName: ElementRef;

  doClick() {
    this.message = 'Đẹp trai';
    setTimeout(() => {
      this.message = 'Hot';
    }, 1000);
  }

  hideMess() {
    this.printable = !this.printable;
  }

  changeTab(index) {
    this.index = index;
  }

  constructor() {
    this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  ngOnInit() {
    this.image.url = 'https://www.tiepphan.com/assets/uploads/2016/12/component-hierarchy.png';
  }

  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [{ id: 1 }, { id: 3 }, { id: 2 }, {id: 4}];
  }

  // mỗi item là 1 phần tử của collection, index là chỉ số tương ứng của item
  // return theo index thì sự cập nhật sẽ khác return theo item.id
  trackByFn(index, item) {
    // return item.id;
    return index;
  }

  onClick() {
    console.log('123');
  }

  onInput(test) {
    console.log(test);
    this.textes.push(test.target.value);  // push() thêm 1 phần tử vào cuối mảng
  }

  onGetData(txtName): void {
    console.log(txtName.value);
  }

  onGetData2(): void {
    console.log(this.herName.nativeElement.value);
  }

}
