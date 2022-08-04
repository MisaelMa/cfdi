import { TDocumentDefinitions } from "pdfmake/interfaces";
import { XmlCdfi } from "@signati/core";
import { XmlToJson } from "@cfdi/utils";
import { logo } from '@cfdi/utils/src/Logo';
import { createPdf, TCreatedPdf } from "pdfmake/build/pdfmake";


export class B222 {
  private xml: XmlCdfi;
  private docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [20, 25, 20, 25],
    content: [




      {


        style: 'tableExample',
        table: {

          widths: [545],
          body: [
            [
              {
                border: [false, false, false, false],
                text: [

                  {
                    alignment: 'center',
                    text: 'Nombre de la Empresa o Razon social\n',
                    style: {
                      bold: true,
                      fontSize: 13,
                    }
                  },
                  {
                    alignment: 'center',
                    text: 'MAPA234564A3',
                    style: {
                      bold: true,
                      fontSize: 10,
                    }
                  },


                ]
              }
            ]
          ]
        }
      },
      {
        columns: [

          {

            text: [

              {
                text: [
                  {
                    text: 'FACTURA\n ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                    }
                  },

                ]
              },
              {
                text: [
                  {
                    text: 'Domicilio y lugar de expedicion:\n',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },
                  { text: ' av oquideas entre ruta5\n', fontSize: 10, }
                ]
              },


            ]
          },
          {
            width: 100,
            image: logo,
            height: 100,
            alignment: 'left'
          },
          {
            width: 50,
            text: ''
          },
        ]
      },
      {
        columns: [

          {

            text: [

              {
                text: [
                  {
                    text: 'lugar de expedicion: ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10
                    }
                  },
                  { text: ' av oquideas entre ruta5\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Datos del Receptro\n',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 11,
                    }
                  },

                ]
              },
              {
                text: [
                  {
                    text: 'Cliente: ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10
                    }
                  },
                  { text: ' jose alberto\n\n', fontSize: 10, }
                ]
              },

              {
                text: [
                  {
                    text: 'RFC: ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10
                    }
                  },
                  { text: ' PAPA90820082A\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Uso CFDI:',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10
                    }
                  },
                  { text: ' G03 Gastos en general\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Domicilio:',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10
                    }
                  },
                  { text: '28 sn ,col. montes otoch ncancun,qroo\n\n ', fontSize: 10, }
                ]
              },


              {

                text: [

                  {
                    text: [
                      {
                        alignment: 'left',
                        text: 'MONEDA: ',
                        style: {
                          bold: true,
                          fontSize: 10
                        }
                      },
                      { text: ' MXN,      ', fontSize: 10 }
                    ]
                  },
                ]
              },
              {
                text: [
                  {
                    alignment: 'right',
                    text: 'TIPO DE CAMBIO:',
                    style: {
                      bold: true,
                      fontSize: 10

                    }
                  },
                  { text: '0.0000', fontSize: 10 }
                ]
              },

              {
                text: [
                  {
                    text: '\n\nTIPO DE COMPROBANTE:',
                    style: {
                      bold: true,
                      fontSize: 10

                    }
                  },
                  { text: ' INGRESO', fontSize: 10 }
                ]
              },




            ]
          },

          {
            width: 50,
            text: ''
          },
          {

            text: [

              {
                text: [
                  {
                    text: '\nComprobante Fiscal Digital Por Internet\n ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10
                    }
                  },

                ]
              },
              {
                text: [
                  {
                    text: 'Folio Fiscal',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },
                  { text: 'xxxxxxxxxxxxxxx\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Numero de Comprobante',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },
                  { text: 'xxxxxxx\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Forma de Pago:',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },
                  { text: 'Por Defionir\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Fecha de Comprobante: ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },
                  { text: '07/07/2020\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Fecha y hora  de Certificacion: ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },
                  { text: '07/07/2020  13:00:01\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Metodo de Pago\n',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },

                ]
              },
              {
                text: [
                  {
                    text: 'Pago de una sola exihbicion\n',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },

                ]
              },
              {
                text: [
                  {
                    text: 'Regimen Fiscal: ',
                    style: {
                      bold: true,
                      color: '#a76d09',
                      fontSize: 10,
                    }
                  },
                  { text: '601 General  de ley de personas morales \n', fontSize: 10, }
                ]
              },

            ]
          },

        ]
      },
      {
        width: 50,
        text: '\n'
      },
      {
        style: 'tableExample',
        table: {
          widths: [50, 40, 173, 120, 60, 60],

          body: [

            [{ text: 'cantidad', border: [false, true, false, true] }, { text: 'Unidad', style: 'tableHeader', border: [false, true, false, true] }, { text: 'descricion', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Clave servicio/producto', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Precio Unitario', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Importe', style: 'tableHeader', border: [false, true, false, true] }],
            [{ text: '1', border: [false, true, false, true] }, { text: 'lt', style: 'tableHeader', border: [false, true, false, true] }, { text: 'juete de niña\n\n\n\nxxxxxxxx', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Clave servicio/producto', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Precio Unitario', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Importe', style: 'tableHeader', border: [false, true, false, true] }],
          ]
        },


      },
      {
        style: 'tableExample',

        table: {
          widths: [412, 129],

          body: [
            [
              {
                text: 'Cantidad con letras:\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',

              },
              {
                style: 'tableExample',
                table: {
                  headerRows: 1,
                  alignment: 'center',
                  body: [
                    [{ text: 'Subtotal', alignment: 'center', }, { text: 'FACTURA', alignment: 'center' }],
                    [{ text: 'Descuento', alignment: 'center' }, { text: 'F3EE54R', alignment: 'center' }],
                    [{ text: 'I.V.A 16%', alignment: 'center' }, { text: 'F3EE54R', alignment: 'center' }],
                    [{ text: 'Total', alignment: 'center' }, { text: 'F3EE54R', alignment: 'center' }],

                  ]
                },
                layout: 'lightHorizontalLines'


              }],

          ]
        },
        layout: 'noBorders'

      },
      {
        text: [
          {
            text: '*Este documento es una representacion impresa de un CFDI\n ',
            style: {
              bold: true,
              color: '#a76d09',
              fontSize: 10,
            }
          },

        ]
      },
      {
        columns: [

          {
            text: [
              {
                text: 'Numero de serie del Certificado de sello digital:\n ',
                style: {
                  bold: true,
                  color: '#a76d09',
                  fontSize: 10,
                }
              },
              { text: 'xxxxxxxxxxxxxxxxxxx', fontSize: 10, }
            ]
          },
          {
            text: [
              {
                text: 'Numero de serie del Certificado de sello digital:\n',
                style: {
                  bold: true,
                  color: '#a76d09',
                  fontSize: 10,
                }
              },
              { text: 'xxxxxxxxxxxxxxxxxxxxx\n', fontSize: 10, }
            ]
          },
        ]
      },
      {
        alignment: 'justify',

        columns: [

          {
            width: 430,
            fontSize: 9,
            table: {
              widths: [410, 200],
              headerRows: 1,
              body: [
                [{
                  text: 'SELLO DIGITAL DEL EMISOR',
                  color: '#0941a7',
                  alignment: 'justify',
                  style: 'tableHeader',
                  border: [false, false, false, false]
                }],
                ['aYjYNUhTvNVosLnPJsV5h/lAW/HSs45Qzhl2W5V2DPqrdoFfp9mH7wUcS5v3jP6Oql4Y7ncYOcLqakqfGeclJJP/6T1XmbcvPPdBq1DGWh6DaisHS2QCMOW3MGuv8Hc/0j7JwYbXFpTKKM3cudwTmzh76MUoqnssDUfuFIVJ8=`,'],
                [{
                  text: 'SELLO SAT',
                  color: '#0941a7',
                  style: 'tableHeader',
                  border: [false, false, false, false]
                }],
                ['GlU7AYil3GqVeUD9oJvqVKc2Uq/K2R7lkc2m6WPuhddjYvWm0foFfMVwzn2KfS7o6KZIddDXdAglhknZsz3ub3X0/aPW4DSwvDYXOF2yCCqd64vbt5MfWqpPqN2zmjzJVFe5ntIPQ21jveXAjR44pJIHNG3rUUUdhVnag6NFTqviaAV75z6OywesoMQCFcsoEjvKozzKGpT7Imuoa94aGIhj0TP5m1hk4OnROOcEBPo11mPf4elDKBDzk+iuCw4wiV/GHaeL0D4zBcVOL/Igz12MKRmYtNdmBfSCv3TI7bJ7qQUV1RckO2Rj1CpFrpa7xr/Vw6lEwitpkCwQ00SKBg==',],
                [{
                  text: 'CADENA ORIGINAL DEL COMPLEMENTO DE CERTIFICACION DIGITAL DEL SAT',
                  color: '#0941a7',
                  style: 'tableHeader',
                  border: [false, false, false, false]
                }],
                ['||1.1|5D178E7E-C81C-11E8-89A8-237CD11664D5|2018-10-04T16:27:58|FMO1007168C6|eaYjYNUhTvNVosLnPJsV5h/xlAW/HSs45Qzhl2W5V2DPqrdoFfp9mH7wUcS5v3jP6Oql4Y7ncYOcLqakqfGeclJJP/6T1XmbcvPPdBq1DGWh6DaisHS2QCMOW3MG\n' +
                  'uv8Hc/0j7JwYbXFpTKKM3cudwTmzh76MUoqnssDUfuFIVJ8=|00001000000401477845||',],
              ]

            },
            layout: 'noBorders'
          },
          {
            stack: [
              {
                image: logo,
                width: 100,
                height: 100
              },

            ]
          },

        ]
      },



















    ],
  }

  constructor(xml: string) {
    this.xml = XmlToJson(xml)
  }

  public async getDocument(): Promise<TCreatedPdf> {
    return createPdf(this.docDefinition);
  }
}
