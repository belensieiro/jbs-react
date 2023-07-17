import logo from '../../assets/logo.png'
import favicon from '../../assets/favicon.png'

const SpinnerWithImage = () => {
    return (
      <div className="spinner-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <img className="spinner-image" src={favicon} alt='logo'/>
      </div>
    );
  };
  
  export default SpinnerWithImage;