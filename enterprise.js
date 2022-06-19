

document.querySelectorAll('video')[0].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('video')[0];
    let button=document.getElementsByClassName('playButoon')[0]
    button.style.display='none';
    // video.setAttribute('autoplay','true')
    video.play();
    // console.log(video)
})
document.querySelectorAll('video')[1].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('video')[1];
    let button=document.getElementsByClassName('playButoon')[1]
    button.style.display='none';
    // video.setAttribute('autoplay','true')
    video.play();
    // console.log('hello2')
})
document.querySelectorAll('video')[2].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('video')[2];
    let button=document.getElementsByClassName('playButoon')[2]
    button.style.display='none';
    // video.setAttribute('autoplay','true')
    video.play();
    // console.log('hello3')
})
document.querySelectorAll('video')[3].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('video')[3];
    let button=document.getElementsByClassName('playButoon')[3]
    button.style.display='none';
    // video.setAttribute('autoplay','true')
    video.play();
    // console.log('hello4')
})

document.querySelectorAll('video')[0].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('video')[0];
    let button=document.getElementsByClassName('playButoon')[0]
    button.style.display='block';
    
    // video.setAttribute('autoplay','true')
    video.pause();
    console.log(video)
})
document.querySelectorAll('video')[1].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('video')[1];
    let button=document.getElementsByClassName('playButoon')[1]
    button.style.display='block';
    // video.setAttribute('autoplay','true')
    video.pause();
    // console.log('hello2')
})
document.querySelectorAll('video')[2].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('video')[2];
    let button=document.getElementsByClassName('playButoon')[2]
    button.style.display='block';
    // video.setAttribute('autoplay','true')
    video.pause();
    // console.log('hello3')
})
document.querySelectorAll('video')[3].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('video')[3];
    let button=document.getElementsByClassName('playButoon')[3]
    button.style.display='block';
    // video.setAttribute('autoplay','true')
    video.pause();
    // console.log('hello4')
})

// adding video effectes 
let allData=document.querySelectorAll('.btn1')
allData.forEach((e,i)=>{

    // e.style.backgroundColor=''
    // e.style.backgroundColor='white';
    e.addEventListener('click',function(event){
        allData.forEach(x=>{
            x.style.backgroundColor='white'
            x.style.color='blue'
        })
        console.log(i)
        if(i==0){
            document.querySelectorAll('.clip')[0].src='https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4'
            document.querySelectorAll('.clip')[1].src='https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4'
            document.querySelectorAll('.clip')[2].src='https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4'
            document.querySelectorAll('.clip')[3].src='https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4'
            document.querySelectorAll('.clip')[4].src='https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4'
            document.querySelectorAll('.clip')[5].src='https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4'

        }
        else if(i==1){
            document.querySelectorAll('.clip')[0].src='https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection.mp4'
            document.querySelectorAll('.clip')[1].src='https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP.mp4'
            document.querySelectorAll('.clip')[2].src='https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling.mp4'
            document.querySelectorAll('.clip')[3].src='https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas.mp4'
            document.querySelectorAll('.clip')[4].src='https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.mp4'
            document.querySelectorAll('.clip')[5].src='https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19.mp4'
        }
        else if(i==2){
            document.querySelectorAll('.clip')[0].src='https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4'
            document.querySelectorAll('.clip')[1].src='https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing.mp4'
            document.querySelectorAll('.clip')[2].src='https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor.mp4'
            document.querySelectorAll('.clip')[3].src='https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Innovation%20Awards.mp4'
            document.querySelectorAll('.clip')[4].src='https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20(1).mp4'
            document.querySelectorAll('.clip')[5].src='https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate.mp4'
        }
        else if(i==3){
            document.querySelectorAll('.clip')[0].src='https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4'
            document.querySelectorAll('.clip')[1].src='https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4'
            document.querySelectorAll('.clip')[2].src='https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4'
            document.querySelectorAll('.clip')[3].src='https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture.mp4'
            document.querySelectorAll('.clip')[4].src='https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer.mp4'
            document.querySelectorAll('.clip')[5].src='https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge.mp4'
        }
        else if(i==4){
            document.querySelectorAll('.clip')[0].src='https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(1).mp4'
            document.querySelectorAll('.clip')[1].src='https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local.mp4'
            document.querySelectorAll('.clip')[2].src='https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility.mp4'
            document.querySelectorAll('.clip')[3].src='https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy.mp4'
            document.querySelectorAll('.clip')[4].src='https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL.mp4'
            document.querySelectorAll('.clip')[5].src='https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(2).mp4'
        }
        event.target.style.backgroundColor='blue'
        event.target.style.color='white'

    })
})

