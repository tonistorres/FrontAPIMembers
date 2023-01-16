import React, { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import { FiEdit3 } from "react-icons/fi";
import { BsFillTrash2Fill } from "react-icons/bs";
import imgDelete from '../../assets/delete.gif'
import './Table.css';

function Table() {
  const value = useContext(CrudContext);
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
                    <td className=" border bg-light p-2">
                      {/* Editar Registro  */}
                      {/**O Botão Captura dados relacionados ao campo que recebe o evento de click */}
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#updateModal"
                        onClick={() => value.handleFindId(item.register)}>
                        <FiEdit3 size={36} color="#563D7C" />
                      </button>
                      <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="updateModalLabel">Deseja Atualizar Registro</h5>
                            </div>
                            <div className="modal-body">
                              <div className="modal-body">
                                <form>
                                  <div className="form-group">
                                    <div className="row">
                                      <div className="col-4">
                                        <label htmlFor="recipient-register" className="col-form-label">Register:</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="recipient-register"
                                          name="register"
                                          value={value.register}
                                          disabled={true}
                                        />
                                      </div>


                                      <div className="col-8">
                                        <label htmlFor="recipient-name" className="col-form-label">Membro:</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder='ex: Antonio da Silva'
                                          id="recipient-name"
                                          name="name"
                                          value={value.name}
                                          onChange={value.handleChangeName}
                                        />
                                      </div>

                                    </div>

                                    <div className="row">
                                      <div className="col-4 ">
                                        <label htmlFor="recipient-ano" className="col-form-label">Ano Batismo:</label>
                                        <input
                                          type="number"
                                          className="form-control w-100"
                                          placeholder='0'
                                          id="recipient-ano"
                                          name="baptism"
                                          value={value.baptism}
                                          onChange={value.handleChangeBaptism}
                                        />
                                      </div>
                                      <div className="col-4 ">
                                        <label htmlFor="recipient-birth" className="col-form-label">Nascimento:</label>
                                        <input
                                          type="string"
                                          autoComplete="off"
                                          className="form-control w-100"
                                          maxLength={10}
                                          id="recipient-birth"
                                          name="birth"
                                          value={value.birth}
                                          onChange={value.handleChangeBirth}
                                          onKeyUp={value.handleKeyUpBirth}
                                          required={false}
                                          style={{ backgroundColor: "#563D7C", color: "#ffffff", fontWeight: 700, fontSize: "18px" }}
                                        />
                                      </div>
                                      <div className="col-4 ">
                                        <label htmlFor="recipient-contry" className="col-form-label">País:</label>
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          id="recipient-country"
                                          name="country"
                                          value={value.country}
                                          onChange={value.handleChangeCountry}
                                        />
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-4 ">
                                        <label htmlFor="recipient-state" className="col-form-label">Estado:</label>
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          placeholder='ex:São Paulo'
                                          id="recipient-state"
                                          name="state"
                                          value={value.state}
                                          onChange={value.handleChangeState}
                                        />
                                      </div>
                                      <div className="col-4 ">
                                        <label htmlFor="recipient-city" className="col-form-label">Cidade:</label>
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          placeholder='ex: Cidade'
                                          id="recipient-city"
                                          name="city"
                                          value={value.city}
                                          onChange={value.handleChangeCity}
                                        />
                                      </div>
                                      <div className="col-4 ">
                                        <label htmlFor="recipient-district" className="col-form-label">Bairro:</label>
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          placeholder='ex:Bairro'
                                          id="recipient-district"
                                          name="district"
                                          value={value.district}
                                          onChange={value.handleChangeDistrict}
                                        />
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col ">
                                        <label htmlFor="recipient-dad" className="col-form-label">Pai:</label>
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          placeholder='ex: Jõao Silva'
                                          id="recipient-dad"
                                          name="dad"
                                          value={value.dad}
                                          onChange={value.handleChangeDad}
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col ">
                                        <label htmlFor="recipient-mother" className="col-form-label">Mãe:</label>
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          placeholder='ex: Joana Silva'
                                          id="recipient-mother"
                                          name="mother"
                                          value={value.mother}
                                          onChange={value.handleChangeMother}
                                        />
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-4 ">
                                        <label htmlFor="rec ipient-status" className="col-form-label">Situação Civil:</label>
                                        <input
                                          type="text"
                                          className="form-control w-100"
                                          placeholder='ex: Solteiro(a)'
                                          id="recipient-status"
                                          name="statuscivil"
                                          value={value.status}
                                          onChange={value.handleChangeStatus}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => value.handleUpdate({
                                "name": `${value.name}`,
                                "baptism": `${value.baptism}`,
                                "birth": `${value.treatingDate(value.birth)}`,
                                "country": `${value.country}`,
                                "state": `${value.state}`,
                                "city": `${value.city}`,
                                "district": `${value.district}`,
                                "mother": `${value.mother}`,
                                "dad": `${value.dad}`,
                                "status": `${value.status}`
                              })}  > Atualizar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fim Editar Registro */}
                    </td>
                    <td className=" border bg-light p-2">
                      {/* Excluir Registros INICIO */}
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
                      {/*Excluir Registros Fim*/}
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
