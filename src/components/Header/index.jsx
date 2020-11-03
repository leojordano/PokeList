import React, {Children, useContext} from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { HeaderStyled } from './styles';

function Header({ toggleTheme, children }) {
    const { color, title } = useContext(ThemeContext)

  return (
      <>
        <HeaderStyled>
            { children }

            <Switch
                onChange={toggleTheme}
                checked={title == 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={color.secundary}
                onColor={color.secundary}
            />
        </HeaderStyled>
      </>
  );
}

export default Header;