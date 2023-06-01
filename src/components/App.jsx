import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './Globalstyle';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementValue = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    });
  };

  countPositiveFeedbackPercentage = total => {
    return `${Math.round((this.state.good * 100) / total || 0)}`;
  };

  checkCondition = () => {
    const { good, bad, neutral } = this.state;
    if (good !== 0 || bad !== 0 || neutral !== 0) {
      return (
        <Statistics
          state={this.state}
          onTotal={this.countTotalFeedback}
          onPositivePercentage={this.countPositiveFeedbackPercentage}
        />
      );
    } else {
      return <Notification message="There is no feedback"></Notification>;
    }
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <FeedbackOptions incrementValue={this.incrementValue} />
        {this.checkCondition()}
      </>
    );
  }
}
