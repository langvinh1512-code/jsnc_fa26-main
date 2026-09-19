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