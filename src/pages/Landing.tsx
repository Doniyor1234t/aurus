import { DeadlinesBlock } from './Blocks/Deadlines/Deadlines';
import FaqsBlock from './Blocks/Faqs/FaqsBLock';
import { FeedbackBlock } from './Blocks/Feedbacks/FeedbackBlock';
import { MainBlock } from './Blocks/Main/Main';
import  { PriceBlock } from './Blocks/Price/PriceBlock';
import { ReasonsBlock } from './Blocks/Reasons/ReasonsBlock';
import RedirectBlock from './Blocks/RedirectBox/RedirectBlock';
import { ResultsBlock } from './Blocks/Results/ResultsBlock';

const Landing = () => (
  <>
    <MainBlock />
    <ReasonsBlock />
    <DeadlinesBlock />
    <ResultsBlock />
    <FeedbackBlock />
    <PriceBlock />
    <RedirectBlock />
    <FaqsBlock />
  </>
);

export default Landing;
