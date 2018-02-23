import React, { Component } from 'react';
import './App.css';
import Card from './Card';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class App extends Component {
  constructor(props) {
    super(props);

    let cards = [
      { id: 0, cardState: CardState.HIDING, backgroundColor: 'red' },
      { id: 1, cardState: CardState.HIDING, backgroundColor: 'red' },
      { id: 2, cardState: CardState.HIDING, backgroundColor: 'green' },
      { id: 3, cardState: CardState.HIDING, backgroundColor: 'green' },
      { id: 4, cardState: CardState.HIDING, backgroundColor: 'blue' },
      { id: 5, cardState: CardState.HIDING, backgroundColor: 'blue' },
      { id: 6, cardState: CardState.HIDING, backgroundColor: 'cyan' },
      { id: 7, cardState: CardState.HIDING, backgroundColor: 'cyan' },
      { id: 8, cardState: CardState.HIDING, backgroundColor: 'magenta' },
      { id: 9, cardState: CardState.HIDING, backgroundColor: 'magenta' },
      { id: 10, cardState: CardState.HIDING, backgroundColor: 'yellow' },
      { id: 11, cardState: CardState.HIDING, backgroundColor: 'yellow' },
      { id: 12, cardState: CardState.HIDING, backgroundColor: 'black' },
      { id: 13, cardState: CardState.HIDING, backgroundColor: 'black' },
      { id: 14, cardState: CardState.HIDING, backgroundColor: 'white' },
      { id: 15, cardState: CardState.HIDING, backgroundColor: 'white' }
    ];

    cards = shuffle(cards);
    this.state = { cards };
  }


  render() {
    const cards = this.state.cards.map((card) => (
      <Card key={card.id} />
    ));

    return (
      <div className="App">
        {cards}
      </div>
    );
  }
}

export default App;
