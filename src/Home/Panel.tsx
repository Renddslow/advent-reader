import { Fragment, h } from 'preact';
import { styled } from 'goober';
import { useState } from 'preact/hooks';

import Bubble from './Bubble';
import Reading from './Reading';

type Props = {
  day: number;
  date: string;
  complete: boolean;
  locked: boolean;
  morningTitle: string;
  eveningTitle: string;
  morning: string;
  evening: string;
  psalms: string;
  initialOpen?: boolean;
};

const Day = styled('button')`
  width: 100%;
  padding: 12px 24px;
  background: #fff;
  border: 0;
  appearance: none;
  font-size: 14px;
  font-family: inherit;
  font-weight: 500;
  color: #303030;
  border-bottom: 2px solid #e9e9e8;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Row = styled('div')`
  grid-template-columns: repeat(2, minmax(0, max-content));
  grid-gap: 12px;
  display: grid;
  align-items: center;
`;

const ExpandButton = styled('span')`
  display: block;
  font-size: 16px;
  color: #666;
`;

const Panel = ({
  day,
  date,
  morning,
  evening,
  psalms,
  locked,
  complete,
  initialOpen = false,
  morningTitle,
  eveningTitle,
}: Props) => {
  const [open, setOpen] = useState<boolean>(initialOpen);

  return (
    <Fragment>
      <Day onClick={() => setOpen((o) => !o)}>
        <Row>
          <Bubble locked={locked} complete={complete}>
            {locked && <span class="material-icons-outlined">lock</span>}
            {complete && <span class="material-icons-outlined">check</span>}
          </Bubble>
          <span>
            Day {day}: {date}
          </span>
        </Row>
        <ExpandButton>
          {open ? (
            <span class="material-icons-outlined">expand_less</span>
          ) : (
            <span class="material-icons-outlined">expand_more</span>
          )}
        </ExpandButton>
      </Day>
      {open && (
        <Fragment>
          <Reading
            title={morningTitle}
            day={day}
            type="Morning"
            readings={morning}
            locked={false}
            complete={false}
          />
          <Reading
            title={eveningTitle}
            day={day}
            type="Evening"
            readings={evening}
            locked={false}
            complete={false}
          />
          <Reading day={day} type="Psalms" readings={psalms} locked={false} complete={false} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Panel;
