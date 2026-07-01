const hamButton = document.getElementById('hamBtn')
const navMenu = document.getElementById('navBar')

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('h-400')
})


const expandCompanyMenu = document.getElementById('expandCompany')
const expandCompanyItems = document.getElementById('expandCompanyDetails')
expandCompanyMenu.addEventListener('click', () => {
    expandCompanyItems.classList.toggle('max-h-70')
})


const expandProducts = document.getElementById('expandProducts')
const expandProductsItems = document.getElementById('expandProductsDetails')
expandProducts.addEventListener('click',()=>{
    expandProductsItems.classList.toggle('max-h-120')
})


const expandWeb=document.getElementById('expandWeb')
const expandWebItems=document.getElementById('expandWebDetails')
expandWeb.addEventListener('click',()=>{
    expandWebItems.classList.toggle('max-h-10')
})


const expandContact=document.getElementById('expandContact')
const expandContactItems=document.getElementById('expandContactDetails')
expandContact.addEventListener('click',()=>{
    expandContactItems.classList.toggle('max-h-50')
})