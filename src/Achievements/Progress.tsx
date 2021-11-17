import { h } from 'preact';
import { styled } from 'goober';

type Props = {
  total: number;
  value: number;
  label: string;
};

const Label = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  justify-content: space-between;
  align-items: start;
  padding: 0 4px;

  label {
    font-size: 14px;
    color: #666;
  }

  div {
    font-size: 16px;
    font-weight: 600;
    color: #303030;
  }
`;

const Bar = styled('div')`
  width: 100%;
  height: 14px;
  background: #ccc;
  padding: 2px;
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  border: 2px solid #666;
`;

const InnerBar = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => props.pc};
  display: block;
  background: #0ff4c6;
  border-radius: 8px;
`;

const Progress = (props: Props) => {
  return (
    <div>
      <Bar>
        <InnerBar pc={`${Math.floor((props.value / props.total) * 100)}%`} />
      </Bar>
      <Label>
        <label>{props.label}</label>
        <div>
          {props.value}/{props.total}
        </div>
      </Label>
    </div>
  );
};

export default Progress;
