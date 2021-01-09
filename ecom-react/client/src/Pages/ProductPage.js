import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../Components/Rating';
import products from '../products';

const ProductPage = ({ match }) => {
	const product = products.find((item) => item._id === match.params.id);
	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={6} className='d-flex justify-content-center'>
					<Image fluid src={product.image} alt={product.name} />
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>{product.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating value={product.rating} text={`${product.numReviews} reviews`} />
						</ListGroup.Item>
						<ListGroup.Item>Price: {product.price}</ListGroup.Item>
						<ListGroup.Item>
							<p>{product.description}</p>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>
										<Col>Price:</Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button className='btn-block' type='button' dsabled={product.countInStock === 0}>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductPage;
