document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("search-box");
  const products = document.querySelectorAll(".product");

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  searchBox.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    products.forEach((product) => {
      const productName = product.querySelector("h2").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = "block"; // Hiển thị sản phẩm nếu khớp
      } else {
        product.style.display = "none"; // Ẩn sản phẩm nếu không khớp
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const detailButtons = document.querySelectorAll(".product button");
  const modal = document.createElement("div");

  // Tạo modal chi tiết sản phẩm
  modal.id = "product-modal";
  modal.style.display = "none";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2 id="modal-title"></h2>
      <img id="modal-image" src="" alt="Product Image" />
      <p id="modal-price"></p>
      <p id="modal-usage"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".close-button");

  // Hiển thị modal
  detailButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = productData[index];
      document.getElementById("modal-title").textContent = product.title;
      document.getElementById("modal-image").src = product.image;
      document.getElementById("modal-price").textContent = `Giá: ${product.price}`;
      document.getElementById("modal-usage").textContent = `Công dụng: ${product.usage}`;

      modal.style.display = "block";
    });
  });

  // Đóng modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Đóng modal khi nhấp ra ngoài nội dung
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Thêm hướng dẫn sử dụng:
const productData = [
  {
    title: "AQUA ZYME",
    price: "100.000 VNĐ",
    image: "image/AQUA ZYME_500ML.jpg",
    usage: "Hỗ trợ phân hủy chất hữu cơ trong ao nuôi trồng thủy sản."
  },
  {
    title: "BES ACID",
    price: "200.000 VNĐ",
    image: "image/BES ACID_500G.jpg",
    usage: "Điều chỉnh pH nước và làm sạch môi trường ao nuôi."
  },
  {
    title: "BESRIN",
    price: "300.000 VNĐ",
    image: "image/BESRIN_1LIT.jpg",
    usage: "Hỗ trợ tiêu hóa và hấp thụ dinh dưỡng cho vật nuôi."
  },
  {
    title: "BETA GLUCAN",
    price: "300.000 VNĐ",
    image: "image/BETA GLUCAN_1KG.jpg",
    usage: "Tăng cường hệ miễn dịch cho động vật thủy sản."
  },
  {
    title: "BIO-FUCA",
    price: "300.000 VNĐ",
    image: "image/BIO-FUCA_500G.jpg",
    usage: "Hỗ trợ tiêu hóa và tăng cường khả năng hấp thụ dinh dưỡng."
  },
  {
    title: "BKC 1 LIT",
    price: "300.000 VNĐ",
    image: "image/BKC _1LIT.jpg",
    usage: "Diệt khuẩn, cải thiện chất lượng nước trong ao nuôi."
  },
  {
    title: "BKC 2 LIT",
    price: "300.000 VNĐ",
    image: "image/BKC_2LIT.jpg",
    usage: "Ứng dụng để xử lý môi trường nuôi trồng thủy sản."
  },
  {
    title: "BZT GOLDTIC",
    price: "300.000 VNĐ",
    image: "image/BZT GOLDTIC_300G.jpg",
    usage: "Giúp cải thiện hệ vi sinh trong ao nuôi."
  },
  {
    title: "BZT PONMAX",
    price: "300.000 VNĐ",
    image: "image/BZT-PONMAX_300G.jpg",
    usage: "Cải thiện chất lượng nước và giảm thiểu khí độc trong ao."
  },
  {
    title: "CALPHOS",
    price: "300.000 VNĐ",
    image: "image/CALPHOS_01LIT.jpg",
    usage: "Bổ sung canxi và phốt pho cho động vật thủy sản."
  },
  {
    title: "CANXI FOOD",
    price: "300.000 VNĐ",
    image: "image/CANXI FOOD_1KG.jpg",
    usage: "Hỗ trợ tăng trưởng và phòng ngừa bệnh thiếu khoáng ở tôm cá."
  },
  {
    title: "CITINPHOS 1 LÍT",
    price: "300.000 VNĐ",
    image: "image/CITINPHOS_1LIT.jpg",
    usage: "Hỗ trợ hấp thụ khoáng và điều chỉnh pH nước."
  },
  {
    title: "CITINPHOS 5 LÍT",
    price: "300.000 VNĐ",
    image: "image/CITINPHOS_5LIT.jpg",
    usage: "Ứng dụng để ổn định pH trong ao nuôi trồng thủy sản."
  },
  {
    title: "ECO ZYME",
    price: "300.000 VNĐ",
    image: "image/ECO-ZYME_500G.jpg",
    usage: "Giảm lượng khí độc trong nước và cải thiện chất lượng ao."
  },
  {
    title: "HEPA PHOTICS",
    price: "300.000 VNĐ",
    image: "image/HEPA PHOTICS_500G.jpg",
    usage: "Tăng cường sức khỏe hệ gan của vật nuôi thủy sản."
  },
  {
    title: "HEPA GO",
    price: "300.000 VNĐ",
    image: "image/HEPA-GO_500G.jpg",
    usage: "Bảo vệ gan và tăng cường chức năng tiêu hóa."
  },
  {
    title: "HI TECH",
    price: "300.000 VNĐ",
    image: "image/HI TECH_1LIT.jpg",
    usage: "Hỗ trợ quá trình trao đổi chất và cải thiện sức khỏe."
  },
  {
    title: "IODINE 99",
    price: "300.000 VNĐ",
    image: "image/IODINE 99_1LIT.jpg",
    usage: "Khử khuẩn nước ao và cải thiện môi trường."
  },
  {
    title: "LIVER PHOTICS",
    price: "300.000 VNĐ",
    image: "image/LIVER PHOTICS_1L.jpg",
    usage: "Bảo vệ hệ tiêu hóa và chức năng gan cho tôm cá."
  },
  {
    title: "MIX ONE PRO",
    price: "300.000 VNĐ",
    image: "image/MIX ONE PRO (KH - TỎI) 5KG,10kg.jpg",
    usage: "Bổ sung dưỡng chất và cải thiện sức khỏe toàn diện."
  },
  {
    title: "ORGANs1",
    price: "300.000 VNĐ",
    image: "image/ORGANs1_01LIT.jpg",
    usage: "Tái tạo tế bào gan, tăng cường chức năng gan tụy."
  },
  {
    title: "PREMIX",
    price: "300.000 VNĐ",
    image: "image/PREMIX_10KG.jpg",
    usage: "Bổ sung khoáng chất giúp tôm lột xác, cứng vỏ."
  },
  {
    title: "S4000",
    price: "300.000 VNĐ",
    image: "image/S4000_1LÍT.jpg",
    usage: "Xử lý các loại nấm trong ao (Nấm đồng tiền, nấm chân chó)"
  },
  {
    title: "SODA MAX",
    price: "300.000 VNĐ",
    image: "image/SODA MAX_05KG.jpg",
    usage: "Khoáng tăng kiềm"
  },
  {
    title: "SUPER CUT ALGAR",
    price: "300.000 VNĐ",
    image: "image/SUPER CUT ALGAR_500G.jpg",
    usage: "Cắt tảo xanh tảo đỏ"
  },
  {
    title: "SUPER GOLD",
    price: "300.000 VNĐ",
    image: "image/SUPER GOLD_1LIT.jpg",
    usage: "Xử lý khuẩn gan tụy trên tôm"
  },
  {
    title: "SUPER GROW",
    price: "300.000 VNĐ",
    image: "image/SUPER GROW_1 LIT.jpg",
    usage: "Tăng cường miễn dịch, tăng trọng nhanh"
  },
  {
    title: "THIO MAX",
    price: "300.000 VNĐ",
    image: "image/THIO MAX_01KG.jpg",
    usage: "Khử kim loại nặng, khử độc nước"
  },
  {
    title: "VITA MILK",
    price: "300.000 VNĐ",
    image: "image/VITA MILK_1LIT.jpg",
    usage: "Tăng cường sức đề kháng"
  },
  {
    title: "YUCCA C",
    price: "300.000 VNĐ",
    image: "image/YUCCA C_3KG.jpg",
    usage: "Chống sốc, ổn định môi trường"
  },
  {
    title: "YUCCA NEW",
    price: "300.000 VNĐ",
    image: "image/YUCCA NEW_1LIT.jpg",
    usage: "Hấp thụ khí độc, cấp cứu tôm cá nổi đầu"
  }
];

