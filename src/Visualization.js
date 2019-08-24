    
import React from "react";
import Modal from 'react-awesome-modal';
import P5Wrapper from 'react-p5-wrapper';
// import { quickSort } from './QuickSort';
import sketch from './SortingSketch';
// const arr = [6, 2, 12, 7, 35, 23, 10]

class SortingModal extends React.Component {
  render() {
    return (
      <div className="App">
        <Modal visible width="800" height="600" effect="fadeInUp" >
            <div>
              <h1 style={{marginLeft: '80px'}}>QuickSort Algorithm Visualization in React</h1>
              <br />
              <br/>
              <P5Wrapper sketch={sketch} color="white" ></P5Wrapper>
            </div>
        </Modal>
      </div>
    );
  }
}

export default SortingModal;