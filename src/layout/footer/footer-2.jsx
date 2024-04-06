import Link from "next/link";
import React from "react";

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-105">
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:61383766284">61 383 766 284</a>
                      </h4>
                      <a href="mailto:noreply@envato.com">noreply@envato.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Nuestros Enlaces
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/contact">Contáctanos</Link>
                        </li>
                        <li>
                          <Link href="/about">Ayuda y Sobre Nosotros</Link>
                        </li>
                        <li>
                          <Link href="/about">Sobre Nosotros</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Services</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                        Opening Hours
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Sunday - Wekend Day</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Información de Contacto
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>Mz. 67 Lt. 15 Armando V. Los Olivos, Lima, Peru </li>
                        <li>
                          <a href="https://wa.link/uten11" target="_blank" rel="noopener noreferrer">
                            (+51)944 689 364
                          </a>
                        </li>
                        <li>
                          <a href="mailto:support@rstheme.com">
                            support@rstheme.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/@AlexanderFlemingLab">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                      © Copyright ©{new Date().getFullYear()}
                      <Link href="mailto:juvenus.services@gmail.com"> Juvenus</Link>.
                      <i> Todos los derechos reservados</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="#">Términos y condiciones</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
