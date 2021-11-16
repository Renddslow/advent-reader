import { h } from 'preact';
import { styled } from 'goober';

type Props = {
  chunks: Record<string, any>[];
};

const ParagraphStyled = styled('p')`
  display: block;
  margin-bottom: 24px;
  line-height: 2;
  font-size: 18px;
  padding: 0 18px;

  span {
    position: relative;
    white-space: pre-wrap;
  }

  .xref {
    text-transform: uppercase;
  }
`;

const Paragraph = (props: Props) => {
  return (
    <ParagraphStyled>
      {props.chunks.map((chunk) => (
        <span class={chunk.type === 'paragraph_text_xref' ? 'xref' : ''}>{chunk.value}</span>
      ))}
    </ParagraphStyled>
  );
};

export default Paragraph;
