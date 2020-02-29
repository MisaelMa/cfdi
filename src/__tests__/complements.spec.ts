import {Iedu, Ine, TipoProceso} from '..';

describe('Create CFDI', () => {

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
