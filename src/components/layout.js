import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

import './layout.css';

const Layout = ({children}) => (
    <IdentityContextProvider url="https://jam-stackauth-test.netlify.com">
        <header>
            <Link to='/'>JAMstack app</Link>
        </header>
        <main>
            {children}
        </main>
    </IdentityContextProvider>
)

export default Layout;
