import React from 'react';

import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
	return (
		<header className="shop-header row">
			<a href="#" className="logo tetx-dark">Restore</a>
			<a href="">
				<i className="cart-icon fa fa-shopping-cart" />
				{numItems} items (${total})
			</a>
		</header>
	)
};

export default ShopHeader;