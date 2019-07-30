import React, {useState, useRef} from 'react';
import Error from './Error';
import Producto from './Producto';

function EditarProducto({producto}){

  // Generar los refs
  const precioPlatilloRef = useRef('');
  const nombrePlatilloRef = useRef('');
  
  const [error, guardarError] = useState(false);
  const [categoria, guardarCategoria] = useState('');

  const leerValorRadio = e => {
    guardarCategoria(e.target.value);
  }

  const editarProducto = e => {

  }

  return(
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Editar producto</h1>

      {(error) ? <Error mensaje='Todos los campos son obligatorios'/> : null}

      <form
        className="mt-5"
        onSubmit={editarProducto}
      >
        <div className="form-group">
          <label>Nombre del platillo</label>
          <input 
            type="text" 
            className="form-control" 
            name="nombre" 
            placeholder="Nombre del platillo"
            ref={nombrePlatilloRef}
            defaultValue={producto.nombrePlatillo}
          />
        </div>
        <div className="form-group">
          <label>Precio del platillo</label>
          <input 
            type="number" 
            className="form-control" 
            name="precio"
            placeholder="Precio del platillo"
            ref={precioPlatilloRef}
            defaultValue={producto.precioPlatillo}
          />
        </div>
        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="categoria"
              value="postre"
              onChange={leerValorRadio}
              defaultChecked={producto.categoria==='postre'}
            />
            <label className="form-check-label">
              Postre
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="categoria"
              value="bebida"
              onChange={leerValorRadio}
              defaultChecked={producto.categoria==='bebida'}
            />
            <label className="form-check-label">
              Bebida
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="categoria"
              value="cortes"
              onChange={leerValorRadio}
              defaultChecked={producto.categoria==='cortes'}
            />
            <label className="form-check-label">
              Cortes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="categoria"
              value="ensalada"
              onChange={leerValorRadio}
              defaultChecked={producto.categoria==='ensalada'}
            />
            <label className="form-check-label">
              Ensalada
            </label>
          </div>
        </div>
        <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar producto" />
      </form>
    </div>
  );
}
export default EditarProducto;