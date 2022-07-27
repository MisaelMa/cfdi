import {cer, key} from '../index'
import {pkcs8} from '../openssl/pkcs8';
import {x509} from '../openssl/x509';

describe('Create x509', () => {
    test('Return this text .cer', () => {
        const useX509 = async () => {
            const keyCertificates = pkcs8.inform('DER')
                .in('src/certificados/LAN7008173R5.key')
                .outform('PEM').passin('pass:12345678a').run();
            console.log(keyCertificates)
        }
        expect(useX509());
    })
});
