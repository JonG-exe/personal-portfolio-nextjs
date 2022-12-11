// import { Link } from "react-router-dom"

function Menu (props) {

    return(
        <div className="menu_modal" style={{"display" : ( props.menuActive ? "flex" : "none" )}}>
            {/* <Link to='/tutorial' className="modal_link">Tutorial Component</Link> */}
        </div>
    )
}

export default Menu;