import { Col } from "react-bootstrap"

export const projectCard = ({title,description,imgUrl}) => {
    return (
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-tx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
        </div>
        </Col>
    )
}