import { h } from 'preact';
import { styled } from 'goober';

const Advert = styled('div')`
  display: block;
  position: relative;
  width: 100%;
  min-height: 100%;
  color: #fff;

  #logo {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  h1 {
    margin-bottom: 24px;
    font-size: 32px;

    small {
      font-size: 14px;
      position: relative;
      bottom: 6px;
    }
  }

  p:not(#logo) {
    line-height: 1.645;
    font-size: 1.25em;
    font-weight: 300;
    color: #fdf6fe;
    margin-bottom: 12px;
    text-align: justify;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
  }

  a {
    color: #0ff4c6;
    font-weight: 600;
  }
`;

const DFN = styled('dfn')`
  font-style: normal;
  text-decoration: underline dotted;
  cursor: help;
`;

const Background = styled('div')`
  background: #87109eee;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 56px;
  z-index: 2;
`;

const Hero = () => {
  return (
    <Advert>
      <Background>
        <p id="logo">Read:Advent</p>
        <h1>
          Read <small>(most of)</small> the Bible in 27 days!
        </h1>
        <p>
          <strong>Advent</strong> is a season in which we tell each other the redemptive story of
          Jesus as a way of <strong>looking forward</strong> to his future coming. One of the best
          ways to experience this story is through the actual words of <strong>Scriptures</strong>.
        </p>
        <p>
          <strong>Read:Advent</strong> is a 28 day reading challenge that will take you through{' '}
          <em>nearly</em> all of the Biblical story, with the biggest skips in the{' '}
          <DFN title="In Protestant Bibles the Writings are mixed throughout what we would typically call the Histories and Wisdom books, but in the Hebrew Bible, the Writings were the third and final section of the Hebrew Bible that included Psalms, Proverbs, Lamentations, Esther, Daniel, and others.">
            Writings
          </DFN>{' '}
          and the Epistles.
        </p>
        <p>
          We'll encourage you to keep going by offering achievement badges and an online reader
          using the{' '}
          <a href="https://netbible.com/" target="_blank">
            NET Bible translation
          </a>
          .
        </p>
      </Background>
      <img
        src="https://images.unsplash.com/photo-1543978705-72593b72e94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt="An open Bible sitting in front of a Christmas tree"
      />
    </Advert>
  );
};

export default Hero;
