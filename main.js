//start  jquery code
$('.fa-bars').click(function(){
$('.header .container  .nav').toggleClass('open')
})
$('.nav li a').click(function(){
    $('body').addClass('light')
  
    $('body,html').animate({
    scrollTop:$('#'+$(this).data('scroll')).offset().top - 80
    })
})
// add clas toogle \\

$('.fa-sun').click(function(){
    $('body').removeClass('night')
    $('.project section h3').css({'color':'black'})
    $('section .container .info p').css({'color':'black'})
    $('.project section .cards .text p').css({'color':'black'})

})
$('list-mode .fa-sun').click(function(){
    $('.project section h3').css({'color':'black'})
})
$('.fa-moon').click(function(){
    $('body').addClass('night')
    $('section .container .info p').css({'color':'white'})
    $('.project section h3').css({'color':'white'})
    $('.project section .cards .text p').css({'color':'white'})
    $('.section#Blog .container .room .small-room .text div').css({'color':'white'})
    $('section .container .box-text p').css({'color':'white'})
    $('section .container .box-text .icons .md').css({'color':'white'})
})
$('.fa-cog').click(function(){
    $('.list').toggleClass('left')
})
$(window).scroll(function(){
 $('.list').addClass('left')
})

// change the class from li \\
$('.nav > li > a ').click(function(){

 $(this).addClass('active').parent().siblings().find('a').removeClass('active')
   
}) 
// change the class from li \\

// filter img code
$('.lage').click(function(){
   const value = $(this).attr('data-filter')
   if(value == 'All'){
    $('.box').show(1000)
   }else{
    $('.box').not('.' + value).fadeOut()
    $('.box').filter('.' + value).fadeIn()
   }
})
  

$('body').css('paddingTop',$('.header').innerHeight())

$('.filter .lage').click(function(){
    $(this).addClass('add').siblings().removeClass('add')
})



//end  jquery code


// start java scribt
 let position = document.querySelector('section#skills')
window.onscroll = function(){
let top = position.offsetTop
let height = position.offsetHeight
let inner = innerHeight
let page = this.pageYOffset;
if(page >(top + height -inner)){
    let change = document.querySelectorAll('.change').forEach((e)=>{
        e.style.width = e.dataset.space
    })
}
}

//color change
localStoragee = localStorage.getItem('--skin-color')
if(localStorage!==null){
    document.documentElement.style.setProperty('--skin-color',localStoragee)
}
const liColorChange = document.querySelectorAll('.list .list-color li')
liColorChange.forEach((el)=>{
    el.addEventListener('click',(e)=>{
     document.documentElement.style.setProperty('--skin-color',e.target.dataset.color)
     localStorage.setItem('--skin-color',e.target.dataset.color)
    })
})
 var typed  = new Typed('.change ',{
    strings:['designer','Graphic','Developur','Front End','BackEnd'],
    typeSpeed :100,
    backSpeed :100 ,
    loop:true
 });


// numbur   \|
 let numChange = document.querySelectorAll('.num')
numChange.forEach((count)=>{
    count.innerText = '0'

    const upDateCounter=()=>{
        const target = +count.getAttribute('data-target')
        const c = +count.innerText;
        const increment = target /200
        if(c < target){
            count.innerText =`${Math.ceil( c + increment)}`
            setTimeout((upDateCounter),6)
           
        }
      
    
    }
    window.addEventListener('scroll',()=>{
     let a =  document.querySelector('.container .all-box')
     let b  = a.getBoundingClientRect().top


     let c = window.innerHeight
   
     if(b +200 <=c){
    setTimeout(upDateCounter(),6)
     }
        })
   
     
    
})

let stv = document.querySelector('.scroll .fa-arrow-up')
 window.addEventListener('scroll',()=>{
 if(window.pageYOffset >300){
 stv.style.display ='block'
 }else{
    stv.style.display ='none'
 }

 })
stv.onclick =function(){
    window.scrollTo(0,0)
}
 

let a = document.querySelector('.nav')
window.addEventListener('scroll',()=>{
    if(a.classList.contains('open')){
     a.classList.remove('open')
    }
})

let lie = document.querySelectorAll('.nav li ')
let sec = document.querySelectorAll('section')
function home(){
    let len = sec.length
    while(--len + window.scrollY + 90 < sec[len].offsetTop -30){}
    lie.forEach(list=>{
        list.classList.remove('active')
        lie[len].classList.add('active')
    })
}
window.addEventListener('scroll',home)




// end java scribt




