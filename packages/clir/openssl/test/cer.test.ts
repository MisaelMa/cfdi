import { describe, expect, it, test } from 'vitest';

describe('blah', () => {
  it('works', () => {
    expect(2).toEqual(2);
  });
});
/* import { describe, expect, it, test } from 'vitest';

import {cer} from '../src/openssl/cer.class';

describe('Create Cer', () => {

    test('Return this startDate .cer', () => {
        const useCer = async () => {
            const date = await cer.date('src/certificados/LAN7008173R5.cer');
            console.log(date)
        }
        expect(useCer());
    })


});
 */