import { pkcs8 } from '@clir/openssl/src';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
/**
 *
 */
@Controller('openssl')
export class OpensslController {
  /**
   *index
   *
   * @param req
   * Request
   * @param res
   * Response
   */
  @Get('/')
  index(@Res() res: Response) {
    const cli = pkcs8.inform('DER').in('file').outform('PEM').passin(`pass:${'1234567a'}`);
    res.json({
      cli: cli.cli(),
    });
  }
}
