import home from '../../images/home.svg'
import './UserEmail.css'

export default function UserEmail() {
    let UserEmail = localStorage.getItem("email");

    return(
        <div className="UserEmail">
            <img className="HomeIcon"src={home} alt= "HomeIcon" />
            {UserEmail}
        </div>
    )
    
}
