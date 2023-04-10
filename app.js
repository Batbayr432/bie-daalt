let slider = document.querySelector(".slider");
let about = document.querySelector(".about");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");



let ed1 = document.getElementById("ed-1");
ed1.addEventListener('mouseenter', ()=>
{
    ed1.style.color = '#ffaa50';
    ed1.style.borderBottom = '1.5px solid #ffaa50';
})
ed1.addEventListener('mouseleave', ()=>
{
    ed1.style.color = '#ffffff';
    ed1.style.borderBottom = 'none';
})



let ed2 = document.getElementById("ed-2");
ed2.addEventListener('mouseenter', ()=>
{
    ed2.style.color = '#ffaa50';
    ed2.style.borderBottom = '1.5px solid #ffaa50';
})
ed2.addEventListener('mouseleave', ()=>
{
    ed2.style.color = '#ffffff';
    ed2.style.borderBottom = 'none';
})



let ed3 = document.getElementById("ed-3");
ed3.addEventListener('mouseenter', ()=>
{
    ed3.style.color = '#ffaa50';
    ed3.style.borderBottom = '1.5px solid #ffaa50';
})
ed3.addEventListener('mouseleave', ()=>
{
    ed3.style.color = '#ffffff';
    ed3.style.borderBottom = 'none';
})



let ed4 = document.getElementById("ed-4");
ed4.addEventListener('mouseenter', ()=>
{
    ed4.style.color = '#ffaa50';
    ed4.style.borderBottom = '1.5px solid #ffaa50';
})
ed4.addEventListener('mouseleave', ()=>
{
    ed4.style.color = '#ffffff';
    ed4.style.borderBottom = 'none';
});


let ed5 = document.getElementById("ed-5");
ed5.addEventListener('mouseenter', ()=>
{
    ed5.style.color = '#ffaa50';
    ed5.style.borderBottom = '1.5px solid #ffaa50';
});
ed5.addEventListener('mouseleave', ()=>
{
    ed5.style.color = '#ffffff';
    ed5.style.borderBottom = 'none';
});
ed5.addEventListener('click', ()=>
{
    ed5.style.color = '#ffaa50';
    ed5.style.borderBottom = '1.5px solid #ffaa50';
});


let ongoSoli = document.querySelector(".ongoSoli");
let search = document.querySelector(".search");
let wallet = document.querySelector(".wallet");
let oof = document.querySelector("#i-11");
let t1 = document.querySelector("#t1")


t1.addEventListener('mouseenter',()=>
{
    t1.style.backgroundColor ='#313131';//ene ongiig avna shuuu hover
    ongoSoli.style.display = "block";
})
t1.addEventListener('mouseleave',()=>
{
    t1.style.backgroundColor ='#242424';
    ongoSoli.style.display = "none";
    t1.style.transition= 'all 0.3s'
})


let t2 = document.querySelector("#t2")
t2.addEventListener('mouseenter',()=>
{
    t2.style.backgroundColor ='#313131';//ene ongiig avna shuuu hover
    search.style.display = "block";
})
t2.addEventListener('mouseleave',()=>
{
    t2.style.backgroundColor ='#242424';
    search.style.display = "none";
    t2.style.transition= 'all 0.3s'
})


let t3 = document.querySelector("#t3")
t3.addEventListener('mouseenter',()=>
{
    // t3.style.backgroundColor ='#313131'; //ene ongiig avna shuuu hover
    wallet.style.display = "block";
    oof.style.transform = 'rotate(45deg)';
    oof.style.transition= 'all 0.2s'
})
t3.addEventListener('mouseleave',()=>
{
    // t3.style.backgroundColor ='#ffab28';
    wallet.style.display = "none";
    t3.style.transition= 'all 0.2s'
    oof.style.transform = 'rotate(-45deg)';
})









