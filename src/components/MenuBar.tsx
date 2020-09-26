import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState('Geral');

  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, name: any) => setActiveItem(name)

  return <Menu borderless>
    <div className="ui container">
      <Menu.Item
        name='Geral'
        active={activeItem === 'Geral'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='Mensal'
        active={activeItem === 'Mensal'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='Pagamento'
        active={activeItem === 'Pagamento'}
        onClick={handleItemClick}
      />
    </div>
  </Menu>
}

export default MenuBar;