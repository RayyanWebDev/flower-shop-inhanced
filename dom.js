let total = 0;

function cardClick(target) {
  const selectedItems = document.getElementById("selected");

  const itemName = target.querySelector(".card-title").innerText;

  const li = document.createElement("li");
  li.innerText = itemName;

  selectedItems.appendChild(li);

  const priceSpent = target.querySelector(".card-actions span").innerText;

  total = parseFloat(total) + parseFloat(priceSpent);
  document.getElementById("total").innerText = total;

  if (total > 0) {
    const purchaseBtn = document.getElementById("makePurchase");
    purchaseBtn.removeAttribute("disabled");
  }
  if (total >= 200) {
    const applyBtn = document.getElementById("applyBtn");
    applyBtn.removeAttribute("disabled");
  }

  document.getElementById("applyBtn").addEventListener("click", function () {
    const couponField = document.getElementById("couponId").value;

    if (couponField === "SELL200") {
      discount = total * 0.2;
      totalPrice = total - discount;

      document.getElementById("discount").innerText = discount;
      document.getElementById("totalPrice").innerText = totalPrice;
    } else {
      console.log("Please! Put a Valid CODE");
    }
  });

  document.getElementById("goHomeBtn").addEventListener("click", function () {
    clearInputs();
  });

  function clearInputs() {
    const couponField = document.getElementById("couponId");
    const selectedItems = document.getElementById("selected");
    const totalElement = document.getElementById("total");
    const discountElement = document.getElementById("discount");
    const totalPriceElement = document.getElementById("totalPrice");

    // Clear input values
    couponField.value = "";
    selectedItems.innerHTML = "";
    totalElement.innerText = "00.00";
    discountElement.innerText = "00.00";
    totalPriceElement.innerText = "00.00";

    // Disable buttons
    const purchaseBtn = document.getElementById("makePurchase");
    const applyBtn = document.getElementById("applyBtn");
    purchaseBtn.setAttribute("disabled", "disabled");
    applyBtn.setAttribute("disabled", "disabled");
  }
}