const po1 = document.querySelector('.po1');
const hover2 = document.querySelector('.hover2');
const rankH = document.querySelector('.hover1');
rankH.addEventListener('mouseover' , ()=>
{
    hover2.style.opacity = 0;
    po1.style.opacity = 1;
})
rankH.addEventListener('mouseout' , ()=>
{
    hover2.style.opacity = 1;
    hover2.style.transition = 'all 0.2s';
    po1.style.opacity = 0.3;
    po1.style.transition = 'all 0.2s';
})


const po2 = document.querySelector('#po2');
const hover4 = document.querySelector('#hover4');
const rankH1 = document.querySelector('#hover3');
rankH1.addEventListener('mouseover' , ()=>
{
    hover4.style.opacity = 0;
    po2.style.opacity = 1;
})
rankH1.addEventListener('mouseout' , ()=>
{
    hover4.style.opacity = 1;
    hover4.style.transition = 'all 0.2s';
    po2.style.opacity = 0.3;
    po2.style.transition = 'all 0.2s';
})



const po3 = document.querySelector('#po3');
const hover6 = document.querySelector('#hover6');
const rankH2 = document.querySelector('#hover5');
rankH2.addEventListener('mouseover' , ()=>
{
    hover6.style.opacity = 0;
    po3.style.opacity = 1;
})
rankH2.addEventListener('mouseout' , ()=>
{
    hover6.style.opacity = 1;
    hover6.style.transition = 'all 0.2s';
    po3.style.opacity = 0.3;
    po3.style.transition = 'all 0.2s';
})



const po4 = document.querySelector('#po4');
const hover8 = document.querySelector('#hover8');
const rankH3 = document.querySelector('#hover7');
rankH3.addEventListener('mouseover' , ()=>
{
    hover8.style.opacity = 0;
    po4.style.opacity = 1;
})
rankH3.addEventListener('mouseout' , ()=>
{
    hover8.style.opacity = 1;
    hover8.style.transition = 'all 0.2s';
    po4.style.opacity = 0.3;
    po4.style.transition = 'all 0.2s';
})


const po5 = document.querySelector('#po5');
const hover10 = document.querySelector('#hover10');
const rankH4 = document.querySelector('#hover9');
rankH4.addEventListener('mouseover' , ()=>
{
    hover10.style.opacity = 0;
    po5.style.opacity = 1;
})
rankH4.addEventListener('mouseout' , ()=>
{
    hover10.style.opacity = 1;
    hover10.style.transition = 'all 0.2s';
    po5.style.opacity = 0.3;
    po5.style.transition = 'all 0.2s';
})  


const po6 = document.querySelector('#po6');
const hover12 = document.querySelector('#hover12');
const rankH5 = document.querySelector('#hover11');
rankH5.addEventListener('mouseover' , ()=>
{
    hover12.style.opacity = 0;
    po6.style.opacity = 1;
})
rankH5.addEventListener('mouseout' , ()=>
{
    hover12.style.opacity = 1;
    hover12.style.transition = 'all 0.2s';
    po6.style.opacity = 0.3;
    po6.style.transition = 'all 0.2s';
})  


const po7 = document.querySelector('#po7');
const h2 = document.querySelector('#h2');
const rankH6 = document.querySelector('#h1');
rankH6.addEventListener('mouseover' , ()=>
{
    h2.style.opacity = 0;
    po7.style.opacity = 1;
})
rankH6.addEventListener('mouseout' , ()=>
{
    h2.style.opacity = 1;
    h2.style.transition = 'all 0.2s';
    po7.style.opacity = 0.3;
    po7.style.transition = 'all 0.2s';
})  


const po8 = document.querySelector('#po8');
const h4 = document.querySelector('#h4');
const rankH7 = document.querySelector('#h3');
rankH7.addEventListener('mouseover' , ()=>
{
    h4.style.opacity = 0;
    po8.style.opacity = 1;
})
rankH7.addEventListener('mouseout' , ()=>
{
    h4.style.opacity = 1;
    h4.style.transition = 'all 0.2s';
    po8.style.opacity = 0.3;
    po8.style.transition = 'all 0.2s';
})  

