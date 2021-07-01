/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from '@emotion/styled';

import TreeCanvas from './canvas/TreeCanvas';

import TitleFieldContainer from './components/TitleFieldContainer';
import Task from './components/Task';
import Header from './components/Header';
import RestoreTask from './components/RestoreTask';

const GridWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '100px 1fr',
  width: '80%',
  margin: '0 auto',
});

const TasksContainer = styled.div({
  gridColumnStart: 1,
  gridColumnEnd: 2,
  gridRowStart: 2,
  gridRowEnd: 3,
});

const TreeContainer = styled.div({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 2,
  gridRowEnd: 3,
});

const App = (): JSX.Element => (
  <>
    <GridWrapper>
      <TasksContainer>
        <Header />
        <TitleFieldContainer />
        <RestoreTask />
        <Task id={0} />
      </TasksContainer>
      <TreeContainer>
        <TreeCanvas />
      </TreeContainer>
    </GridWrapper>
  </>
);

export default App;
