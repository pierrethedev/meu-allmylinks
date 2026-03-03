document.addEventListener("DOMContentLoaded", () =>{
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
        link.addEventListener("click",() => {
            let clicks = localStorage.getItem(link.innerText) || 0;
            clicks++;
            
            localStorage.setItem(link.innerText, clicks);

            console.log(`Link ${link.innerText} clicado ${clicks} vezes`)
        });
    });
});