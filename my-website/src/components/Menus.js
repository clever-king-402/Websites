import React from 'react'
import { Link } from "react-router-dom";

export default function Menus() {
  return (
    <>
    <section className="navigation">
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/websites">Websites</Link></li>
                </ul>
            </nav>
        </div>
    </section>
    </>
  )
}
