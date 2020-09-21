import React, { useEffect, useState} from 'react';
import api from '../../services/api'
import edit from '../../assets/editar.png';
import more from '../../assets/mais.png';
import excluir from '../../assets/excluir.png';
import { Link, useParams } from 'react-router-dom';
import './styles.css'
export default function Detail(){
    const params = useParams();
    const [doctor, setDoctor] = useState({});
    const [specs, setSpecs] = useState([]);
    const [description, setDescription] = useState("");
    var cont = 0;

    async function loadDoctor(){
        const response = await api.get(`doctors/${params.id}/specs`)
        setDoctor(response.data)
        setSpecs(response.data.specs)
    }   

    async function addSpec(){
        const response = await api.post(`doctors/${params.id}/specs`, {description})
        setSpecs([...specs, response.data])
    }

    async function deleteSpec(spec_id){
        const response = await api.delete(`doctors/${params.id}/specs/${spec_id}`);
        alert('Especialidade desvinculada com sucesso!')
        setSpecs(response.data.specs)
    }

        useEffect(() => {
            loadDoctor()
      
          }, []);
          useEffect(() => {
      
          }, [specs]);
        return (
            <div className="doctor-info">
                
                <div className="edit">
                    <Link to={`/doctor/${doctor.id}/edit`}>
                        <img className="imgEdit"src={edit}/>
                    </Link>   
                </div>
                <h1>{doctor.name}</h1>
                <div className="info">
                    <p>CRM: {doctor.crm}</p>
                    <p>Phone: {doctor.phone}</p>
                </div>
                <div className="info">
                    <p>Estado: {doctor.state}</p>
                    <p>Cidade: {doctor.city}</p>
                </div>

                <div className="specs-list">
                    <h1> Especialidades</h1>
                    
                    <div className="addSpec">
                        <input placeholder="Ex: Clinica Medcia" value={description} onChange={e => (setDescription(e.target.value))}/>
                        <button onClick={() => addSpec()}>
                            <img id="imgDelete"src={more}/>    
                        </button>
                    </div>
                    <div className="infoSpecs">
                        {specs.map(spec => (
                            <article key={spec.id}>
                                <p>{cont = cont +1} - {spec.description}</p>
                                <button onClick={() => deleteSpec(spec.id)}>
                                    <img id="imgDelete"src={excluir}/>    
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
