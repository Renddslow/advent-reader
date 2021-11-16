import { h } from 'preact';
import { styled } from 'goober';

const Wrapper = styled('div')`
  padding: 24px;
  line-height: 1.5;
  font-size: 12px;

  p:not(:first-child) {
    padding-top: 12px;
  }

  p:not(:last-child) {
    border-bottom: 1px solid #e4e4e3;
    padding-bottom: 12px;
  }

  a {
    color: #3500ff;
    font-weight: 600;
  }
`;

const Copyright = () => {
  return (
    <Wrapper>
      <p>
        The Scriptures quoted are from the NET Bible&reg;{' '}
        <a href="https://netbible.com" target="_blank">
          http://netbible.com
        </a>{' '}
        copyright &copy;1996, 2019 used with permission from Biblical Studies Press, L.L.C. All
        rights reserved.
      </p>
      <p>
        This site is <a href="https://github.com/Renddslow/advent-reader">open source</a> and is{' '}
        <a href="https://mattmcelwee.com">a thing that Matt made</a>. It is licensed under{' '}
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>. It is able to
        exist due to the generous openness of the NET Bible translation.
      </p>
    </Wrapper>
  );
};

export default Copyright;
