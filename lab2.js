// array[]

const students = ["nguyen van an", "lang quang vinh","nong van hoan"];
const ids = [1, 5, 13, 45, 54];
const actives = [true, false, 42, "vinhlq"];
//danh index: 0, 1, 2
console.log("ban dau", students);
students[0] = "hoadv"; //được
//students = "hoadv";  // lỗi
console.log("sau khi thay doi", students);
console.log("độ dài array", students.length);

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

//baitap1
const names = ["An", "Bình", "Nam", "Hòa", "Lan"]; 
//In Array ra Console.
 console.log(names);
//In phần tử đầu tiên.
console.log("phan tu dau tien la: ",names[0]);
//In phần tử cuoi cung.
let soLuongPhanTu = names.length;
console.log("phan tu cuoi cung la: ",names[soLuongPhanTu-1]);
//In so luong phần tử
console.log("so luong phan tu la: ",soLuongPhanTu);
//Thêm một tên mới.
names.push("Vinh");
console.log("sau khi them phan tu: ",names);
//Xoa phan tu cuoi
names.pop();
console.log("sau khi xoa phan tu cuoi: ",names);

//baitap2
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//object
const student = {
    id: "ph65350",
    name: "vinh",
    age: 18,
};
console.log(student.id);
student.id = "ph65351"; //sua gia tri cua thuoc tinh
//student = (); =>error
student.address = "Lang Son"; //them thuoc tinh

 //Array Object
const myStudents = [{
    id: "ph123",
    name: "Lan",
},
{
    id: "ph1234",
    name: "vinh",
},
 {
    id: "ph12345",
    name: "Nam",
  },
];
//lấy tên sinh viên đầu tiên
console.log(myStudents[0].name);

//baitap3
const sinhVien = { id: 1, name: "Nguyễn Văn An", age: 20, email: "an@gmail.com", major: "CNTT", };
//In Object.
console.log(sinhVien);
//In tên sinh viên.
console.log(sinhVien.name);
//In tuổi
console.log(sinhVien.age);
//In email. 
console.log(sinhVien.email);
//Thay đổi tuổi.
sinhVien.age = 31;
//Thêm thuộc tính phone.
sinhVien.phone = "0985224521";
console.log(sinhVien);

//baitap4
const danhSachSV = [ { id: 1, name: "Nguyễn Văn An", age: 20, }, { id: 2, name: "Trần Văn Bình", age: 21, }, { id: 3, name: "Lê Văn Nam", age: 20, }, ];
//In danh sách ra Console.
console.log(danhSachSV);
//In ten sinh vien dau tien
console.log(danhSachSV[0].name);
//In tuổi sinh viên thứ hai.
console.log(danhSachSV[1].age);
//Duyệt danh sách bằng for.
for (let i = 0; i < danhSachSV.length; i++) {
  console.log(danhSachSV[i].id);
  console.log(danhSachSV[i].name);
  console.log(danhSachSV[i].age);
}
//In tên của tất cả sinh viên.
for (let i = 0; i < danhSachSV.length; i++) {
  console.log(danhSachSV[i].name);
}

//baitap5
const students5 = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];

let danhSach = document.getElementById("students5");
for(let i = 0; i < students5.length;i++){
    let sinhVien2 = students5[i];
   danhSach.innerHTML +=   `<div>
                    <p>${sinhVien2.name}</p>
                    <p>Tuổi: ${sinhVien2.age}</p>
                </div>`;
}

//baitaptonghop
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 20000000,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 18000000,
  },
  {
    id: 3,
    name: "Xiaomi 14",
    price: 12000000,
  },
];

//In danh sách sản phẩm ra Console.
console.log(products);
//Duyệt Array bằng for+ in ra
for(let i = 0; i < products.length; i++){
    let product = products[i];
    console.log(product.name + "-" + product.price);
}
//Tính tổng giá của tất cả sản phẩm.
let tongGia = 0;
for(let i = 0; i < products.length; i++){
     tongGia += products[i].price;
     console.log("Tong gia: " + tongGia);
}
//Hiển thị danh sách sản phẩm lên HTML.
 
let danhSachSP = document.getElementById("products");

for(let i =0; i < products.length; i++){
    let ds = products[i];
    danhSachSP.innerHTML += `
    <div>
    ${ds.name} - ${ds.name}
    </div>`;
}
