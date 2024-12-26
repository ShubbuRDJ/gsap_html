// ************ normal animation ********

// gsap.from("#box",{
//     x:1500,
//     duration:2,
//     delay:1,
//     scale:0.5,
//     borderRadius:"50%",
//     rotate:360,
//     opacity:0,
// })

// *************** with scroll trigger ***************

// gsap.from("#page2 #box2",{
//     duration:2,
//     delay:1,
//     scale:0.5,
//     borderRadius:"50%",
//     rotate:360,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -150%",
//         scrub:2,
//         pin:true,
//     }
// })

// ************** svg animation ***********

// const initialPath = "M 10 100 Q 500 100 990 100";
// const finalPath = "M 10 100 Q 500 100 990 100";

// const svgParentEle = document.getElementById('box');

// svgParentEle.addEventListener('mousemove', (e) => {
//     let path = `M 10 100 Q ${e.x} ${e.y} 990 100`
//     gsap.to('#box svg path', {
//         attr: { d: path },
//         stroke: `rgb(${111},${e.x},${e.y})`,
//         duration: 0.3,
//         ease: "power3.out",
//     })
// })

// svgParentEle.addEventListener('mouseleave', (e) => {
//     gsap.to('#box svg path', {
//         attr: { d: finalPath },
//         duration: 1.5,
//         ease: "elastic.out(1,0.2)"
//     })
// })


// *************** custom cursor ***************

// const mainContainer = document.getElementById('cursor-main');
// const cursor = document.getElementById('cursor');
// const image = document.getElementById('image');

// mainContainer.addEventListener('mousemove',(event)=>{
//     gsap.to(cursor,{
//         x:event.x,
//         y:event.y,
//         duration:1,
//         ease:"back.out"
//     })
// })

// image.addEventListener('mouseenter',(e)=>{
//     gsap.to(cursor,{
//         scale:4,
//         innerHTML:'View More',
//         display:'flex'
//     })
// })
// image.addEventListener('mouseleave',(e)=>{
//     gsap.to(cursor,{
//         scale:1,
//         innerHTML: '',
//         display:'none'
//     })
// })


// ******************** for menu animation ************************

const timeLine = gsap.timeline();

timeLine.to('#menu', {
    right: 0,
    duration: 0.5,
})

timeLine.from('#menu h4', {
    x: 150,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})

timeLine.from('#menu i', {
    opacity: 0
})

timeLine.pause();

const menuButton = document.querySelector('#nav i');
const cross = document.querySelector('#menu i');

menuButton.addEventListener('click', () => {
    timeLine.play();
})
cross.addEventListener('click', () => {
    timeLine.reverse();
})
