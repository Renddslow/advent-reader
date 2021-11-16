import { h } from 'preact';
import { styled } from 'goober';
import { useLocation, Link } from 'wouter-preact';

const Header = styled('header')`
  width: 100%;
  padding: ${(props) => (props.home ? '48px 24px 24px' : '12px 24px')};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, max-content));
  justify-content: space-between;
  background: #4600ff;
  align-items: center;
  color: #fff;
  transition: padding 0.2s ease-in-out;

  h1 {
    font-size: 16px;
  }

  [href] {
    cursor: pointer;
  }
`;

const Navigation = () => {
  const [pathname] = useLocation();
  return (
    <Header home={pathname === '/'}>
      <Link href="/account">
        <span class="material-icons-outlined">face</span>
      </Link>
      {pathname === '/' ? (
        <h1>Home</h1>
      ) : (
        <Link href="/">
          <span class="material-icons-outlined">home</span>
        </Link>
      )}
      <Link href="/achievements">
        <span class="material-icons-outlined">emoji_events</span>
      </Link>
    </Header>
  );
};

export default Navigation;
