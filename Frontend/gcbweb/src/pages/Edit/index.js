import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import save from '../../assets/disquete.png';
import excluir from '../../assets/excluir.png';
import { Form } from '@unform/web'
import { useHistory, useParams  } from 'react-router-dom';
import Input from '../../components/Form/input';

export default function Edit() {
    const [doctor, setDoctor] = useState({});
    const params = useParams();
    const history = useHistory();

    async function handleSubmit(data) {
        await api.put(`/doctors/${data.id}`, data)
        alert('Registro Editado com Sucesso!')
        history.push('/')
    }

    async function deleteDoctor(){
        await api.delete(`doctors/${doctor.id}`)
        alert('Registro excluido com sucesso!')
        history.push('/')
    }

    async function loadDoctor() {
        const response = await api.get(`doctors/${params.id}/specs`)
        setDoctor(response.data)
    }
        
        useEffect(() => {
            loadDoctor()
        }, [])        
        return (
            <Form initialData={doctor} onSubmit={handleSubmit}>
            <div className="doctor-info">
                <div className="edit">
                   
                    <button onClick={deleteDoctor}>
                        <img className="imgDelete"src={excluir}/>
                    </button>
                    <button type="submit">
                        <img className="imgEdit"src={save}/>
                    </button>
                      
                </div>
                <Input name="id" disabled/>
                <h1>Alterar</h1>
                <div className="info">
                    <p>Nome: <Input name="name"/></p>
                    <p>CRM: <Input name="crm"/></p>
                    
                </div>
                <div className="address">
                    <p>Phone: <Input name="phone"/></p>
                    <p>Estado: <Input name="state"/></p>
                    <p>Cidade: <Input name="city"/></p>
                </div>
            </div>
        </Form>
        )
}