import { DeadlinesBlock } from './Blocks/Deadlines/Deadlines';
import { FeedbackBlock } from './Blocks/Feedbacks/FeedbackBlock';
import { MainBlock } from './Blocks/Main/Main';
// import  { PriceBlock } from './Blocks/Price/PriceBlock';
import { ReasonsBlock } from './Blocks/Reasons/ReasonsBlock';
import { ResultsBlock } from './Blocks/Results/ResultsBlock';

const Landing = () => (
  <>
    <MainBlock />
    <ReasonsBlock />
    <DeadlinesBlock />
    <ResultsBlock />
    <FeedbackBlock />
    {/* <PriceBlock /> */}
  </>
);

export default Landing;