const po9 = document.querySelector('#po9');
const h6 = document.querySelector('#h6');
const rankH8 = document.querySelector('#h5');
rankH8.addEventListener('mouseover' , ()=>
{
    h6.style.opacity = 0;
    po9.style.opacity = 1;
})
rankH8.addEventListener('mouseout' , ()=>
{
    h6.style.opacity = 1;
    h6.style.transition = 'all 0.2s';
    po9.style.opacity = 0.3;
    po9.style.transition = 'all 0.2s';
})

const circle = document.querySelector('.circle-1')
circle.style.animationName = 'tomroh';

const serverAvtive = document.querySelector('.server-Active','.llr')
console.log(serverAvtive)
const playr = document.querySelector('.players')

serverAvtive.addEventListener('mouseover' , ()=>
{
    playr.style.display = 'block';
})
serverAvtive.addEventListener('mouseout' , ()=>
{
    playr.style.display = 'none';
})


let copy1 = document.querySelector('.ip')
let w1 = document.querySelector('#w-1')
let playCs =document.querySelector('.play-cs')
// let c1 = document.querySelector('.copy-1')
let hoverIp = document.querySelector('.copy-ip')
copy1.addEventListener('click',()=>
{
    // let copy = document.querySelector('.input')
    let c1 = document.querySelector('.copy-1')
    c1.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Amjilttai copydlo')
    console.log(c1);
})
console.log(w1)
w1.addEventListener('click',()=>
{
    alert('Түр хугацаанд ажиллах боломжгүй байна');
})

w1.addEventListener('mouseover', ()=>
{
    playCs.style.display = 'block';
})
w1.addEventListener('mouseout' , ()=>
{
    playCs.style.display = 'none';
    
})
copy1.addEventListener('mouseover' , ()=>
{
    hoverIp.style.display = "block";

})
copy1.addEventListener('mouseout' , ()=>
{
    hoverIp.style.display = "none";
    
})








let toglogchNemeh = document.querySelector('#toglogch-nemegdeh');
let BolomjitT =document.querySelector('#Bolomjit-t');
let hemje = document.querySelector('#hemje');
for (var i = 0 ; i <= 20 ; i++)
{
    if(toglogchNemeh.innerHTML <= 0)
    {
        hemje.style.height = '0%';
    }
    else if(toglogchNemeh.innerHTML <= 2)
    {
        hemje.style.height = '10%';
    }
    else if(toglogchNemeh.innerHTML <= 4)
    {
        hemje.style.height = '20%';
    }
    else if(toglogchNemeh.innerHTML <= 6)
    {
        hemje.style.height = '30%';
    }
    else if(toglogchNemeh.innerHTML <= 8)
    {
        hemje.style.height = '40%';
        // hemje.style.backgroundColor = "blue";
    }
    else if(toglogchNemeh.innerHTML <= 10)
    {
        hemje.style.height = '50%';
        hemje.style.backgroundColor = "#f6b949";
    }
    else if(toglogchNemeh.innerHTML <= 12)
    {
        hemje.style.height = '60%';
        hemje.style.backgroundColor = "#f6b949";
    }
    else if(toglogchNemeh.innerHTML <= 14)
    {
        hemje.style.height = '70%';
        hemje.style.backgroundColor = "orange";
    }
    else if(toglogchNemeh.innerHTML <= 16)
    {
        hemje.style.height = '80%';
        hemje.style.backgroundColor = "orange";
    }
    else if(toglogchNemeh.innerHTML <= 18)
    {
        hemje.style.height = '90%';
        hemje.style.backgroundColor = "red";
    }
    else if(toglogchNemeh.innerHTML <= 20)
    {
        hemje.style.height = '100%';
        hemje.style.backgroundColor = "red";
    }
}






