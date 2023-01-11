import React, { useState, useEffect } from 'react';
import CrudContext from './CrudContext';
import { urlBaseMembers } from "../../src/services/api";
/**
 * Algo que poderia ser implementando nesse ponto é trabalhar um pouco mais com o state do reac
 *  no que se refere ao método handleAll no momento de deleção utilizar uma função que retorne
 * para o usuário no o que tem no banco mais o que foi tirado naquele momento do estado atual
 * ou o que tem no estado atual em vez de fazer uma requisição no banco
 */

// eslint-disable-next-line react/prop-types
function HomeProvider({ children }) {

  const [arrayAllMembers, setAllMembers] = useState([]);
  const [currentIdDelete, setCurrentIdDelete] = useState('');

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

  return (
    <CrudContext.Provider value={{
      arrayAllMembers,
      currentIdDelete,
      setCurrentIdDelete,
      handleFindAll,
      handleCreate,
      setAllMembers,
      handleDelete

    }}>
      {children}
    </CrudContext.Provider>
  );
}

export default HomeProvider;
