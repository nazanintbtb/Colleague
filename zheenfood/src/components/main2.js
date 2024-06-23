// 
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import Loader from "./loader";
import Message from "./message";
// import axios from 'axios';

const MenuItem = ({ name, description, price, imageSrc, CountInStock, _id, quantity, onIncrement, onDecrement }) => {
  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <Card className={`mb-3 ${quantity > 0 ? 'shadow-red' : ''}`} style={{ position: 'relative', opacity: CountInStock === 0 ? 0.5 : 1 }}>
        {CountInStock === 0 && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              color: 'red',
              fontSize:"40px",
              fontWeight: 'bold',
              textAlign: 'center',
              whiteSpace:"nowrap"
            }}
          >
            تمام شده
          </div>
        )}
        <Card.Body
          style={{ position: 'relative' }}
          onClick={() => setShowModal(true)}
        >
          <div style={{ position: 'absolute', bottom: '10px', left: '20px' }}>
            <Button
              variant="primary"
              size="sm"
              style={{ borderColor: 'red' }}
              onClick={(e) => {
                e.stopPropagation();
                onIncrement(_id);      
              }}
              disabled={CountInStock === 0}              
            >
              <FaPlus />
            </Button>
          </div>
          {quantity > 0 && (
            <div style={{ position: 'absolute', bottom: '10px', left: '56px' }}>
              {quantity}
            </div>
          )}
          {quantity > 0 && (
            <div style={{ position: 'absolute', bottom: '10px', left: '78px' }}>
              <Button
                variant="primary"
                size="sm"
                style={{ borderColor: 'red' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onDecrement(_id);
                }}
              >
                <FaMinus />
              </Button>
            </div>
          )}
          <Row>
            <Col xs={8} sm={8} style={{ textAlign: 'right' }}>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>              
              <Card.Text>{parseFloat(price).toFixed(3)}</Card.Text>
            </Col>
            <Col xs={4} sm={4} style={{ textAlign: 'center' }}>
              <Card.Img
                src={"http://127.0.0.1:8000/static" + imageSrc}
                style={{
                  width: '100%',
                  height: '110px',
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
                onClick={() => setShowModal(true)}
              />
            </Col>
          </Row>
        </Card.Body>
        <Modal show={showModal} onHide={() => setShowModal(false)} dir="rtl">
          <Col style={{ textAlign: 'center' }}>
            <Card.Img
              src={"http://127.0.0.1:8000/static" + imageSrc}
              style={{ width: '100%', height: '300px' }}
            />
          </Col>
          <Modal.Header style={{ borderBottom: 'none' }} closeButton></Modal.Header>
          <Modal.Title style={{ paddingRight: '15px', border: 'none' }}>{name}</Modal.Title>
          <Modal.Body>{description}</Modal.Body>
        </Modal>
      </Card>
    </>
  );
};

const Menu = () => {
  const [productQuantities, setProductQuantities] = useState({});
  const dispatch = useDispatch();
  const listProducts = useSelector(state => state.listProduct);
  const { error, loading, products } = listProducts;
  const navigate = useNavigate();

  // const [product, setproduct] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());

    // async function fetchProduct() {
    //   const { data } = await axios.get(
    //     "http://127.0.0.1:8000/api/v1/product/4"
    //   );
    //   setproduct(data);
    // }
    // fetchProduct();

    
  }, [dispatch]);

  // console.log(product.description)



  const handleIncrement = (id) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1
    }));
  };

  const handleDecrement = (id) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) - 1
    }));
  };

  const addToCartHandler = () => {
    navigate("/cart");
   
    // navigate(`/cart/quantity=${totalQuantity}`);
  };

  const totalQuantity = Object.values(productQuantities).reduce((acc, qty) => acc + qty, 0);

  return (
    <Container>
      <Row>
        <Col>
          <Container className="text-center">
            <div style={{ display: "flex", alignItems: "center" }}>
              <hr style={{ borderTop: "5px solid red", width: "50%" }} />
              <div style={{ flexGrow: 1, textAlign: "center" }}>
                <h2>غذای اصلی</h2>
              </div>
              <hr style={{ borderTop: "5px solid red", width: "50%" }} />
            </div>
          </Container>
        </Col>
      </Row>
      <div>
        {loading ? <Loader /> : error ? <Message variant="danger" text={error} /> :
          <>
            <Row>
              {products.map((product) => (
                <Col key={product._id} md={6}>
                  <MenuItem
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageSrc={product.image}
                    CountInStock={product.countInStock}
                    _id={product._id}
                    quantity={productQuantities[product._id] || 0}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                  />
                </Col>
              ))}
            </Row>
            {totalQuantity > 0 && (
              // <div style={{ position: 'fixed', bottom: '75px', right: '20px' }}>
              //   <Button variant="primary">
              //     تکمیل خرید: {totalQuantity}
              //   </Button>
              // </div>
           
              <div style={{ position: 'fixed', bottom: '75px', width: '50%', left: '50%', transform: 'translateX(-50%)' }}>
                <Button variant="primary" onClick={addToCartHandler} style={{ width: '100%', borderRadius: '0' }}>
                  تکمیل خرید: {totalQuantity}
                </Button>
               </div>
            

              
            )}
          </>
        }
      </div>
    </Container>
  );
};

export default Menu;
