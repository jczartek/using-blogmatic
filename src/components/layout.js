import * as React from 'react';
import {Link} from 'gatsby';


const Layout = ({pageTitle, children}) => {
    return(
    <div>
        <title>{pageTitle}</title>
        <nav>
            <h4>using blogmatic</h4>
            <ul>
                <li><Link to="/">Posty</Link></li>
                <li><Link to="/about">O mnie</Link></li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
    </div>
    );
}

export default Layout;