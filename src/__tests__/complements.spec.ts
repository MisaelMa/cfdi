import {Iedu, Ine, TipoProceso} from '..';

describe('Create CFDI', () => {

    test('Return complement for iedu', () => {
        const iedu = () => {
            const ieduOBj = new Iedu({
                version: '1.0',
                autRVOE: '201587PRIM',
                CURP: 'MACA961017HQRRHM06',
                nivelEducativo: 'Primaria',
                nombreAlumno: 'AMIR MISAEL MARIN COH',
                rfcPago: 'MACA961017759',
            });
            return ieduOBj.iued;
        };
        expect(iedu()).toStrictEqual({
            'iedu:instEducativas': {
                '_attributes': {
                    'CURP': 'MACA961017HQRRHM06',
                    'autRVOE': '201587PRIM',
                    'nivelEducativo': 'Primaria',
                    'nombreAlumno': 'AMIR MISAEL MARIN COH',
                    'rfcPago': 'MACA961017759',
                    'version': '1.0'
                }
            }
        });
    })
    test('Return complement for Ine', () => {

        const ine = () => {
            const ineObj = new Ine({
                Version: '1.0',
                TipoProceso: 'Ordinario',
                IdContabilidad: '9',
                TipoComite: 'Ejecutivo Estatal',
            });
            ineObj.Entidad({Ambito: 'Federal', ClaveEntidad: 'ROO'})
            ineObj.Contabilidad({IdContabilidad: '9'})
            return ineObj.getComplement().complement;
        };
        expect(ine()).toStrictEqual({
                '_attributes': {
                    'IdContabilidad': '9',
                    'TipoComite': 'Ejecutivo Estatal',
                    'TipoProceso': 'Ordinario',
                    'Version': '1.0'
                },
                'ine:Entidad': {
                    '_attributes': {
                        'Ambito': 'Federal',
                        'ClaveEntidad': 'ROO'
                    },
                    'ine:Contabilidad': {
                        '_attributes': {
                            'IdContabilidad': '9'
                        }
                    }
                }
            }
        );
    })
});
