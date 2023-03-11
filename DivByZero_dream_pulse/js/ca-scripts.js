var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    let header1 = document.getElementById('tm-header')
    header1.textContent = customerName
    let header2 = document.getElementById('')
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

};

function toggleColors() {

    let colorChange = document.querySelectorAll('.tm-white-rect')

    colorChange.forEach(element => {
        element.classList.add('tm-blue-rect');
        element.classList.remove('tm-white-rect')
    })
    
    // for (i = 0; i < colorChange.length; ++i) {
    //     colorChange[i].classList.add('tm-blue-rect');
    //     colorChange[i].classList.remove('tm-white-rect');
    // }
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->

};

function hideElement() {

    let ulHide = document.querySelector('.tm-social-links')
    ulHide.style.visibility = 'hidden'

    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->


};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 



