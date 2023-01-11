import React from "react";
// eslint-disable-next-line no-unused-vars
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import './Footer.css';
import imgPerfil from '../../assets/perfil.jpeg';

// https://codepen.io/axelaredz/pen/LdJjMJ


function Footer() {
  return (
    // <>

    <footer className="footer-area footer--light">
      <div className="footer-big">

        <div className="container">
          <div className="row border boder-danger">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="widget-about">
                  <div className="row ">
                    <div className="col  ">
                      <div className="row border boder-danger">
                        <div className="col p-3 border boder-danger d-flex align-items-center justify-content-center">
                          <img src={imgPerfil} alt="imagem Programador" className="img-fluid" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        </div>
                        <div className="col " style={{ borderRadius: "5px" }}>
                          <div className="row border boder-danger d-flex flex-column">
                            <div className="col-12 border boder-danger text-justify"><p>Tecnológico, apaixonado por linguagens de máquinas busco constantemente me reciclar.</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h4 className="footer-widget-title">Face Publicações <BsFacebook /></h4>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/photo?fbid=463802969237619&set=pcb.463802999237616">Embraer Social Tech</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/photo/?fbid=450576280560288&set=pcb.450576360560280">Live Byonde Codigo Fonte</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/photo?fbid=438294521788464&set=pcb.438295598455023">POO Introdução Python</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/photo/?fbid=464359139182002&set=a.106034338347819">CRUD com Django (Python)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h4 className="footer-widget-title">Linkedin Publicações <BsLinkedin /></h4>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/posts/tonistorres_vqv-activity-7011379961135525888-Vnaq?utm_source=share&utm_medium=member_desktop">API módulo readline-sync</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/posts/tonistorres_vqv-activity-6991810746263220224-FSYM?utm_source=share&utm_medium=member_desktop">Embraer Social Tech</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/posts/tonistorres_ol%C3%A1-espero-que-estejam-todos-bem-estou-activity-6982860152244695041-sdCx?utm_source=share&utm_medium=member_desktop">Refatorando Projeto</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/posts/tonistorres_sistema-desenvolvido-para-cl%C3%ADnica-hanna-em-activity-6970196077798912000-Oc6b?utm_source=share&utm_medium=member_desktop">Java DeskTop</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h4 className="footer-widget-title">GitHub Projetos Pinados <BsGithub /></h4>
                  <ul>
                    <li>
                      <a href="https://github.com/tonistorres/NodeRevisionAPIBackFrontFs">Cadastro Membros</a>
                    </li>
                    <li>
                      <a href="https://github.com/tonistorres/scientific-article">Artigo Científico</a>
                    </li>
                    <li>
                      <a href="https://github.com/tonistorres/crud-back-front">Cadastro de Reserva</a>
                    </li>
                    <li>
                      <a href="app-portfolio-personal.vercel.app">Portfolio</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mini-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>© 2023
                  <a href="https://www.linkedin.com/in/tonistorres/"> Tonis Torres</a>. All rights reserved. Created by
                  <a href="https://github.com/tonistorres"> Dev:T</a>
                </p>
              </div>
              <div className="go_top">
                <span className="icon-arrow-up"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // </>
  );
}

export default Footer;
