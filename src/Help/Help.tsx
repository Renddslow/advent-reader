import { h } from 'preact';
import { styled } from 'goober';

const Wrapper = styled('div')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 0 24px;

  h2 {
    padding: 0 18px;
    margin-bottom: 16px;
  }
`;

const ParagraphStyled = styled('p')`
  display: block;
  margin-bottom: 24px;
  line-height: 2;
  font-size: 18px;
  padding: 0 18px;

  a {
    color: #0b7a75;
    font-weight: 600;
  }
`;

const Help = () => {
  return (
    <Wrapper>
      <h2>Introduction</h2>
      <ParagraphStyled>
        The Bible is a{' '}
        <a href="https://bibleproject.com/podcast/who-bible-about/" target="_blank">
          unified story that leads to Jesus
        </a>{' '}
        and <strong>Advent</strong> is that time of year when we anxiously anticipate and prepare
        our hearts for Christ's immanent return. So what better way to prepare our hearts than to
        read Scripture, and see the story of Jesus plays out from the very first chapter all the way
        to the end.
      </ParagraphStyled>
      <ParagraphStyled>
        This reading plan will take you through <em>nearly</em> the whole Bible, starting in Genesis
        and concluding in Revelation. There are some notable exclusions. These were cut for time –
        28 days isn't a lot of time – not because they aren't worth reading or connected to the
        overall unified story that leads to Jesus. Most of the time, I tried to pull on the most
        obvious or called-back-to elements of the story, especially when you could read the whole or
        most of a book.
      </ParagraphStyled>
      <h2>Badges</h2>
      <ParagraphStyled>
        Badges are designed to motivate you by hijacking the pleasure centers of your brain in much
        the same way that a slot machine does. The typical term for this is{' '}
        <a href="https://en.wikipedia.org/wiki/Gamification" target="_blank">
          gamification
        </a>
        .
      </ParagraphStyled>
      <ParagraphStyled>
        Throughout the reading plan, you'll be rewarded for progress you make (completing different
        books or weeks of reading), consistency and faithfulness, as well as a handful of one-off
        goodies that I've sprinkled about (typically when I can make a good pun based on the
        material).
      </ParagraphStyled>
      <ParagraphStyled>
        The goal is to motivate you not so that the badges become an end unto themselves, but to
        build your muscles into rhythms and habits of long,{' '}
        <a href="https://www.youtube.com/watch?v=VhmlJBUIoLk" target="_blank">
          meditative reading
        </a>{' '}
        of Scripture.
      </ParagraphStyled>
    </Wrapper>
  ); // TODO
};

export default Help;
