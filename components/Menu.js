import Link from "next/link"

function Menu (props) {

    return(
        <div className="menu_modal" style={{"display" : ( props.menuActive ? "flex" : "none" )}}>
            {/* <Link href='/SEO' className="modal_link">SEO Page</Link> */}

            <p>Coming Soon!</p>
        
        </div>
    )
}

export default Menu;