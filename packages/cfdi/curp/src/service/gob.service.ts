import axios from 'axios';
import { birthday, birthdayFormatFromRenapo } from '../common/constants';
import { Mexican } from '../types/Mexican';
import { captchaSolver } from '../utils/recaptach';
import { api } from './api';
const genderISOConverter = new Map([
  ['HOMBRE', '1'],
  ['MUJER', '2'],
]);
export const ensure = (code: string) => {
  switch (code) {
    case '01':
      return;
    case '02':
    case '03':
    case '04':
    case '05':
    case '07':
      throw new Error('Invalid 07');
    case '11':
    case '13':
      throw new Error('');
    case '180001':
    case '190001':
      return;
    default:
      throw new Error('');
  }
}

const parseResponse = (
  renapoResponse: { registros: any[] },
  curp: string
): Mexican => {
  const register = renapoResponse.registros[0];
  return {
    curp,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    fatherName: register.primerApellido,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    motherName: register.segundoApellido,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    name: register.nombres,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    gender: genderISOConverter.get(register.sexo) ?? '',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    birthday: register.fechaNacimiento.replace(
      birthdayFormatFromRenapo,
      birthday
    ),
    // eslint-disable-next-line @typescript-eslint/await-thenable
    birthState: "2", // await curp.getIsoState(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    statusCurp: register.statusCurp,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    nationality: register.nacionalidad,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    probatoryDocument: register.docProbatorio,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    pdf: register.parametro,
    probatoryDocumentData: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...register.datosDocProbatorio,
    },
  };
}

const constulta = async () => {
  const captchaSolution = await captchaSolver(
    '6LdJssgUAAAAAKkVr-Aj-xP5QQzclPeGZmhRwXeY',
    'https://www.gob.mx/curp'
  );

  api.post('renapoCURP/consulta', {
    curp: curp,
    tipoBusqueda: 'curp',
    ip: '127.0.0.1',
    response: captchaSolution,
  }).then(res => res.data);
}
export const findByCurp = async (curp: string): Promise<Mexican | { error: string } | null> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  ensure(renapoResponse.codigo);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (renapoResponse.registros == undefined) {
    return {
      curp: curp,
      error: 'CURP not found',
    };
  }
  return parseResponse(renapoResponse, curp);
}
export const findByData = () => { }
