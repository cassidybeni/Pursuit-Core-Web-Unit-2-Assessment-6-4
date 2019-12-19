document.addEventListener("DOMContentLoaded", () => {
    let div = document.querySelector("div")
    let form = document.querySelector("form")
    let review = document.querySelector("#review")
    let submitReview = document.querySelector("#submitReview")
    let ul = document.querySelector("ul")
    
    const populateDiv = (films) => {
        films.forEach(film => {
            let h3 = document.createElement("h3")
            let p1 = document.createElement("p1")
            let p2 = document.createElement("p2")
            h3.innerText = film.title
            p1.innerText = film.release_date
            p2.innerText = film.description
            div.appendChild(h3)
            div.appendChild(p1)
            div.appendChild(p2)
            
        })
    }
    populateDiv()
})