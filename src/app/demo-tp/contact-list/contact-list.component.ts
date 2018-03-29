import { Component, OnInit, ViewChild } from '@angular/core';
import { SwitchesComponent } from '../switches/switches.component';

@Component({
  selector: 'thc-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent {

  // trong tslint thì những thằng static phải khai báo đầu tiên (ko đc khai báo sau những thằng ko phải static)
  static clickCounter = 0;  // dùng static nên phải truy cập thông qua class: ContactListComponent.clickCounter
  message = 'Hello, This is Contact-List Component!';
  printable = false;
  contacts = [
    {
      id: 1,
      name: 'Tiep Phan',
      job: 'Web Developer',
      avatar: {
        round: false,
        url: '   https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    },
    {
      id: 2,
      name: 'John Doe',
      job: 'Writer',
      avatar: {
        round: false,
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    },
    {
      id: 3,
      name: 'Michael Bay',
      job: 'Producer, Director',
      avatar: {
        round: false,
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }
  ];

  styleH3 = 1.5;
  ngStyleH3 = {
    fontSize: '3em'
  };

  baseContact = {
    id: 4,
    name: 'User No. 4',
    job: 'Software Developer',
    avatar: {
      url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
    }
  };

  serverContacts = [
    {
      id: 1,
      name: 'Tiep Phan',
      job: 'Web Developer',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    },
    {
      id: 2,
      name: 'John Doe',
      job: 'Writer',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    },
    {
      id: 3,
      name: 'Michael Bay',
      job: 'Producer, Director',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }
  ];

  @ViewChild('switchesExternal') switchesInternal: SwitchesComponent;

  // JSON.stringify() chuyển đổi 1 đối tượng/mảng trong JS thành 1 chuỗi vì khi dữ liệu gửi đến 1 server web thì dữ liệu đó phải là 1 chuỗi
  // JSON.parse() chuyển đổi văn bản thành một đối tượng JS vì dữ liệu lấy từ server phải chuyển thành JS thì nó mới hiểu được
  getDataFromServer() {
    return JSON.parse(JSON.stringify(this.serverContacts));
  }


  // concat() để nối mảng
  // ban đầu clickCounter = 0 --> thỏa mãn %2 === 0 --> nối mảng baseContact vào mảng contacts
  // sau đó clickCounter = 1 --> ko thỏa mãn nên dừng lại --> mảng contacts lúc này gồm 4 phần tử
  // dữ liệu gửi lên serve là mảng serverContacts, các phần tử trong mảng ko có round --> round = null --> checked = false
  // nếu dữ liệu gửi lên serve là mảng contacts, các phần tử trong mảng có round --> tùy theo round mà có checked = true/false
  getContacts() {
    if (ContactListComponent.clickCounter % 2 === 0) {
      this.contacts = this.getDataFromServer().concat(this.baseContact);
    } else {
      this.contacts = this.getDataFromServer().concat([]);
    }
    ContactListComponent.clickCounter++;
  }

  contactTrackByFn(index, item) {
    return item.id;
  }


  // gán giá trị cho round: true/false
  switchesValueChange(event: boolean, index) {
    this.contacts[index].avatar.round = event;
  }

  changeStt() {
    this.switchesInternal.toggle();
  }
}
