import { useLocation } from 'react-router-dom';

const HeaderContent = () => {
  const location = useLocation();

  const getHeader = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <h1>About</h1>
            <p>このWebsiteの目的</p>
          </>
        );
      case '/profile':
        return (
            <>
              <h1>Profile</h1>
              <p>自己紹介</p>
            </>
          );
      case '/skills':
        return (
            <>
              <h1>Skills</h1>
              <p>保有資格・学習経験</p>
            </>
          );
      case '/appeal':
        return (
            <>
              <h1>Appeal</h1>
              <p>自己PR</p>
            </>
          );
      case '/portfolio':
        return (
            <>
              <h1>Portfolio</h1>
              <p>過去プロジェクト</p>
            </>
          );
      default:
        return null;
    }
  };

  return <div className="page-header">{getHeader()}</div>;
};

export default HeaderContent;
