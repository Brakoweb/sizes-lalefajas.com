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

export function App(){
    return (
    <>
        <input type="text" placeholder="Altura" />
        <input type="text" placeholder="Peso" />
        <h1>{getGirdleSize(6,220)}</h1>
    </>
    );
}