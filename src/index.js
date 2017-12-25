import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Layout from './Layout';
import Search from './Search';

ReactDOM.render(
		<Favicon url = "favicon.ico" />,
		document.getElementById('icon')
	);
const app = document.getElementById('root');
ReactDOM.render(
<Router>
	<div>
		<Route exact path="/" component={Layout} />
		<Route path="/search" component={Search} />
	</div>
</Router>,
app);

