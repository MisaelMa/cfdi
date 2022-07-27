"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroALetras = void 0;
class NumeroALetras {
    Unidades(num) {
        switch (num) {
            case 1:
                return 'UN';
            case 2:
                return 'DOS';
            case 3:
                return 'TRES';
            case 4:
                return 'CUATRO';
            case 5:
                return 'CINCO';
            case 6:
                return 'SEIS';
            case 7:
                return 'SIETE';
            case 8:
                return 'OCHO';
            case 9:
                return 'NUEVE';
        }
        return '';
    }
    Decenas(num) {
        const decena = Math.floor(num / 10);
        const unidad = num - (decena * 10);
        switch (decena) {
            case 1:
                switch (unidad) {
                    case 0:
                        return 'DIEZ';
                    case 1:
                        return 'ONCE';
                    case 2:
                        return 'DOCE';
                    case 3:
                        return 'TRECE';
                    case 4:
                        return 'CATORCE';
                    case 5:
                        return 'QUINCE';
                    default:
                        return 'DIECI' + this.Unidades(unidad);
                }
            case 2:
                switch (unidad) {
                    case 0:
                        return 'VEINTE';
                    default:
                        return 'VEINTI' + this.Unidades(unidad);
                }
            case 3:
                return this.DecenasY('TREINTA', unidad);
            case 4:
                return this.DecenasY('CUARENTA', unidad);
            case 5:
                return this.DecenasY('CINCUENTA', unidad);
            case 6:
                return this.DecenasY('SESENTA', unidad);
            case 7:
                return this.DecenasY('SETENTA', unidad);
            case 8:
                return this.DecenasY('OCHENTA', unidad);
            case 9:
                return this.DecenasY('NOVENTA', unidad);
            case 0:
                return this.Unidades(unidad);
        }
    }
    DecenasY(strSin, numUnidades) {
        if (numUnidades > 0) {
            return strSin + ' Y ' + this.Unidades(numUnidades);
        }
        return strSin;
    }
    Centenas(num) {
        const centenas = Math.floor(num / 100);
        const decenas = num - (centenas * 100);
        switch (centenas) {
            case 1:
                if (decenas > 0) {
                    return 'CIENTO ' + this.Decenas(decenas);
                }
                return 'CIEN';
            case 2:
                return 'DOSCIENTOS ' + this.Decenas(decenas);
            case 3:
                return 'TRESCIENTOS ' + this.Decenas(decenas);
            case 4:
                return 'CUATROCIENTOS ' + this.Decenas(decenas);
            case 5:
                return 'QUINIENTOS ' + this.Decenas(decenas);
            case 6:
                return 'SEISCIENTOS ' + this.Decenas(decenas);
            case 7:
                return 'SETECIENTOS ' + this.Decenas(decenas);
            case 8:
                return 'OCHOCIENTOS ' + this.Decenas(decenas);
            case 9:
                return 'NOVECIENTOS ' + this.Decenas(decenas);
        }
        return this.Decenas(decenas);
    }
    Seccion(num, divisor, strSingular, strPlural) {
        const cientos = Math.floor(num / divisor);
        const resto = num - (cientos * divisor);
        let letras = '';
        if (cientos > 0) {
            if (cientos > 1) {
                letras = this.Centenas(cientos) + ' ' + strPlural;
            }
            else {
                letras = strSingular;
            }
        }
        if (resto > 0) {
            letras += '';
        }
        return letras;
    }
    Miles(num) {
        const divisor = 1000;
        const cientos = Math.floor(num / divisor);
        const resto = num - (cientos * divisor);
        const strMiles = this.Seccion(num, divisor, 'UN MIL', 'MIL');
        const strCentenas = this.Centenas(resto);
        if (strMiles === '') {
            return strCentenas;
        }
        return strMiles + ' ' + strCentenas;
    }
    Millones(num) {
        const divisor = 1000000;
        const cientos = Math.floor(num / divisor);
        const resto = num - (cientos * divisor);
        const strMillones = this.Seccion(num, divisor, 'UN MILLON DE', 'MILLONES DE');
        const strMiles = this.Miles(resto);
        if (strMillones === '') {
            return strMiles;
        }
        return strMillones + ' ' + strMiles;
    }
    NumeroALetras(num, curr) {
        const currency = curr || {};
        const data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            letrasCentavos: '',
            letrasMonedaPlural: currency.plural || 'PESOS CHILENOS',
            letrasMonedaSingular: currency.singular || 'PESO CHILENO',
            letrasMonedaCentavoPlural: currency.centPlural || 'CHIQUI PESOS CHILENOS',
            letrasMonedaCentavoSingular: currency.centSingular || 'CHIQUI PESO CHILENO'
        };
        if (data.centavos > 0) {
            if (data.centavos === 1) {
                data.letrasCentavos = `0${data.centavos}/100 M.N`;
            }
            else {
                data.letrasCentavos = `${data.centavos}/100 M.N`;
            }
        }
        else {
            data.letrasCentavos = '00/100';
        }
        if (data.enteros === 0) {
            return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        }
        if (data.enteros === 1) {
            return this.Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
        }
        else {
            return this.Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        }
    }
    ;
}
exports.NumeroALetras = NumeroALetras;
//# sourceMappingURL=NumbersToLetter.js.map