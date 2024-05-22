import React from 'react';
import Wrapper from './Components//Wrapper';
import Inner from './Components//Inner';
import Form from './Components//Form';
import Image from './Components//Image';

const App = () => {
  return (
    <Wrapper>
      <Inner>
        <Image src="images/image-1.png" alt="" className="image-1" />
        <Form />
        <Image src="images/image-2.png" alt="" className="image-2" />
      </Inner>
    </Wrapper>
  );
};

export default App;
