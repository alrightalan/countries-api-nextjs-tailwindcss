import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body className="text-dark-elements bg-light-bg dark:bg-dark-bg dark:text-light-elements">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
