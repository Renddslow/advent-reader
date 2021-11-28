import { h, Fragment } from 'preact';
import { styled, keyframes } from 'goober';
import { useLocation } from 'wouter-preact';
import { useEffect, useState } from 'preact/hooks';

import condense from './condense';
import Paragraph from './Paragraph';
import Intro from './Intro';

const Chapter = styled('h2')`
  font-size: 20px;
  margin-bottom: 16px;
  padding: 0 18px;

  &:first-child {
    margin-top: 48px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const CompleteButton = styled<{ completing: boolean }>('button')`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 25px;
  font-size: 14px;
  background: #222;
  color: #fff;
  appearance: none;
  border: 0;
  margin: 24px auto 0;
  cursor: pointer;

  .material-icons {
    font-size: 20px;
    margin-right: 8px;
  }

  span {
    animation-name: ${rotate};
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-play-state: ${(props) => (props.completing ? 'running' : 'paused')};
  }
`;

const BOOK_NAME_MAP = {
  GEN: 'Genesis',
  EXO: 'Exodus',
  LEV: 'Leviticus',
  NUM: 'Numbers',
  DEU: 'Deuteronomy',
  JOS: 'Joshua',
  JDG: 'Judges',
  RUT: 'Ruth',
  '1SA': '1 Samuel',
  '2SA': '2 Samuel',
  '1KI': '1 Kings',
  '2KI': '2 Kings',
  '2CH': '2 Chronicles',
  ISA: 'Isaiah',
  EZK: 'Ezekiel',
  DAN: 'Daniel',
  PRO: 'Proverbs',
  JOL: 'Joel',
  AMO: 'Amos',
  JON: 'Jonah',
  MIC: 'Micah',
  HAB: 'Habbakuk',
  ZEP: 'Zephaniah',
  HAG: 'Haggai',
  ZEC: 'Zechariah',
  MRK: 'Mark',
  MAT: 'Matthew',
  JHN: 'John',
  ACT: 'Acts',
  ROM: 'Romans',
  '1CO': '1 Corinthians',
  '1TH': '1 Thessalonians',
  '2TH': '2 Thessalonians',
  PHP: 'Philippians',
  COL: 'Colossians',
  HEB: 'Hebrews',
  JAS: 'James',
  JUD: 'Jude',
  REV: 'Revelation',
  PSA: 'Psalm',
};

const Wrapper = styled('div')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Reading = () => {
  const [reading, setReading] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);
  const [complete, setComplete] = useState(false);
  const [pathname] = useLocation();

  const [, day, type] = pathname.replace(/^\//, '').split('/');

  useEffect(() => {
    Promise.all([
      fetch(`/data/${day}/${type}.json`)
        .then((d) => d.json())
        .then((d) => {
          setReading(d);
        }),
      fetch('/.netlify/functions/completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: parseInt(day, 10),
          type,
        }),
      }).then((d) => setComplete(d.status === 200)),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  const handleComplete = async () => {
    setCompleting(true);
    fetch('/.netlify/functions/complete', {
      method: 'POST',
      body: JSON.stringify({
        day,
        type,
        read: new Date().toISOString(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((d) => {
      setCompleting(false);
      window.location.href = '/';
    });
  };

  return (
    <Wrapper>
      {type !== 'psalms' && <Intro type={type as 'morning' | 'evening'} day={parseInt(day, 10)} />}
      {loading
        ? 'Loading...'
        : condense(reading).map((unit) => {
            if (unit.type === 'paragraph') return <Paragraph chunks={unit.chunks} />;
            if (unit.type.includes('chapter'))
              return (
                <Chapter>
                  {BOOK_NAME_MAP[unit.book]} {unit.chapter}
                </Chapter>
              );
          })}
      {!loading && !complete && (
        <CompleteButton onClick={handleComplete} completing={completing} disabled={completing}>
          {completing ? (
            <span className="material-icons">motion_photos_on</span>
          ) : (
            <Fragment>
              <span className="material-icons">check</span>
              <span>Mark Complete</span>
            </Fragment>
          )}
        </CompleteButton>
      )}
    </Wrapper>
  );
};

export default Reading;
