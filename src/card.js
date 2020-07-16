import React from 'react'
import './card.css'

const Card = ({name, slogan, id}) => {
    return (
        <article className="w5 mw5 br3 dib pa3 pa4-ns ma3 grow ba b--black-10 bg-lightest-blue">
            <div className="tc">
                <img alt="robot" src={`https://robohash.org/robot${id}`} className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                <h1 className="f4">{name}</h1>
                <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure center f6 black-70">{slogan}</p>
        </article>
    );
}

export default Card;