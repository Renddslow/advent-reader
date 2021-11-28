import { h } from 'preact';
import { styled } from 'goober';
import { useEffect, useState } from 'preact/hooks';
import snarkdown from 'snarkdown';

import intros from './intros';

type Props = {
  type: 'morning' | 'evening';
  day: number;
};

const ParagraphStyled = styled('p')`
  display: block;
  margin-bottom: 24px;
  line-height: 2;
  font-size: 18px;
  padding: 0 18px;
`;

const Wrapper = styled('div')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 0 24px;

  h2 {
    padding: 0 18px;
  }
`;

const Intro = ({ day, type }: Props) => {
  const text = intros[day.toString()][type];

  const paragraphs = snarkdown(text).split('<br />');

  return (
    <Wrapper>
      <h2>Intro</h2>
      {paragraphs.map((p) => (
        <ParagraphStyled dangerouslySetInnerHTML={{ __html: p }} />
      ))}
    </Wrapper>
  );
};

export default Intro;
