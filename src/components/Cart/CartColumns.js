import React from "react";

export default function CartColumns() {
	return (
		<div className="container-fluid text-center d-none d-lg-block">
			<div className="row">
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upper">products</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upper">name of product</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upper">price</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upper">quantity</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upper">remove</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-upper">total</p>
				</div>
			</div>
		</div>
		);
}