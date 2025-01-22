document.addEventListener("DOMContentLoaded", function () {
  const decreaseButtons = document.querySelectorAll(".quantity-decrease");
  const increaseButtons = document.querySelectorAll(".quantity-increase");
  const quantityInputs = document.querySelectorAll(".quantity-input");
  const removeButtons = document.querySelectorAll(".order-item-remove");
  const totalPriceElement = document.querySelector(".total-price");
  const itemPrice = 32790000;

  decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let quantity = parseInt(quantityInputs[index].value);
      if (quantity > 1) {
        quantity--;
        quantityInputs[index].value = quantity;
        updateTotalPrice();
      }
    });
  });

  increaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let quantity = parseInt(quantityInputs[index].value);
      quantity++;
      quantityInputs[index].value = quantity;
      updateTotalPrice();
    });
  });

  removeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      button.closest(".order-item").remove();
      updateTotalPrice();
    });
  });

  function updateTotalPrice() {
    let total = 0;
    quantityInputs.forEach((input) => {
      total += itemPrice * parseInt(input.value);
    });
    totalPriceElement.textContent = total.toLocaleString("vi-VN");
  }
});
