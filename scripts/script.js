
const body = document.getElementById('body');

const headerTitle = document.getElementById('header_title');
const bodySlider = document.getElementById('body_slider')
const heroText = document.getElementsByClassName('hero_text')

const pageLoader = document.getElementById('page_loader');
const links = document.getElementsByTagName('a'); 


window.scrollTo(0,0);


window.addEventListener("load", ()=>{
    pageLoader.classList.remove("aLoaded");
    setTimeout(()=>{
        pageLoader.classList.add("aLoaded");
    }, 500)
});

for (const link of links) {
    link.addEventListener('click', ()=>{
        if(link.dataset.href != null){
            pageLoader.classList.remove("aLoaded");
            pageLoader.classList.add("aNotLoaded");
            setTimeout(()=>{
                pageLoader.classList.remove("aNotLoaded");
                window.location.href = `${link.dataset.href}`
            }, 300)
            
        }
    });
}

var numOfPages = 10

var winW = window.innerWidth
var winH = window.innerHeight
var vw = winW/100
var vh = winH/100

var pageH = winH * 1.1

// var heroTextH = heroText[0].getBoundingClientRect().height


const menuIcon = document.getElementById('menu_icon');

const menunav_links = document.getElementsByClassName('menunav_link');
const menu_dec_text = document.getElementById('menu_dec_text')
const menu_dec_img = document.getElementById('menu_dec_img')
const menu_dec_box = document.getElementById('menu_dec_box')
const menu_dec_mini_text_resp = document.getElementById('menu_dec_mini_text_resp')

menuOpen = false

menuIcon.addEventListener('click', ()=>{
    if(menuOpen == false){
        menu_dec_box.classList.remove('a2r')
        menu_dec_text.classList.add('a4')
        menu_dec_text.classList.add('ad1')
        menu_dec_img.classList.add('a4')
        menu_dec_img.classList.add('ad15')
        menu_dec_box.classList.add('a4')
        menu_dec_box.classList.add('ad05')
        menu_dec_mini_text_resp.classList.add('a4')
        for (let index = 0; index < menunav_links.length; index++) {
            const element = menunav_links[index];
            element.classList.add('a2')
            element.style.animationDelay = `${(index*2+5)/10}s`
        }
    } else {
        menu_dec_text.classList.remove('a4')
        menu_dec_text.classList.remove('ad1')
        menu_dec_img.classList.remove('a4')
        menu_dec_img.classList.remove('ad15')
        menu_dec_box.classList.remove('a4')
        menu_dec_box.classList.remove('ad05')
        menu_dec_mini_text_resp.classList.remove('a4')
        for (let index = 0; index < menunav_links.length; index++) {
            const element = menunav_links[index];
            element.classList.remove('a2')
        }
        menu_dec_box.classList.add('a2r')
    }
    menuOpen = !menuOpen
    body.dataset.menuOpen = menuOpen
    
})


for (const element of menunav_links) {
    element.addEventListener("mouseover", ()=>{
        menu_dec_text.innerText = element.innerText
        menu_dec_text.dataset.text = `${element.innerText}`
    })
}

const caras = document.getElementsByClassName('caras');

children = caras[0].children

const carases = (children) => {
    for (let index = 0; index < children.length; index++) {
        const child = children[index];
        child.style.animationDelay = `${index}s`;
    }
}

for (let index = 0; index < caras.length; index++) {
    const children = caras[index].children;
    carases(children)
}




const mf = document.getElementById('mouse_follower');

window.addEventListener('mousemove', (e) => {
    cX = e.clientX
    cY = e.clientY

    cX = cX - mf.offsetWidth/2
    cY = cY - mf.offsetHeight/2

    mf.style.cssText = `transform: translate(${cX}px, ${cY}px)`
})

var prevSY = 0
var sDirection = 1

