document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const totalCostSpan = document.getElementById("totalCost");
  
    function calculateTotal() {
      let totalCost = 0;
  
      const selectedServiceType = document.querySelector(
        'input[name="serviceType"]:checked'
      );
      if (selectedServiceType) {
        totalCost += parseFloat(selectedServiceType.getAttribute("data-price"));
      }
  
      const optionsSelect = document.getElementById("optionsSelect");
      if (optionsSelect && optionsSelect.style.display !== "none") {
        const selectedOption = optionsSelect.options[optionsSelect.selectedIndex];
        totalCost += parseFloat(selectedOption.getAttribute("data-price"));
      }
  
      const propertyCheckbox = document.getElementById("propertyCheckbox");
      if (
        propertyCheckbox &&
        propertyCheckbox.checked &&
        propertyCheckbox.style.display !== "none"
      ) {
        totalCost += parseFloat(propertyCheckbox.getAttribute("data-price"));
      }
  
      let quantity = parseFloat(quantityInput.value);
  
      if (isNaN(quantity) || quantity < 0) {
        quantity = 0;
      }
  
      totalCost *= quantity;
  
      if (!isNaN(totalCost)) {
        totalCostSpan.textContent = totalCost;
      } else {
        totalCostSpan.textContent = "0";
      }
    }
  
    function updateOptionsAndProperties() {
      const selectedServiceType = document.querySelector(
        'input[name="serviceType"]:checked'
      ).value;
      const optionsDiv = document.getElementById("optionsDiv");
      const propertiesDiv = document.getElementById("propertiesDiv");
  
      if (selectedServiceType === "type1") {
        optionsDiv.style.display = "none";
        propertiesDiv.style.display = "none";
      } else if (selectedServiceType === "type2") {
        optionsDiv.style.display = "block";
        propertiesDiv.style.display = "none";
      } else {
        optionsDiv.style.display = "none";
        propertiesDiv.style.display = "block";
      }
    }
  
    function handleInput() {
      updateOptionsAndProperties();
      calculateTotal();
    }
  
    document
      .querySelectorAll('input[name="serviceType"]')
      .forEach(function (radio) {
        radio.addEventListener("change", handleInput);
      });
  
    document
      .getElementById("optionsSelect")
      .addEventListener("change", calculateTotal);
    document
      .getElementById("propertyCheckbox")
      .addEventListener("change", calculateTotal);
    quantityInput.addEventListener("input", calculateTotal);
  
    handleInput();
  });
  
// создание слайдера
function createSlick(number){
    $('.slider').not('.slick-initialized').slick({
        arrows:true,
        dots:true,
        slidesToShow:number,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
    });
}

// вычисление количества картинок для показа
function calculateNumberOfSlidesToShow(){
    var sliderWidth = $('.slider').width();
    var slidesToShow = 0;
    switch (true) {
        case (sliderWidth < 500):
            slidesToShow = 1;
            break;
        case (sliderWidth < 767):
            slidesToShow = 2;
            break;
        case (sliderWidth < 1199):
            slidesToShow = 3;
            break;
        case (sliderWidth > 1200):
            slidesToShow = 3;
            break;
    }

    return slidesToShow;
}

// перезагружаем слайдер по изменене размера окна
function reloadSlick () {
    $('.slider').slick('unslick');
    slidesToShow = calculateNumberOfSlidesToShow();
    createSlick(slidesToShow);
}

// вызываем каждый раз по ресайзу
jQuery(window).on("resize", reloadSlick);



jQuery(document).ready(function () {

    // инициализация слайдера по загрузке страницы
    if ($('.slider').length) {
        setTimeout(function () {
            slidesToShow = calculateNumberOfSlidesToShow();
            createSlick(slidesToShow);
        }, 300);
    }


});