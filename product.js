//Bài 1 và 2 - Danh sách sản phẩm, thêm cột stt

axios.get("http://localhost:3000/products").then((res2) => {
    document.getElementById("list2").innerHTML = res2.data
    .map(
        (item,index) => `
        <tr class="hover:bg-gray-50">
                <td class="px-4 py-2 border border-gray-300">${index+1}</td>
              <td class="px-4 py-2 border border-gray-300">${item.id}</td>
              <td class="px-4 py-2 border border-gray-300">${item.name}</td>
              <td class="px-4 py-2 border border-gray-300">${item.price}</td>
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
        `
    ).join("");
});

