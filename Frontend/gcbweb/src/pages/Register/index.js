import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import save from '../../assets/disquete.png';
import { Form } from '@unform/web'
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Form/input';
import './styles.css'
export default function Register(){
    const [doctors, setDoctors] = useState([]);
    const history = useHistory();

    async function handleSubmit(data) {
        if(!data.name | !data.crm | !data.phone |!data.state |!data.state |!data.city)
        {
            return alert('Preencha todos os campos!')
        }
       const response = await api.post('doctors', data)
        
       history.push('/')
    }

    useEffect(() => {
      

    }, []);

    return (
        <Form  onSubmit={handleSubmit}>
            <div className="doctor-info">
                <div className="edit">
                   
                    <button type="submit">
                        <img className="imgEdit"src={save}/>
                    </button>
                      
                </div>
                <h1>Novo Medico:</h1>
                
                <div className="info">
                    <p>Name: <Input name="name"/></p>
                    <p>CRM: <Input name="crm"/></p>
                    
                </div>
                <div className="address">
                    <p>Phone: <Input  name="phone"/></p> 
                    <p>Estado: <Input maxLength="2" name="state"/></p>
                    <p>Cidade: <Input name="city"/></p>
                </div>
            </div>
        </Form>
    );
}