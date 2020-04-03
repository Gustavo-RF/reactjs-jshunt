import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loader'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default class Product extends Component {
	state = {
		product: {},
		loading: false
	}

	async componentDidMount() {
		this.setState({loading: true});
		const {id} = this.props.match.params;
		const response = await api.get(`/products/${id}`);
		
		this.setState({
			product: response.data,
			loading: false
		});
	}

	render() {
		const { product, loading } = this.state;
		return (
			<div className="container">
				<Link className="back-link" to="/">
					<FiArrowLeft size="16" color="#da552f" />
					Voltar
				</Link>
				<div className="product-info">
					<Loading loading={loading} />
					<h1>{product.title}</h1>
					<p>{product.description}</p>

					<p>
						URL: <a href={product.url}>{product.url}</a>
					</p>
				</div>
			</div>
		)
	}
}