window.addEventListener('scroll', (e) => {
    sY = window.scrollY
    if(prevSY-sY>0){
        sDirection = -1
    } else {
        sDirection = 1
    }
    prevSY = sY
    
    if(sY >= 5000){
        body.dataset.fooseen = `true`;
    } else {
        body.dataset.fooseen = `false`;
    }

    bodySlider.style.transform = `translateY(${-sY}px)`


    for (let index = 0; index < numOfPages; index++) {
        var diffIndex = index + 1
        if(sY <= pageH*diffIndex - 300 && sY >pageH*index - 300){
            body.dataset.currentPage = `${index}`
        }
    }
})

const toScrollLinks = document.getElementsByClassName('toHrefLink');

for (const link of toScrollLinks) {
    link.addEventListener('click', ()=>{
        window.scrollTo(0, link.dataset.hrefScrollValue * pageH);
    });
}



const buttons = document.getElementsByClassName('button');
var btnsBounds =[]

for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    btnsBounds.push(btn.getBoundingClientRect())
    const btnsBound = btnsBounds[index]


    var btnsW = btnsBound.width;
    var btnsH = btnsBound.height;
    btn.innerHTML += `<div class="btn_hover_dec"></div>`
    btn.addEventListener('mouseenter', (e)=>{
        btn.dataset.btnHovered = "true"

        cX = e.clientX
        cY = e.clientY
    });
    btn.addEventListener('mouseleave', ()=>{
        btn.dataset.btnHovered = "false"
        btn.style.transform = `translate(0px, 0px)`;
    });
    btn.addEventListener('mousemove', (e)=>{
        cX = e.clientX
        pY = e.pageY

        btnX = btnsBound.left + btnsW/2 - cX;
        btnY = btnsBound.top + btnsH/2 - pY;

        btn.style.transform = `translate(${-btnX*0.2}px, ${-btnY*0.2}px)`;
    })
}

const movingMedias = document.getElementsByClassName('movingMedia')

window.addEventListener('scroll', ()=>{
    sY = window.scrollY
    for (const movmed of movingMedias) {
        // if(movmed.dataset.movmedPage == body.dataset.currentPage)
        // movmed.style.transform = `translateY(${sY/3 - 200*movmed.dataset.movmedPage}px)`
        movmed.style.transform = `translateY(${sY/3 - winH}px)`
    }
})

const ata = document.getElementsByClassName('ata')

const ataCheck = () => {
    for (const element of ata) {
        indexata = 0
        elementText = element.innerText
        initialDelay = element.dataset.initialAd
        element.innerHTML = ``
        for (const letter of elementText) {
            indexata += 5
            if(letter == " "){
                element.innerHTML += `<span style="width: 0.3em; animation-delay: ${parseInt(initialDelay) + indexata/100}" class="a4"></span>`
                indexata -= 5
            } else {
                element.innerHTML += `<span style="animation-delay: ${parseInt(initialDelay) + indexata/100}s" class="a4">${letter}</span>`
            }
            
        }
    }
}

ataCheck()



const hpds = document.getElementsByClassName('hpd');
const hpds_bgs = document.getElementsByClassName('hpd_bg');

const hpdWorkingPages = 1.25
const hpdNum = hpds.length
const hpdWorkingRatio = hpdWorkingPages/hpdNum

const atls = document.getElementsByClassName('atl');

window.addEventListener('scroll', (e)=>{
    sY = window.scrollY
    spRatio = sY/(winH*hpdWorkingPages)
    // console.log(spRatio)
    if(spRatio <= 1.1 * hpdWorkingPages){
        for (let index = 0; index < hpds.length; index++) {
            const hpd = hpds[index];
            const hpds_bg = hpds_bgs[index]

            hpds_width_change_ratio = (spRatio - hpdWorkingRatio*(index))/(hpdWorkingRatio)
            if(hpds_width_change_ratio <= 0){
                hpds[index].style.width = `0px`;
            }
            hpds[index].style.width = `${(winW * hpds_width_change_ratio)}px`;
        }
    }

    for (let index = 0; index < atls.length; index++) {
        const atl = atls[index];
        if(atl.dataset.atl == "afi" && body.dataset.currentPage == atl.dataset.atlpage){
            atl.style.opacity = `1`
            for (let index = 0; index < atl.children.length; index++) {
                const atlChild = atl.children[index];
                atlChild.style.animationDelay = `${index/10}s`
                atlChild.classList.add('afi')
            }
        } else if(atl.dataset.atl == "afii" && body.dataset.currentPage == atl.dataset.atlpage){
            atl.classList.add("afi")
        } else if(body.dataset.currentPage == atl.dataset.atlpage){
            atl.classList.add(atl.dataset.atl)
        }
        
    }
})

