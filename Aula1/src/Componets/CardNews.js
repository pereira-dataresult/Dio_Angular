class CardNews extends HTMLElement {
    constructor () {
        super ();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        componentRoot.setAttribute("class", "card__left");
        
        const cardRight = document.createElement("div");
        componentRoot.setAttribute("class", "card__right");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/Aula1/assets/default.jpeg";
        newsImage.alt = "Foto da Noticia";
        newsImage.width = "200";
        cardRight.appendChild(newsImage);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 60%;
            /* border: 1px solid gray; */
            -webkit-box-shadow: 5px 10px 25px 10px rgba(70,70,70,70);
            box-shadow: 5px 10px 25px 10px rgba(70,70,70,70);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card_left > p {
            color: rgb(70, 70, 70);
        }
        
        .card_left > span {
            font-weight: 500px;
        }
        `

    }
}

customElements.define("card-news", CardNews)