import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTRO } from '../graphql/auth/mutations';
import { Enum_Rol } from '../utils/enums';
import Header from './Header';
//import Login from './Login'; 

function Register(){ 
  //const navigate = useNavigate();
  const stateReg ={ nombre: "",
					apellido: "",
					identificacion: "",
					correo: "",
					rol: "",
					password: "",}
  const [formData, setFormData] = useState(stateReg);
  console.log("Datos iniciales: ", this);
  console.log(JSON.stringify({formData}));
  console.log(formData);
  const [registro, { data: dataMutation }] = useMutation(REGISTRO); 

  const onSubmit= async (e)=> {
    e.preventDefault();
    console.log("Click onSubmit: JSON.stringify {formData}", this);
    console.log(JSON.stringify({formData}));
    console.log(formData);
    registro({variables: formData });
    
//    () => setFormData(stateReg)
  };
  
  /*
  useEffect(() => { 
    setFormData( {stateReg: formData} )
  }, [formData]);
  */
  
  //const [count, setCount] = useState(0);
  return(
  <div >
    <Header/>
    <div className="container">
    <form onSubmit={onSubmit} className="border p-5 form" >
  	  <div className="form-row">
        <div className="form-group col-md-6">
		  <label for="inputAddress">Nombre</label>
		  <input type="text" className="form-control" id="inputAddress" placeholder="Nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value,})}/>
	    </div>
	    <div className="form-group col-md-6">
		  <label for="inputAddress2">Apellido</label>
		  <input type="text" className="form-control" id="inputAddress2" placeholder="Apellido"
              value={formData.apellido}
              onChange={(e) => setFormData({...formData, apellido: e.target.value,})}/>
	    </div>
		<div className="form-group col-md-6">
		  <label for="inputCity">Identificacion</label>
		  <input type="number" className="form-control" id="inputCity"
              value={formData.identificacion}
              onChange={(e) => setFormData({...formData, identificacion: e.target.value,})}/>
		</div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Correo Electronico</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="example@email.com"
              value={formData.correo}
              onChange={(e) => setFormData({...formData, correo: e.target.value,})}/>
        </div>
        <div className="form-group col-md-6">
          <label for="inputPassword4">Contrasena</label>
          <input type="password" className="form-control" id="inputPassword4"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value,})}/>
        </div>
      </div>

	  <div className="form-row">
		<div className="form-group col-md-6">
		  <label for="inputState">Rol</label>
		  <select id="inputState" className="form-control"
		      defaultValue={"Estudiante"}
              value={formData.rol}
              onChange={(e) => setFormData({...formData, rol: e.target.value,})}
              options={Enum_Rol}>
		    <option>Estudiante</option>
		    <option>Lider</option>
		    <option>Administrador</option>
		  </select>
		</div>
	  </div>
  	  <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
    <span>¿Ya tienes una cuenta?</span>
      <Link to='/login'>
        <span >Inicia sesión</span>
      </Link>
    </div>
  </div>
  )
}

export default Register;