const main_video_link = document.getElementById('main_video_link');
const mv_close_btn = document.getElementById('mv_close_btn');

if(main_video_link){
    main_video_link.addEventListener('click', ()=>{
        body.dataset.mainvidOpen = `true`
    })
    mv_close_btn.addEventListener('click', ()=>{
        body.dataset.mainvidOpen = `false`
    })
}

const p5_boxes = document.getElementsByClassName('p5_box')
const p5b_gbs = document.getElementsByClassName('p5b_gb');

var p5bCanopen = true

for (let index = 0; index < p5_boxes.length; index++) {
    const p5_box = p5_boxes[index];
    const p5b_gb = p5b_gbs[index];
    p5_box.addEventListener('click', ()=>{
        if(p5bCanopen){
            p5_box.dataset.pboxOpen = `true`
            p5bCanopen = false
        }
    })
    p5b_gb.addEventListener('click', ()=>{
        console.log("d")
        p5_box.dataset.pboxOpen = `false`
        setTimeout(()=>{
            p5bCanopen = true
        }, 500)
        
    })
}

const p6w_slider = document.getElementsByClassName('p6w_slider');

window.addEventListener('scroll', ()=>{
    sY = window.scrollY
    sP6Ratio = (sY)/(winH * 8)

    if(p6w_slider[0]){
        p6w_slider[0].style.transform = `translateX(${(sP6Ratio * 100 - 150)*0.9}%)`
        p6w_slider[1].style.transform = `translateX(${(sP6Ratio * 100 - 100)*-0.9}%)`
    }
})


// VISION PAGE

var numOfPagesVision = 7
var heightOfPageVision = winH * 6.3

const v_slider_box = document.getElementById('v_slider_box');
const v_slider_thumb = document.getElementById('v_slider_thumb');
const v_slider_text = document.getElementById('v_slider_text');

window.addEventListener('scroll', ()=>{

    var progressionVision = sY/heightOfPageVision

    sY = window.scrollY

    if(v_slider_box){
        v_slider_box.style.transform =  `translateY(${sY}px)`;
        v_slider_thumb.style.height = `${progressionVision*100}%`

        if(body.dataset.currentPage == "1"){
            v_slider_text.innerText = "What"
        }
        if(body.dataset.currentPage == "4"){
            v_slider_text.innerText = "How"
        }
        if(body.dataset.currentPage == "5"){
            v_slider_text.innerText = "Why"
        }
        if(body.dataset.currentPage == "6"){
            v_slider_text.innerText = "When"
        }
    }


    
})

// CONTACTS PAGE

const cp1_box = document.getElementsByClassName('cp1_box');

if(cp1_box[0]){
    for (let index = 0; index < cp1_box[0].children.length; index++) {
        const cp1b_child = cp1_box[0].children[index];
        cp1b_child.style.animationDelay = `${index/5}s`;
    }
}



// PROJECTS PAGE

const p_pages = document.getElementsByClassName('p_page');


if(p_pages[0]){
    window.addEventListener('scroll', ()=>{
        sY = window.scrollY
        console.log(sY, 110*vh)
        for (let index = 0; index < p_pages.length; index++) {
            const ppage = p_pages[index];
            if(sY >= 110*vh*(index+1)){
                ppage.dataset.scrollWith="true"
                ppage.style.transform = `translateY(${sY - 110*vh*(index+1)}px)`;
            } else {
                ppage.dataset.scrollWith="false"
            }
        }
    })
}


