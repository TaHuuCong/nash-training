export class Movie {
  id: number;
  name: string;
  author: string;
  link: string;

  // truyền vào 4 tham số khi khởi tạo đối tượng
  constructor(id: number, name: string, author: string, link: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.link = link;
  }
}
