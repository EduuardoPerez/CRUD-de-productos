import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Producto from './components/Producto';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/nuevo-producto" component={AgregarProducto} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/productos/:id" component={Producto} />
        <Route exact path="/productos/editar/:id" component={EditarProducto} />
      </Switch>
    </Router>
  );
}

export default App;
