import { styled } from 'goober';
import { ComponentChild, h } from 'preact';

type Props = {
  achieved?: string;
  completed: boolean;
  title: string;
  description: string;
  component: ComponentChild;
};

const CardWrapper = styled('div')`
  display: grid;
  box-shadow: var(--shadow-elevation-medium);
  background: #fff;
  border-radius: 8px;
  grid-template-columns: 1fr minmax(0, max-content);
  overflow: hidden;
  z-index: 1;
  padding: 12px 6px 12px 24px;
`;

const CardBody = styled('div')`
  padding: 12px 0;

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin-top: 8px;
  }
`;

const CardBadge = styled('div')`
  width: 118px;
  height: 121px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  span {
    position: absolute;
    width: 32px;
    font-size: 32px;
    margin: 0 auto;
    display: block;
    top: calc(50% - 16px);
  }
`;

const Meta = styled('div')`
  display: grid;
  grid-template-columns: minmax(0, max-content) 1fr;
  grid-gap: 12px;
  margin-top: 24px;
  align-items: start;
`;

const Bubble = styled('div')`
  width: 24px;
  height: 24px;
  border: 2px solid #1d9c66;
  display: block;
  border-radius: 50%;
  position: relative;
  background: #1d9c66;
  margin-top: 4px;

  span {
    position: absolute;
    color: #fff;
    font-size: 18px;
    left: 1px;
    top: 1px;
  }
`;

const Card = (props: Props) => {
  const Badge = () => props.component;

  // @ts-ignore
  return (
    <CardWrapper>
      <CardBody>
        <h2>{props.title}</h2>
        <p>{props.completed ? props.description : '???'}</p>
        {props.completed && (
          <Meta>
            <Bubble>
              <span class="material-icons-outlined">check</span>
            </Bubble>
            <div>
              <p>
                <strong>Achieved</strong>
              </p>
              <p>{props.achieved}</p>
            </div>
          </Meta>
        )}
      </CardBody>
      <CardBadge>
        {props.completed ? (
          /* @ts-ignore */
          <Badge />
        ) : (
          <span class="material-icons-outlined">locked</span>
        )}
      </CardBadge>
    </CardWrapper>
  );
};

export default Card;
