import { h } from 'preact';
import { styled } from 'goober';
import { useLocation } from 'wouter-preact';
import { useEffect, useState } from 'preact/hooks';
import condense from './condense';
import Paragraph from './Paragraph';

const Chapter = styled('h2')`
  font-size: 20px;
  margin-bottom: 16px;
  padding: 0 18px;

  &:first-child {
    margin-top: 48px;
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

const Reading = () => {
  const [reading, setReading] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pathname] = useLocation();

  const [, day, type] = pathname.replace(/^\//, '').split('/');

  useEffect(() => {
    fetch(`/data/${day}/${type}.json`)
      .then((d) => d.json())
      .then((d) => {
        setReading(d);
        setLoading(false);
      });
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Reading;
