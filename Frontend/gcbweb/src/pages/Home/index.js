import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import api from '../../services/api';
import'./styles.css';

export default function Home(){
    const [doctors, setDoctors] = useState([]);
    const [s, setS] = useState([]);
    async function loadDoctors (){
      const response = await api.get('doctors');
  
      setDoctors(response.data)
      setS(response.data)
    }

    async function searchDoctors(value){
      var search = [];
      doctors.map(function ( d ){
        if(d.name.startsWith(value) == true){
          search.push(d)
        }
      });

      if(!value){
        setDoctors(s)
      }else{
        setDoctors(search)
      }
    }

    useEffect(() => {
      loadDoctors()

    }, []);
    useEffect(() => {
      

    }, [doctors]);

    return (
      
      <div className="doctor-list">
        <div className="header">
          <Link to={`/newDoctors`}>Novo Medico</Link>
          <input placeholder="Nome do medico" onChangeCapture={e => searchDoctors(e.target.value)}/>
        </div> 
      {doctors.map(doctor => (
        <article key={doctor.id}>
          <strong>{doctor.name}</strong>
          <p>{doctor.crm}</p>
          
          <Link to={`/doctor/${doctor.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    );
}