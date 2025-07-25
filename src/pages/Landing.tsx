import { DeadlinesBlock } from './Blocks/Deadlines/Deadlines';
import { MainBlock } from './Blocks/Main/Main';
import { ReasonsBlock } from './Blocks/Reasons/ReasonsBlock';
import { ResultsBlock } from './Blocks/Results/ResultsBlock';

const Landing = () => (
  <>
    <MainBlock />
    <ReasonsBlock />
    <DeadlinesBlock />
    <ResultsBlock />
  </>
);

export default Landing;
