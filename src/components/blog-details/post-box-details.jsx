import Link from "next/link";
import React from "react";
import Category from "../blog/category";

const PostBoxDetails = () => {
 
  return (
    <>
      <div
        className="postbox__area pt-130 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-20">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img mb-30">
                    <Link href="/blog-details">
                      <img src="/assets/img/blog/blog-in-01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area pb-20">
                          <div className="postbox__meta mb-40">
                            <span>
                              <Link href="/team-details">
                                <i className="fa-regular fa-user"></i> Alextina
                              </Link>
                            </span>
                            <span>
                              <i className="fa-regular fa-clock"></i> Dec 28,
                              2022
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa-regular fa-message-dots"></i>{" "}
                                (04) Coments
                              </a>
                            </span>
                            <span>
                              <i className="fa-light fa-eye"></i> 1,526 views
                            </span>
                          </div>

                          <h3 className="postbox__title mb-35">
                            <Link href="/blog-details">
                              Lavoratories used for scientic reseach take many
                              froms.
                            </Link>
                          </h3>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                            aperiam ipsquae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo
                            enim voluptatem voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet.
                          </p>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                            aperiam ipsquae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__content-area mb-60">
                          <h4>Our Approach</h4>
                          <div className="postbox__text mb-30">
                            <p>
                              Must explain to you how all praising uts pain was{" "}
                              <br /> born and I will gives you a itself
                              completed <br /> account of the system, and sed
                              expounds the ut <br /> actual teachings of that
                              greater{" "}
                            </p>
                            <div className="postbox__text-list">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Extramural Funding
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Bacteria
                                  Markers
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Nam nec
                                  mi euismod euismod
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img w-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-03.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area mb-40">
                          <h4 className="mb-25">
                            <Link href="/blog-details">
                              What Is A Business Technology Roadmap?
                            </Link>
                          </h4>
                          <p>
                            Unlike detailed blueprints that lay out all tasks,
                            deadlines, bug reports, and more along the way,
                            technology roadmaps are high-level visual summaries
                            highlighting a company’s vision or plans.
                          </p>
                          <p>
                            In an Agile approach, a technology roadmap feeds the
                            sprint and grooming processes, providing insight
                            into how the product will travel from start to
                            finish. It makes it easier for development teams to:
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-01.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-02.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper pl-25 pb-50">
                <Category />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBoxDetails;
