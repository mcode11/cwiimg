kpr=""
term=document.getElementById("terminal")
term.innerHTML=eval(cwifs.file.read("/etc/motd"))()+"<br>"
promptw=eval(cwifs.file.read("/home/main/.prefix"))()
cursor=0
function pageScroll() {
    term.scrollBy(0,100); // horizontal and vertical scroll increments
    document.scrollingElement.scrollBy(0,100) 
    scrolldelay = setTimeout(pageScroll,0); // scrolls every 100 milliseconds
}
term.clear=(isOnly)=>{
    if(isOnly){
        term.innerHTML=""+promptw
    }else{
        term.innerHTML=""
    }
}
function shell() {
    term.innerHTML+=promptw
    cursor=2
    document.addEventListener("keydown",(e)=>{
        printable = !(e.key.length>1)
        if(e.key=="Enter"){
            term.innerHTML+="<br>"
            term.innerHTML+=exec(kpr)
            term.innerHTML+=promptw
            kpr=""
            cursor=2
        }else if(e.key=="Backspace"||e.key=="Delete"){
            if(cursor!==2){
                term.innerHTML=term.innerHTML.slice(0,-1)
                kpr=kpr.slice(0,-1)
                cursor-=1
            }
        }else{
            if(printable){
                term.innerHTML+=e.key
                kpr+=e.key
                cursor+=1
            }
        }
    })
}
pageScroll()
shell()