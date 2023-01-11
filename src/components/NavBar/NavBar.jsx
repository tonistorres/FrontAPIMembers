
import React, { useContext, useState } from "react";
import CrudContext from "../../context/CrudContext";
import logoBootstrap from './bootstrap-4.svg';
import './NavBar.css';


function NavBar() {
  const [member, setMember] = useState('');
  const [year, setYear] = useState(0);
  const [dtNasc, setDtNasc] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [dad, setDad] = useState('');
  const [mother, setMother] = useState('');
  const [statuscivil, setStatus] = useState('');
  const value = useContext(CrudContext);




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

  const handleChangeMember = (evt) => {
    setMember(evt.target.value);
  }

  const handleChangeYear = (evt) => {
    setYear(evt.target.value);
  }


  const handleChangeDtNasc = (evt) => {
    setDtNasc(evt.target.value);
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

  return (
    <div className="container-fluid border-custom-1-nav">
      <nav className="navbar navbar-light ">
        <div className="row w-100">
          <div className="col-2">
            <a className="navbar-brand" href="#">
              <img src={logoBootstrap} width="40" height="40" alt="Logo Bootstrap" />
            </a>
          </div>
          <div className="col-8 d-flex align-items-center justify-content-center bg-bootstrap-nav">
            <h1 > CRUD MEMBERS</h1>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <button type="button" className="btn p-2" style={{ backgroundColor: "#563D7C", color: "#ffffff" }} data-toggle="modal" data-target="#ExemploModalCentralizado">
              Cadastrar Membros
            </button>

            <div className="modal fade" id="ExemploModalCentralizado" tabIndex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="TituloModalCentralizado">Cadastro de Membros</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <div className="row">
                          <div className="col">
                            <label htmlFor="recipient-name" className="col-form-label">Membro:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder='ex: Antonio da Silva'
                              id="recipient-name"
                              name="member"
                              value={member}
                              onChange={handleChangeMember}
                            />
                          </div>

                        </div>

                        <div className="row">
                          <div className="col ">
                            <label htmlFor="recipient-ano" className="col-form-label">Ano:</label>
                            <input
                              type="number"
                              className="form-control w-100"
                              placeholder='0'
                              id="recipient-ano"
                              name="year"
                              value={year}
                              onChange={handleChangeYear}
                            />
                          </div>
                          <div className="col ">
                            <label htmlFor="recipient-dtnasc" className="col-form-label">Data Nascimento:</label>
                            <input
                              type="date"
                              className="form-control w-100"
                              id="recipient-dtnasc"
                              name="dtNasc"
                              value={dtNasc}
                              onChange={handleChangeDtNasc}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col ">
                            <label htmlFor="recipient-contry" className="col-form-label">País:</label>
                            <input
                              type="text"
                              className="form-control w-100"
                              id="recipient-country"
                              name="country"
                              value={country}
                              onChange={handleChangeCountry}
                            />
                          </div>
                          <div className="col ">
                            <label htmlFor="recipient-state" className="col-form-label">Estado:</label>
                            <input
                              type="text"
                              className="form-control w-100"
                              placeholder='ex:São Paulo'
                              id="recipient-state"
                              name="state"
                              value={state}
                              onChange={handleChangeState}
                            />
                          </div>
                        </div>


                        <div className="row">
                          <div className="col ">
                            <label htmlFor="recipient-city" className="col-form-label">Cidade:</label>
                            <input
                              type="text"
                              className="form-control w-100"
                              placeholder='ex: Cidade'
                              id="recipient-city"
                              name="city"
                              value={city}
                              onChange={handleChangeCity}
                            />
                          </div>
                          <div className="col ">
                            <label htmlFor="recipient-district" className="col-form-label">Bairro:</label>
                            <input
                              type="text"
                              className="form-control w-100"
                              placeholder='ex:Bairro'
                              id="recipient-district"
                              name="district"
                              value={district}
                              onChange={handleChangeDistrict}
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
                              value={dad}
                              onChange={handleChangeDad}
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
                              value={mother}
                              onChange={handleChangeMother}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col ">
                            <label htmlFor="recipient-status" className="col-form-label">Situação Civil:</label>
                            <input
                              type="text"
                              className="form-control w-100"
                              placeholder='ex: Solteiro(a)'
                              id="recipient-status"
                              name="statuscivil"
                              value={statuscivil}
                              onChange={handleChangeStatus}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary" onClick={() => value.handleCreate({
                      "name": `${member}`,
                      "baptism": `${year}`,
                      "birth": `${dtNasc}`,
                      "country": `${country}`,
                      "state": `${state}`,
                      "city": `${city}`,
                      "district": `${district}`,
                      "mother": `${mother}`,
                      "dad": `${dad}`,
                      "status": `${statuscivil}`
                    })} data-dismiss="modal">Salvar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
