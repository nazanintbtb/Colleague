import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <Spinner 
    animation="border" 
    role="status"
    style={{height:"100px", width:"100px", display:"block", margin:"auto"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;