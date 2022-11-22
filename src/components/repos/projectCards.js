export const projectCard = ({title,description,imgUrl}) => [
    return (
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-tx">
            <h4>{title}</h4>
            <span></span>
        </div>
        </div>
        </Col>
    )
]