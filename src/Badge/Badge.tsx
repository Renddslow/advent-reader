import { h } from 'preact';
import { styled } from 'goober';

const COLORS = {
  pink: {
    border: '#c10045',
    bg: '#fc578f',
  },
  green: {
    border: '#166b29',
    bg: '#43bb5c',
  },
  blue: {
    border: '#0a4d69',
    bg: '#1b96c7',
  },
  purple: {
    border: '#48296c',
    bg: '#855eb4',
  },
  yellow: {
    border: '#7b5311',
    bg: '#e3be29',
  },
  red: {
    border: '#7f1c20',
    bg: '#e52e36',
  },
  teal: {
    border: '#1b6a65',
    bg: '#48cbca',
  },
  darkBlue: {
    border: '#053969',
    bg: '#2372c3',
  },
  orange: {
    border: '#ac3d05',
    bg: '#fd7d0a',
  },
  lime: {
    border: '#585f0a',
    bg: '#c0b80c',
  },
  auburn: {
    border: '#921b08',
    bg: '#fc492a',
  },
  gray: {
    border: '#222',
    bg: '#555',
  },
};

type Props = {
  color: keyof typeof COLORS;
};

const Badge = (props: Props) => {
  const { border, bg } = COLORS[props.color];

  return (
    <svg viewBox="0 0 120 100">
      <path
        stroke={border}
        stroke-width={4}
        fill={bg}
        d="M38,2
           L82,2
           A12,12 0 0,1 94,10
           L112,44
           A12,12 0 0,1 112,56
           L94,90
           A12,12 0 0,1 82,98
           L38,98
           A12,12 0 0,1 26,90
           L8,56
           A12,12 0 0,1 8,44
           L26,10
           A12,12 0 0,1 38,2"
      />
    </svg>
  );
};

export default Badge;
