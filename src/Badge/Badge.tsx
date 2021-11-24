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
};

type Props = {
  color: keyof typeof COLORS;
};

const Hex = styled('div')`
  position: relative;
`;

const Inner = styled('svg')`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const Badge = (props: Props) => {
  const { border, bg } = COLORS[props.color];

  return (
    <Hex>
      <Inner xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="inner">
        <path
          stroke="none"
          fill={bg}
          d="M40 2.7735026918963a20 20 0 0 1 20 0l25.899346400575 14.952994616207a20 20 0 0 1 10 17.320508075689l0 29.905989232415a20 20 0 0 1 -10 17.320508075689l-25.899346400575 14.952994616207a20 20 0 0 1 -20 0l-25.899346400575 -14.952994616207a20 20 0 0 1 -10 -17.320508075689l0 -29.905989232415a20 20 0 0 1 10 -17.320508075689"
        />
      </Inner>
      <svg xmlns="http://www.w3.org/2000/svg" width="118" height="118">
        <path
          stroke="none"
          fill={border}
          d="M49 2.7735026918963a20 20 0 0 1 20 0l33.693575034635 19.452994616207a20 20 0 0 1 10 17.320508075689l0 38.905989232415a20 20 0 0 1 -10 17.320508075689l-33.693575034635 19.452994616207a20 20 0 0 1 -20 0l-33.693575034635 -19.452994616208a20 20 0 0 1 -10 -17.320508075689l0 -38.905989232415a20 20 0 0 1 10 -17.320508075689"
        />
      </svg>
    </Hex>
  );
};

export default Badge;
