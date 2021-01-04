import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../Components/Product';
import products from '../products';

const HomePage = () => {
	return (
		<>
			<h1> Most Popular Books </h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} m={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomePage;
