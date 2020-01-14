import {CFDI} from '..';

describe('Create CFDI', () => {

    test('Return this CFDI', () => {

        const useCFDI = () => {
            return 'amir';
        }
        expect(useCFDI()).toStrictEqual('amir');
    })
});
