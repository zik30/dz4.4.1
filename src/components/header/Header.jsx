import { NavLink } from "react-router"
import stl from './header.module.css'

const links = [
    {
        label: "MainPage",
        to: '/'
    },
    {
        label: 'ImgsPage',
        to: '/imgs'
    }
]


const Header = () => {


    return(
        <div className={stl.header}>
            <h3>Header</h3>
            {
                links.map( (page, k) => (
                    <NavLink key={k} to={page.to} className={stl.link}>{page.label}</NavLink>
                ))
            }
        </div>
    )
}

export default Header