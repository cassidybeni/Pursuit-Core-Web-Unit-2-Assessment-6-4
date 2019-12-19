document.addEventListener("DOMContentLoaded", () => {
    let div = document.querySelector("div")
    let form = document.querySelector("form")
    let review = document.querySelector("#review")
    let submitReview = document.querySelector("#submitReview")
    let ul = document.querySelector("ul")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let li = document.createElement("li")
        li.innerText = review.value
        review.appendChild(li)
        ul.appendChild(li)
        searchFilm(review.value, submitReview.value)
    })

    const searchFilm = async () => {
        try {
            let res = await axois.get(`https://ghibliapi.herokuapp.com/films`)
            chooseFilm(res.data)
        } catch (error) {
    
        }
    }

    const chooseFilm = async () => {
        let selectFilm = document.querySelector("#selectFilm")
        selectFilm.innerText = film.title
    }
    
    const populateDiv = (films) => {
        films.forEach((film) => {
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