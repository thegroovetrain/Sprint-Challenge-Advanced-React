import React from 'react';
import styled from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';

export default function WWCHeader (props) {
    
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <Header>
            <h1>Women's World Cup</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;