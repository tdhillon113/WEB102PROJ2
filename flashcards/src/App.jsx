import React, { useState, Container } from 'react';
import './App.css';

const App = () => {
  const cardSet = {
    title: "Beautiful Flowers of the World",
    description: "Test your knowledge of popular flowers and their identifying characteristics. Perfect for gardening enthusiasts and nature lovers!",
    cards: [
      {
        question: " This classic flower symbolizes love and comes in many colors. It has thorny stems and layered petals.",
        answer: "Rose",
        image: "https://i.pinimg.com/736x/f3/f0/dd/f3f0ddc76b189f314df89b2d6e03bc5e.jpg"
      },
      {
        question: " This tall flower always faces the sun and has a large brown center surrounded by bright yellow petals.",
        answer: "Sunflower",
        image: "https://all-americaselections.org/wp-content/uploads/2016/10/Sunflower_RingOfFire-2.jpg"
      },
      {
        question: " This spring flower grows from a bulb and has a cup-shaped bloom. It's famous in the Netherlands.",
        answer: "Tulip",
        image: "https://www.whiteflowerfarm.com/mas_assets/cache/image/9/4/e/b/38123.Jpg"
      },
      {
        question: " This delicate flower blooms on trees in spring and is especially celebrated in Japan.",
        answer: "Cherry Blossom",
        image: "https://img.bbg.org/medium800/52800804605.jpg"
      },
      {
        question: "This tropical flower has large, showy petals and is often worn behind the ear in Hawaii.",
        answer: "Hibiscus",
        image: "https://hgic.clemson.edu/wp-content/uploads/2004/12/chinese-hibiscus-hibiscus-rosa-sinensis-has-four.jpeg"
      },
      {
        question: " This flower has white petals around a yellow center and is used for 'loves me, loves me not' games.",
        answer: "Daisy",
        image: "https://westmountflorist.com/cdn/shop/articles/freya-ingva-6P9JgFe3f9Q-unsplash.jpg?v=1725909146&width=2048"
      },
      {
        question: " This purple flower is known for its calming scent and is often used in aromatherapy and soap.",
        answer: "Lavender",
        image: "https://westmountflorist.com/cdn/shop/articles/freya-ingva-6P9JgFe3f9Q-unsplash.jpg?v=1725909146&width=2048"
      },
      {
        question: " This flower has papery petals and comes in bright colors. It's often used in dried flower arrangements.",
        answer: "Poppy",
        image: "https://bouqs.com/blog/wp-content/uploads/2024/11/shutterstock_2456536203-min.jpg"
      },
      {
        question: " This flower attracts butterflies and has clusters of small purple, pink, or white blooms on tall spikes.",
        answer: "Lilac",
        image: "https://arborhilltrees.com/blog/wp-content/uploads/2020/06/common-purple-lilac-facts.jpg"
      },
      {
        question: " This elegant white flower has a trumpet shape and is often associated with Easter and purity.",
        answer: "Lily",
        image: "https://floralife.com/wp-content/uploads/2023/05/Oriental-Lily_Adobe_2560x1790.jpg"
      },
      {
        question: " This flower has a 'face-like' appearance with purple, yellow, and white markings.",
        answer: "Pansy",
        image: "https://plants.moananursery.com/Content/Images/Squares/J937-11.jpg"
      },
      {
        question: " This night-blooming flower opens in the evening and closes during the day. It climbs on vines.",
        answer: "Morning Glory",
        image: "https://www.applewoodseed.com/wp-content/uploads/2016/11/ITRI-1101.jpg"
      }
    ]
  };

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [usedCards, setUsedCards] = useState([0]);

  const currentCard = cardSet.cards[currentCardIndex];

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    let availableCards = [];

    if (usedCards.length === cardSet.cards.length) {
      availableCards = cardSet.cards.map((_, index) => index);
      setUsedCards([]);
    } else {
      availableCards = cardSet.cards
        .map((_, index) => index)
        .filter(index => !usedCards.includes(index));
    }

    const randomIndex = availableCards[Math.floor(Math.random() * availableCards.length)];
    setCurrentCardIndex(randomIndex);
    setUsedCards(prev => [...prev, randomIndex]);
    setIsFlipped(false);
  };

  return (
    
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="title-section">

            <h1 className="title">{cardSet.title}</h1>

          </div>
        </div>


        <div className="flashcard-container">
          <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>

            <div className="card-face card-front">
              <div className="card-content">

                <h3 className="card-title">Can you identify this flower?</h3>
                <p className="card-text">{currentCard.question}</p>
                <div className="card-hint">Click to reveal answer</div>
              </div>
            </div>


            <div className="card-face card-back">
              <div className="card-content">

                <h3 className="answer-title">{currentCard.answer}</h3>
                {currentCard.image && (
                  <img
                    src={currentCard.image}
                    alt={currentCard.answer}
                    style={{ width: "200px", height: "auto", borderRadius: "12px", margin: "16px 0" }}
                  />
                )}
                <div className="card-hint">Click to see question again</div>
              </div>
            </div>
          </div>
        </div>


        <button onClick={nextCard} className="btn btn-next">
          Next Card →
        </button>
      </div>


    </div>

  );
};

export default App;
