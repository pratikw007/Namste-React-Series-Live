
export const Title = () => (
    <a href="/">
        <img 
        src=""
        alt="logo" />
        
    </a>
 );

const Header = () => {
    return (
      <div className="header">
        <Title />

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Aout</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  

 export default Header;
