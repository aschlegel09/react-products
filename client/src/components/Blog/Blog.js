import React from "react";
import { Row, Container } from "../Grid/index";
import Jumbotron from "../Jumbotron";
// import Reveal from 'react-reveal/Reveal';
                // <Reveal effect="fadeInUp"></Reveal>
function Blog() {
    return (
        <Container>
            <Jumbotron>
                <Row>
                    <div className="col-md-6">
                        <div className="card flex-md-row m-4 shadow-sm h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <h4>Category</h4>
                                <h3>Title</h3>
                                <p>News Article Summary</p>
                            </div>
                            <img className="card-img-right flex-auto d-lg-block" alt="placeholder" src="https://picsum.photos/200/300/?random" />
                        </div>
                    </div>
                </Row>
            </Jumbotron>
        </Container>
    )
};

export default Blog;