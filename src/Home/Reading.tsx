import { h } from 'preact';
import { styled } from 'goober';
import shouldIntercept from 'click-should-be-intercepted-for-navigation';

import Bubble from './Bubble';
import { useLocation } from 'wouter-preact';

type Props = {
  type: 'Morning' | 'Evening' | 'Psalms';
  day: number;
  readings: string;
  locked: boolean;
  complete: boolean;
  title?: string;
};

const Link = styled('a')`
  color: #303030;
  text-decoration: none;
`;

const LinkStyle = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 12px 48px;
  background: #f3f3f3;
  border-bottom: 2px solid #e9e9e8;
`;

const Row = styled('div')`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, minmax(0, max-content));
  grid-gap: 12px;
`;

const Title = styled('p')`
  font-size: 14px;
  color: #303030;
`;

const Readings = styled('p')`
  color: #666;
  font-size: 14px;
`;

const DayStyled = ({ type, readings, locked, complete, title }: Props) => (
  <LinkStyle>
    <Row>
      <Bubble locked={locked} complete={complete}>
        {locked && <span class="material-icons-outlined">lock</span>}
        {complete && <span class="material-icons-outlined">check</span>}
      </Bubble>
      <div>
        <Title>
          <strong>{type === 'Psalms' ? type : `${title} (${type})`}</strong>
        </Title>
        <Readings>{readings}</Readings>
      </div>
    </Row>
    <span class="material-icons-outlined">navigate_next</span>
  </LinkStyle>
);

const Reading = (props: Props) => {
  const [, setLocation] = useLocation();

  const href = `/days/${props.day}/${props.type.toLowerCase()}`;

  const handleClick = (e) => {
    if (shouldIntercept(e)) {
      e.preventDefault();
      setLocation(href);
    }
  };

  return props.locked ? (
    <DayStyled {...props} />
  ) : (
    <Link href={href} onClick={handleClick}>
      <DayStyled {...props} />
    </Link>
  );
};

export default Reading;
