const lightBtn = document.querySelector('.box1')
const darkBtn = document.querySelector('.box2')
const profileBox = document.querySelector('.profile-box')
const lightBtnIcon = document.querySelector('#svgl')
const calculator = document.querySelector('.calculator')
const displayBox = document.querySelector('.display')
let resultBox = document.querySelector('#display-value')
let Buttons = document.querySelectorAll('.btn')
const numBtns = document.querySelectorAll('.btn-num')
let opBtn = document.querySelectorAll('.btn-op')
function light() {
    document.body.style.background = '#fff'
    profileBox.style.cssText = 'background: #fff;border:1px solid black;'
    darkBtn.style.cssText = 'transition: 400ms ease;transform:translateX(6px);opacity:0;border:none;'
    lightBtn.style.cssText = 'transition: 400ms ease;transform:translateX(0px);opacity:1;'
    lightBtn.style.background = '#000'
    lightBtnIcon.style.color = '#fff'
    resultBox.style.color = '#000'
    displayBox.style.background = '#fff'
    calculator.style.background = 'gray'
    numBtns.forEach(function(button){
        button.style.cssText = 'background: #fff;color: #000'
    })
}

function dark() {
    document.body.style.background = '#000'
    profileBox.style.cssText = 'background: #000;border:1px solid #fff;'
    lightBtn.style.background = '#fff'
    darkBtn.style.cssText = 'transition: 400ms ease;transform:translateX(0px);opacity:1;'
    lightBtn.style.cssText = 'transition: 400ms ease;transform:translateX(-6px);opacity:0;border:none;'
    resultBox.style.color = '#fff'
    displayBox.style.background = '#000'
    calculator.style.background = '#333333'
    numBtns.forEach(function(button){
        button.style.cssText = 'background: #000;color: #fff'
    })
}




lightBtn.addEventListener('click', light)
darkBtn.addEventListener('click', dark)
let v
let r
Buttons.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        if (e.target.dataset.action == 'clear') {
            resultBox.innerHTML = ''
        } else if (e.target.dataset.action == 'equals') {
            try {
                r = resultBox.innerHTML
                result = eval(r)
                resultBox.innerHTML = result

            } catch (error) {
                resultBox.innerHTML = ''
                resultBox.innerHTML = 'Error...'
                alert('please Enter correct data :)')
            }
        } else {
            v = e.target.dataset.value
            resultBox.innerHTML = resultBox.innerHTML + v
        }
    })
})

opBtn.forEach(function (elem) {
    elem.addEventListener('focus', function (e) {
        e.target.style.background = '#a5a5a5'
    })
    elem.addEventListener('blur', function (e) {
        e.target.style.background = '#ff9500'
    })
})