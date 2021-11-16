import { styled } from 'goober';

const Bubble = styled<{ locked: boolean }>('div')`
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => (props.complete ? '#1D9C66' : '#666')};
  display: block;
  border-radius: 50%;
  position: relative;
  background: ${(props) => {
    if (props.locked) {
      return '#666';
    }

    if (props.complete) {
      return '#1D9C66';
    }
  }};

  span {
    position: absolute;
    color: #fff;
    font-size: 18px;
    left: 1px;
    top: 1px;
  }
`;

export default Bubble;