// mouse over and display functions 
// mouse over 

document.querySelectorAll('.clip')[0].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('.clip')[0];
    let button=document.getElementsByClassName('playbts')[0]
    button.style.display='none';
    video.play();
})

document.querySelectorAll('.clip')[1].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('.clip')[1];
    let button=document.getElementsByClassName('playbts')[1]
    button.style.display='none';
    video.play();
})

document.querySelectorAll('.clip')[2].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('.clip')[2];
    let button=document.getElementsByClassName('playbts')[2]
    button.style.display='none';
    video.play();
})

document.querySelectorAll('.clip')[3].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('.clip')[3];
    let button=document.getElementsByClassName('playbts')[3]
    button.style.display='none';
    video.play();
})

document.querySelectorAll('.clip')[4].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('.clip')[4];
    let button=document.getElementsByClassName('playbts')[4]
    button.style.display='none';
    video.play();
})

document.querySelectorAll('.clip')[5].addEventListener('mouseover',function(){
    let video=document.querySelectorAll('.clip')[5];
    let button=document.getElementsByClassName('playbts')[5]
    button.style.display='none';
    video.play();
})


// mouse out 

document.querySelectorAll('.clip')[0].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('.clip')[0];
    let button=document.getElementsByClassName('playbts')[0]
    button.style.display='block';
    video.pause();
})

document.querySelectorAll('.clip')[1].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('.clip')[1];
    let button=document.getElementsByClassName('playbts')[1]
    button.style.display='block';
    video.pause();
})

document.querySelectorAll('.clip')[2].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('.clip')[2];
    let button=document.getElementsByClassName('playbts')[2]
    button.style.display='block';
    video.pause();
})

document.querySelectorAll('.clip')[3].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('.clip')[3];
    let button=document.getElementsByClassName('playbts')[3]
    button.style.display='block';
    video.pause();
})

document.querySelectorAll('.clip')[4].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('.clip')[4];
    let button=document.getElementsByClassName('playbts')[4]
    button.style.display='block';
    video.pause();
})

document.querySelectorAll('.clip')[5].addEventListener('mouseout',function(){
    let video=document.querySelectorAll('.clip')[5];
    let button=document.getElementsByClassName('playbts')[5]
    button.style.display='block';
    video.pause();
})

document.getElementById('create').addEventListener('click',function(){
    if(document.querySelector('#menuss').style.display=='none'){
        document.querySelector('#menuss').style.display='block'
    }
    else{
        document.querySelector('#menuss').style.display='none'
    }
    
})

document.querySelector("#learn").addEventListener("click",function(){
    window.location.href="blog.html"
})

document.querySelector("#logo").addEventListener("click",function(){
    window.location.href="index.html"
})

document.querySelector("#pricing").addEventListener("click",function(){
    window.location.href="pricing.html"
})

document.querySelector("#casestudy").addEventListener("click",function(){
    window.location.href="casestudy.html"
})

document.querySelector("#enterprise").addEventListener("click",function(){
    window.location.href="enterprise.html"
})

document.querySelector("#btn1").addEventListener("click",function(){
    window.location.href="login.html"
})
document.querySelector("#btn2").addEventListener("click",function(){
    window.location.href="signup.html"
})


document.querySelector("#butn2").addEventListener("click", function () {
    window.location.href="signup.html"
})

document.querySelector(".Requestbtn").addEventListener("click", function () {
    window.location.href="signup.html"
})





// slider 
