// ở đây sử dụng dấu hỏi chấm (fname?) thì tham số fname có thể truyền vào hoặc ko truyền (ko bắt buộc)

export class Student {
  constructor (public fname?: string, public lname?: string) {
  }
}
