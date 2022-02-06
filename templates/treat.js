"use strict";


document.addEventListener('DOMContentLoaded', function() {
    var activeAddress = "";
    let cardData = [{
            name: 'First Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern1.jpeg",
            walletAddress: "123"
        },
        {
            name: 'Second Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern2.jpeg",
            walletAddress: "1234"
        },
        {
            name: 'Third Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern3.jpeg",
            walletAddress: "12345"
        },
        {
            name: 'Fourth Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern4.jpeg",
            walletAddress: "123456"
        },
        {
            name: 'Fifth Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern5.jpeg",
            walletAddress: "1234567"
        },
        {
            name: 'Sixth Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern6.jpeg",
            walletAddress: "12345678"
        },
        {
            name: 'Seventh Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern7.jpeg",
            walletAddress: "123456789"
        },
        {
            name: 'Eight Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern8.jpeg",
            walletAddress: "1234567890"
        },
        {
            name: 'Ninth Thing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern9.jpeg",
            walletAddress: "12345678901"
        }
    ]
    let cont = document.getElementById("c1")

    for(let i=0; i < cardData.length; i++){
        let image = document.createElement('img')
        image.classList.add('card-img-top')
        // image.alt="..."
        image.src=cardData[i].image

        let cardBody = document.createElement('div')
        cardBody.classList.add("card-body")

        let heading = document.createElement('h5')
        heading.classList.add("card-title")
        heading.innerHTML = cardData[i].name

        let content = document.createElement('p')
        content.classList.add("card-text")
        content.innerHTML = cardData[i].description

        let button = document.createElement('a')
        button.href = "#"
        button.classList.add("btn" , "border-danger",  "text-danger",  "btn-sm")
        button.innerHTML = "Buy a Candy!"

        button.addEventListener('click', () => {
            activeAddress = cardData[i].walletAddress
        })

        let card = document.createElement('div')
        card.classList.add("card")

        let mainClass = document.createElement('div')
        mainClass.classList.add("col-lg-4", "mb-3")

        card.append(image)
        cardBody.append(heading)
        cardBody.append(content)
        cardBody.append(button)
        card.append(cardBody)
        mainClass.append(card)
        cont.append(mainClass)
    }
})