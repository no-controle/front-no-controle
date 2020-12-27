import React from 'react'
import { useLocation } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

const MenuBar = () => {
  const currentLocation = useLocation().pathname;

  return <Menu borderless>
    <div className="ui container">
      <Menu.Item
        name='Geral'
        active={currentLocation === '/'}
        href='/'
      />
      <Menu.Item
        name='Mensal'
        active={currentLocation === '/mensal'}
        href='/mensal'
      />
      <Menu.Item
        name='Pagamento'
        active={currentLocation === '/pagamento'}
        href='/pagamento'
      />
    </div>
  </Menu>
}

export default MenuBar;