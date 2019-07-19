import React, { Component } from 'react';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from '../Reader/Reader.module.css';

class Reader extends Component {
  state = {
    counter: 0,
  };

  minusCounter = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  plusCounter = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    const { items } = this.props;
    const counterPlus = counter + 1;
    const counterLength = items.length;

    return (
      <div className={styles.reader}>
        <Publication items={this.props.items[counter]} />
        <Counter start={counterPlus} end={counterLength} />
        <Controls
          length={counterLength}
          count={counterPlus}
          onMinusCounter={this.minusCounter}
          onPlusCounter={this.plusCounter}
        />
      </div>
    );
  }
}

export default Reader;
