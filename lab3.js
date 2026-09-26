//template Literal
const name5 = "vinh"
const age5 = 18
const info5 = "ten: " + name5 + "tuoi: " + age5; //dấu cộng để nối chuỗi trên cùng 1 dòng
console.log(info5);
//
const myName5 =`- Ten toi la: ${name5}
- Tuoi: ${age5} `; //dấu huyền đôi `` có thể nối chuỗi nhiều dòng
console.log(myName5);

//BAITAP1 - Template Literal
const name1 = "Nguyễn Văn An";
const age1 = 20;
const major1 = "Lập trình Web";

const thongTin = `
Xin chào ${name1}.
Bạn ${age1} tuổi.
Ngành học: ${major1}.
`;

//Bài tập 2 - Template Literal với Object
const student5 = {
  id: 1,
  name2: "Nguyễn Văn An",
  age2: 20,
  major2: "Lập trình Web",
};
const thongTin2 =`
Mã sinh viên: ${student5.id}
Họ tên: ${student5.name2}
Tuổi: ${student5.age2}
Ngành: ${student5.major2}
`;
console.log(thongTin2);

//bai tap3 Chuyển Function sang Arrow Function
function abc(a, b) {
return a + b;
}
const abc2 = (a,b)=>{
    return a + b;
};
console.log(abc2(5,7));

//ghi chep tren lop
// Template Literal
const name = "hoadv";
const age = 30;
const info = "Ten: " + name + " Tuoi: " + age;
console.log(info);
// ``
const myName = `- Ten toi la: ${name}
                - Tuoi: ${age}
                `;
console.log(myName);

const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
};

const studentInfo = `
                    Mã sinh viên: ${student.id}
                    Tên: ${student.name}
                    Tuổi: ${student.age}
                    `;
console.log(studentInfo);

const arr = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
];

const arrInfo = `${arr[0].name}`;
console.log(arrInfo);

// const html = `
//   <div>
//     <h3>${student.name}</h3>
//     <p>Mã: ${student.id}</p>
//     <p>Tuổi: ${student.age}</p>
//   </div>
// `;
// document.getElementById("app").innerHTML = html;

function add(a, b) {
  return a + b;
}
// arrow function
const add2 = (a, b) => {
  return a + b;
};

const add3 = (a, b) => a + b; // return a + b
console.log(add2(3, 4));
console.log(add2(6, 4));

// map

// const mapInfo = students.map((item) => {
//   console.log(item);
//   return `ID: ${item.id} - Ten: ${item.name}`;
// });

const students = [
  { id: 1, name: "An", age: 22 },
  { id: 2, name: "Bình", age: 33 },
  { id: 3, name: "Cường", age: 34 },
];

document.getElementById("students").innerHTML = students
  .map(
    (student) => `
     <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${student.id}</td>
              <td class="px-4 py-2 border border-gray-300">${student.name}</td>
              <td class="px-4 py-2 border border-gray-300">${student.age}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            `,
  )
  .join("");