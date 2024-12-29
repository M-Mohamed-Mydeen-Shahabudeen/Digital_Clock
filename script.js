function updateclock()
{
    const clock=document.getElementById('clock');
    
    const now=new Date();
    const time=now.toLocaleTimeString()
    
    clock.innerText=time;
    
    

}
function da(){
    const dates=document.getElementById('dates');
    const now=new Date();
    let formattedDate=now.toLocaleDateString();
    dates.innerText=formattedDate;
    

}

setInterval(updateclock,1000);
updateclock();
da();

