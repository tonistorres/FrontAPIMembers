import React, { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import { FiEdit3 } from "react-icons/fi";
import { BsFillTrash2Fill } from "react-icons/bs";
import imgDelete from '../../assets/delete.gif'
import './Table.css';
// import { urlBaseMembers } from "../../services/api";

function Table() {
  const value = useContext(CrudContext);

  // const handleDelete = async (id) => {
  //   try {
  //     await urlBaseMembers.delete(`/members/delete/${id}`);
  //     await value.handleFindAll();
  //   } catch (error) {
  //     console.error("Erro Method Delete");
  //   }
  // }


  return (
    <div className="container-fluid d-flex align-items-center justify-content-center mt-4 mb-4">
      <table className='table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl'>
        <tr>
          <thead className="bg-custo-thead color-custom-thead">
            <tr>
              <th scope='col' className="text-center" >Register</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }} >NOME</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }}>ANO</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }} >DTNASC</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }}>PAÍS</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }} >ESTADO</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }}>CIDADE</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }}>BAIRRO</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }}>PAI</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }}>MÃE</th>
              <th scope='col' className="text-center p-2" style={{ letterSpacing: '2.5px' }}>CIVIL</th>
            </tr>
          </thead>
          {value.arrayAllMembers.length > 0 &&
            value.arrayAllMembers.map((item) => {
              return (
                <tbody key={item.register}>
                  <tr>
                    <td className=" border bg-light p-2" >{item.register}</td>
                    <td className=" border bg-light p-2">{item.name}</td>
                    <td className=" border bg-light p-2">{item.baptism}</td>
                    <td className=" border bg-light p-2">{item.birth}</td>
                    <td className=" border bg-light p-2">{item.country}</td>
                    <td className=" border bg-light p-2">{item.state}</td>
                    <td className=" border bg-light p-2">{item.city}</td>
                    <td className=" border bg-light p-2">{item.district}</td>
                    <td className=" border bg-light p-2">{item.dad}</td>
                    <td className=" border bg-light p-2">{item.mother}</td>
                    <td className=" border bg-light p-2">{item.status}</td>
                    <td className=" border bg-light p-2"><FiEdit3 size={36} /></td>
                    <td className=" border bg-light p-2">

                      <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal" onClick={() => value.setCurrentIdDelete(item.register)}>
                        <BsFillTrash2Fill size={36} color="#563D7C" />
                      </button>
                      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Deseja excluir o registro</h5>

                            </div>
                            <div className="modal-body">
                              <img src={imgDelete} alt="Imagem deletar" />
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={value.handleDelete} > Excluir</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </tr>
      </table>
    </div >
  );
}




export default Table;