let toglogchNemeh1 = document.querySelector('#toglogch-nemegdeh-1');
let BolomjitT1 =document.querySelector('#Bolomjit-t-1');
let hemje1 = document.querySelector('.hemje-1');
console.log(hemje1)
for (var s = 0 ; s <= 20 ; s++)
{
    if(toglogchNemeh1.innerHTML <= 0)
    {
        hemje1.style.height = '0%';
    }
    else if(toglogchNemeh1.innerHTML <= 2)
    {
        hemje1.style.height = '10%';
    }
    else if(toglogchNemeh1.innerHTML <= 4)
    {
        hemje1.style.height = '20%';
    }
    else if(toglogchNemeh1.innerHTML <= 6)
    {
        hemje1.style.height = '30%';
    }
    else if(toglogchNemeh1.innerHTML <= 8)
    {
        hemje1.style.height = '40%';
        // hemje1.style.backgroundColor = "blue";
    }
    else if(toglogchNemeh1.innerHTML <= 10)
    {
        hemje1.style.height = '50%';
        hemje1.style.backgroundColor = "#f6b949";
    }
    else if(toglogchNemeh1.innerHTML <= 12)
    {
        hemje1.style.height = '60%';
        hemje1.style.backgroundColor = "#f6b949";
    }
    else if(toglogchNemeh1.innerHTML <= 14)
    {
        hemje1.style.height = '70%';
        hemje1.style.backgroundColor = "orange";
    }
    else if(toglogchNemeh1.innerHTML <= 16)
    {
        hemje1.style.height = '80%';
        hemje1.style.backgroundColor = "orange";
    }
    else if(toglogchNemeh1.innerHTML <= 18)
    {
        hemje1.style.height = '90%';
        hemje1.style.backgroundColor = "red";
    }
    else if(toglogchNemeh1.innerHTML <= 20)
    {
        hemje1.style.height = '100%';
        hemje1.style.backgroundColor = "red";
    }
}
let toglogchNemeh2 = document.querySelector('#toglogch-nemegdeh-2');
let BolomjitT2 =document.querySelector('#Bolomjit-t-2');
let hemje2 = document.querySelector('.hemje-2');
for (var s = 0 ; s <= 20 ; s++)
{
    if(toglogchNemeh2.innerHTML <= 0)
    {
        hemje2.style.height = '0%';
    }
    else if(toglogchNemeh2.innerHTML <= 2)
    {
        hemje2.style.height = '10%';
    }
    else if(toglogchNemeh2.innerHTML <= 4)
    {
        hemje2.style.height = '20%';
    }
    else if(toglogchNemeh2.innerHTML <= 6)
    {
        hemje2.style.height = '30%';
    }
    else if(toglogchNemeh2.innerHTML <= 8)
    {
        hemje2.style.height = '40%';
        // hemje2.style.backgroundColor = "blue";
    }
    else if(toglogchNemeh2.innerHTML <= 10)
    {
        hemje2.style.height = '50%';
        hemje2.style.backgroundColor = "#f6b949";
    }
    else if(toglogchNemeh2.innerHTML <= 12)
    {
        hemje2.style.height = '60%';
        hemje2.style.backgroundColor = "#f6b949";
    }
    else if(toglogchNemeh2.innerHTML <= 14)
    {
        hemje2.style.height = '70%';
        hemje2.style.backgroundColor = "orange";
    }
    else if(toglogchNemeh2.innerHTML <= 16)
    {
        hemje2.style.height = '80%';
        hemje2.style.backgroundColor = "orange";
    }
    else if(toglogchNemeh2.innerHTML <= 18)
    {
        hemje2.style.height = '90%';
        hemje2.style.backgroundColor = "red";
    }
    else if(toglogchNemeh2.innerHTML <= 20)
    {
        hemje2.style.height = '100%';
        hemje2.style.backgroundColor = "red";
    }
}