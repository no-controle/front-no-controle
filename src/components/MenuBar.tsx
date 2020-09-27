import React from 'react'
import { Menu } from 'semantic-ui-react'

const MenuBar = (props: {activeItem: string, onClick: any}) => {
  const handleItemClick = (_event: any, option: any) => props.onClick(option.name);

  return <Menu borderless>
    <div className="ui container">
      <Menu.Item
        name='Geral'
        active={props.activeItem === 'Geral'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='Mensal'
        active={props.activeItem === 'Mensal'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='Pagamento'
        active={props.activeItem === 'Pagamento'}
        onClick={handleItemClick}
      />
    </div>
  </Menu>
}

export default MenuBar;