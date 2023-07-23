// Getting the id of the character through the url
const Id =  new URLSearchParams(window.location.search).get('character');

// Creating Url
const url = `http://gateway.marvel.com/v1/public/characters/${Id}?&ts=1&apikey=26cd8e7d36c0122137914a00f6b87862&hash=f7fb73edbdb6b9355a7c4c7a6a7d68b9`

// Calling the api through url
async function char(url){
    const res = await fetch(url)
    const data = await res.json()
    // calling hte renderCharacter function to render all the details of the user
    renderCharacter(data.data.results)
}
char(url)


// Render Character function
function renderCharacter(data){

    // Character Name
    const name = document.querySelector('#charName')
    name.innerHTML = data[0].name

    // Image render
    const img = document.querySelector('#img')
    img.setAttribute('src',`${data[0].thumbnail.path}.jpg`)
    
    // Comics List render
    const comicsOl = document.querySelector('#comicsOl')
    for(let i=0;i<data[0].comics.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                    ${data[0].comics.items[i].name}

                    `
        comicsOl.append(li)
    }

    // Events List Render
    const evenetsOl = document.querySelector('#eventsOl')
    for(let i=0;i<data[0].events.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                ${data[0].events.items[i].name}

        `
        evenetsOl.append(li)
    }

    // Series List Render
    const seriesOl = document.querySelector('#seriesOl')
    for(let i=0;i<data[0].series.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                ${data[0].series.items[i].name}

        `
        seriesOl.append(li)
    }

    // Stories List Render
    const storiesOl = document.querySelector('#storiesOl')
    for(let i=0;i<data[0].stories.items.length;i++){
        let li = document.createElement('li')
        li.innerHTML = `

                ${data[0].stories.items[i].name}

        `
        storiesOl.append(li)
    }
}