import { NavLink } from "react-router"
import stl from '../header/header.module.css'

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

const Footer = () => {


    return(
        <div className={stl.header}>
                   <h3>Footer</h3>
                   {
                       links.map( (page, k) => (
                           <NavLink key={k} to={page.to} className={stl.link}>{page.label}</NavLink>
                       ))
                   }
               </div>
    )
}

export default Footer