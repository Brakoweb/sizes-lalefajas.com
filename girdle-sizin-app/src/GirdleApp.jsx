import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

  const calcHeight = (ft, inch) => {
    ft = parseFloat(ft);
    inch = parseFloat(inch);
    if (inch == 10 || inch == 11) {
        return ft + (inch * 0.01)
    } else {
        return ft + (inch * 0.1)
    }
  }


 
const getGirdleSize = (height, weight) => {
    let size = '';
    if (height >= 5 && height <= 5.6) {
        if (weight >= 91 && weight <= 97) {
            return size = '3XS';
        }else if (weight >= 98 && weight <= 106) {
            return size = '2XS';
        }else if (weight >= 107 && weight <= 116) {
            return size = 'XS';
        }else if (weight >= 117 && weight <= 131) {
            return size = 'S';
        }else if (weight >= 132 && weight <= 151) {
            return size = 'M';
        }else if (weight >= 152 && weight <= 171) {
            return size = 'L';
        }else if (weight >= 172 && weight <= 191) {
            return size = 'XL';
        }else if (weight >= 192 && weight <= 211) {
            return size = '2XL';
        }else if (weight >= 212 && weight <= 220) {
            return size = '3XL';
        }else if (weight < 91 || weight > 220) {
            return size = 'N/A';
        }

    } else if (height >= 5.7 && height <= 6) {
        if (weight >= 98 && weight <= 105) {
            return size = '3XS';
        }else if (weight >= 106 && weight <= 116) {
            return size = '2XS';
        }else if (weight >= 117 && weight <= 131) {
            return size = 'XS';
        }else if (weight >= 132 && weight <= 151) {
            return size = 'S';
        }else if (weight >= 152 && weight <= 171) {
            return size = 'M';
        }else if (weight >= 172 && weight <= 191) {
            return size = 'L';
        }else if (weight >= 192 && weight <= 211) {
            return size = 'XL';
        }else if (weight >= 212 && weight <= 220) {
            return size = '2XL';
        }else if (weight >= 221 && weight <= 228) {
            return size = '3XL';
        }else if (weight < 98 || weight > 228) {
            return size = 'N/A';
    } else {
        return size = 'N/A';
        }
    } else {
        return size = 'N/A';
        }
}



const App = () => {

    const [size, setSize] = useState('n/a');
    const [ft, setFt] = useState(0);
    const [inch, setInch] = useState(0);
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        const height = calcHeight(ft, inch);
        const calculatedSize = getGirdleSize(height, weight);
        setSize(calculatedSize);
      }, [ft, inch, weight]);

    const handleBtn = () =>{
        setFt(document.getElementById('pies').value);
        setInch(document.getElementById('pulgadas').value);
        setWeight(document.getElementById('peso').value);
    }

    return (
    <>
        <label htmlFor="altura">Altura (pies y pulgadas):</label>
        <select id="pies" name="pies" required>
            <option value="" disabled defaultValue="">Pies</option>
            <option value="4">4 ft</option>
            <option value="5">5 ft</option>
            <option value="6">6 ft</option>
        
        </select>
        <select id="pulgadas" name="pulgadas" required>
            <option value="" disabled defaultValue="">Pulgadas</option>
            <option value="0">0 in</option>
            <option value="1">1 in</option>
            <option value="2">2 in</option>
            <option value="3">3 in</option>
            <option value="4">4 in</option>
            <option value="5">5 in</option>
            <option value="6">6 in</option>
            <option value="7">7 in</option>
            <option value="8">8 in</option>
            <option value="9">9 in</option>
            <option value="10">10 in</option>
            <option value="11">11 in</option>
        
        </select>

        <label htmlFor="peso">Peso (libras):</label>
        <input id="peso" name="peso" type="number" placeholder="000" />
        <button className="calcBtn" onClick={handleBtn}>Calcular</button>


        <h1>{size}</h1>
    </>
    );
}

App.propTypes = {
    height: propTypes.number.isRequired,
    weight: propTypes.number.isRequired,
    selectPies: propTypes.number.isRequired,
    selectPulgadas: propTypes.number.isRequired
}

App.defaultProps = {
    height: 0,
    weight: 0,
    selectPies: 0,
    selectPulgadas: 0
}

export default App;