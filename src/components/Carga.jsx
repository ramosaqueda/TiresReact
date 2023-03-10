import { useEffect,useState } from 'react';
import ejemplo from '../data/ejemplo.json';

const Carga = () => {
    const [bodie, setBodie] = useState();
    
    useEffect(() => {
        setBodie(ejemplo[0]['generation']['bodies']);
       }, []);
     
     
  return (
    <div>{bodie}</div>
  )
}

export default Carga