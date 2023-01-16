import React, { useState, useEffect, useCallback } from 'react';
import CrudContext from './CrudContext';
import { urlBaseMembers } from "../../src/services/api";

// eslint-disable-next-line react/prop-types
function HomeProvider({ children }) {

  const [arrayAllMembers, setAllMembers] = useState([]);
  const [currentIdDelete, setCurrentIdDelete] = useState('');
  const [currentIdUpdate, setCurrentIdUpdate] = useState('');

  //update

  const [register, setRegister] = useState('');
  const [cep, setCep] = useState('65413-000');

  const [name, setNameMember] = useState('');
  const [baptism, setBaptism] = useState(0);
  const [birth, setBirth] = useState('');
  console.log('State Birth', birth);
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [dad, setDad] = useState('');
  const [mother, setMother] = useState('');
  const [status, setStatus] = useState('');



  useEffect(() => {
    const listAll = async () => {
      try {
        const response = await urlBaseMembers.get('/members',
        );
        setAllMembers(response.data);
      } catch (error) {
        console.log("Erro Gerado Achou!!:", error);
      }
    }
    listAll();
  }, []);


  const handleFindAll = async () => {
    try {
      const response = await urlBaseMembers.get('/members',
      );
      setAllMembers(response.data);
    } catch (error) {
      alert("Internal Error Method FindAll")
    }
  }


  const handleFindId = async (id) => {
    try {
      const response = await urlBaseMembers.get(`/members/${id}`);
      console.log('Ex o dado filtrado:', response.data);
      setRegister(response.data.register)
      setNameMember(response.data.name);
      setBaptism(response.data.baptism);
      setBirth(response.data.birth);
      setCountry(response.data.country);
      setCity(response.data.city);
      setDistrict(response.data.district);
      setMother(response.data.mother);
      setDad(response.data.dad);
      setState(response.data.state);
      setStatus(response.data.status);
    } catch (error) {
      console.log('Internal Error Method FindId');
    }
  }

  const handleCreate = async (newMemberObject) => {
    try {
      await urlBaseMembers.post(`/member`, newMemberObject);
      await handleFindAll();
    } catch (error) {
      alert('Internal Error Method Create ', error)
    }
  }

  const handleDelete = async () => {
    try {
      await urlBaseMembers.delete(`/members/delete/${currentIdDelete}`);
      await handleFindAll();
    } catch (error) {
      alert('Internal Error Method Delete ', error)
    }
  }


  const handleUpdate = async (objUpdate) => {
    try {
      await urlBaseMembers.put(`/members/${register}`, objUpdate);
      await handleFindAll();
    } catch (error) {
      alert('Internal Error Method Update ', error)
    }
  }

  // UPDATE

  const handleChangeName = (evt) => {
    setNameMember(evt.target.value);
  }

  const handleChangeBaptism = (evt) => {
    setBaptism(evt.target.value);
  }
  // Cep
  const handleKeyUpCEP = useCallback((evt) => {

    evt.currentTarget.maxLenght = 9;
    let value = evt.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    evt.currentTarget.value = value;
  }, []);


  const handleChangeCEP = (evt) => {
    setCep(evt.target.value);
  }

  // Birth
  const handleKeyUpBirth = useCallback((evt) => {
    evt.currentTarget.maxLenght = 10;
    let value = evt.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    evt.currentTarget.value = value;

  }, []);

  const handleChangeBirth = (evt) => {
    setBirth(evt.target.value);

  }


  const handleChangeCountry = (evt) => {
    setCountry(evt.target.value);

  }

  const handleChangeState = (evt) => {
    setState(evt.target.value);
  }


  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
  }

  const handleChangeStatus = (evt) => {
    setStatus(evt.target.value);
  }


  const handleChangeMother = (evt) => {
    setMother(evt.target.value);
  }

  const handleChangeDad = (evt) => {
    setDad(evt.target.value);
  }

  const handleChangeDistrict = (evt) => {
    setDistrict(evt.target.value);
  }
  function treatingDate(str) {
    const year = str.substring(4, 10);
    const month = str.substring(3, 5);
    const day = str.substring(0, 2);
    return `${day}/${month}/${year}`
  }


  return (
    <CrudContext.Provider value={{
      handleKeyUpCEP,
      handleKeyUpBirth,
      arrayAllMembers,
      currentIdDelete,
      currentIdUpdate,
      handleFindAll,
      handleCreate,
      handleDelete,
      handleUpdate,
      setAllMembers,
      setCurrentIdDelete,
      setCurrentIdUpdate,
      //UPDATE
      handleChangeCEP,
      handleChangeName,
      handleChangeBaptism,
      handleChangeBirth,
      handleChangeStatus,
      handleChangeMother,
      handleChangeDad,
      handleChangeDistrict,
      handleChangeCountry,
      handleChangeState,
      handleChangeCity,
      treatingDate,
      handleFindId,
      cep,
      register,
      name,
      baptism,
      birth,
      country,
      state,
      city,
      district,
      dad,
      mother,
      status
    }}>
      {children}
    </CrudContext.Provider>
  );
}


export default HomeProvider;
