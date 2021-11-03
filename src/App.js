import Feedback from "./components/feedback/Feedback";
import { useState} from 'react';
import Statistics from "./components/statistics/Statistic";
import Section from "./components/section/Section";
import Notification from "./components/notification/Notification";

const FeedbackBTN = {
  good: 0,
  neutral: 0,
  bad: 0,
}
 


function App() {

  const [good, setgood] = useState( FeedbackBTN.good);
  const [neutral, setneutral] = useState(FeedbackBTN.neutral);
  const [bad, setbad] = useState( FeedbackBTN.bad);


  const handleCounterAIncrement = (event) => {
    const {name} = event.target

    switch (name) {
      case 'good':
        setgood (good => good + 1);
        break;

      case 'neutral':
        setneutral (neutral => neutral + 1);
        break;

        case 'bad':
          setbad (bad => bad + 1);
          break;

      default:
        return;
    }
    };

  return (
    <div className="App">
      <Section sectionName='Please leave feedback'>
          <Feedback feedbackBtn = {FeedbackBTN} handleClick={handleCounterAIncrement}/>
      </Section>

      <Section sectionName='Statistics'>
                {bad || good || neutral ? <Statistics props={{good, neutral, bad}} /> : <Notification message="No feedback given"></Notification>
                   }
      </Section>
    </div>
  );
}

export default App;
