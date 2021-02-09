import {connect} from "react-redux";

const ContainerStyle = {
    padding: "2rem",
}

const ProjectLanding = ({project_data}) => {
    return(
        <div style={ContainerStyle}>
            <h4>Please select a document.</h4>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        project_data: state.project_data,
    }
}

export default connect(mapStateToProps, {})(ProjectLanding);