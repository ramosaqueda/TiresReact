import { useState, useEffect } from 'react';
import TiendasList from './TiendasList'
import tiendas from '../../data/tiendas.json'
const TiendaContainer = () => {
    const [items, setItems] = useState(null);
    useEffect(() => {
        setItems(tiendas)
    });

  return (
    <TiendasList items={items} />
  )
}

export default TiendaContainer