import {x509} from '../openssl/x509';

describe('Create x509', () => {

    test('Return this startDate .cer', () => {
        const useX509 = async () => {
            const startDate = x509.inform('DER')
                    .in('src/certificados/LAN7008173R5.cer').noout().startdate().run();
            console.log(startDate)
        }
        expect(useX509());
    })

    test('Return this endDate .cer', () => {
        const useX509 = async () => {
            const endDate = x509.inform('DER')
                    .in('src/certificados/LAN7008173R5.cer').noout().enddate().run();
            console.log(endDate)
        }
        expect(useX509());
    })
    test('Return this subject .cer', () => {
        const useX509 = async () => {
            const subject = x509.inform('DER')
                .in('src/certificados/00001000000503357225.cer')
                .noout().subject().run()
            console.log(subject)
        }
        expect(useX509());
    })

    test('Return this issuer .cer', () => {
        const useX509 = async () => {
            const issuer = x509.inform('DER')
                .in('src/certificados/00001000000503357225.cer')
                .noout().issuer().run()
            console.log(issuer)
        }
        expect(useX509());
    })
    test('Return this pem .cer', () => {
        const useX509 = async () => {
            const pem = x509.inform('DER')
                .in('src/certificados/maca961017759.cer')
                .outform('PEM').run();
            console.log(pem)
        }
        expect(useX509());
    })

});
