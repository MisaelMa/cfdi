import { spawn } from 'child_process';

export async function terminal(bin: string, options: string[]): Promise<string> {
  return await new Promise((resolve, reject) => {
    const opensslspw = spawn(bin, options);
    const outResult: any[] = [];
    let outLength = 0;
    const errResult: any[] = [];
    let errLength = 0;
    opensslspw.stdout.on('data', data => {
      outLength += data.length;
      // console.log(data);
      outResult.push(data);
    });

    opensslspw.stderr.on('data', data => {
      errLength += data.length;
      // console.log(data);
      errResult.push(data);
    });

    opensslspw.on('error', err => {
      // console.log('error:' +err.message)
      reject(err.message);
    });

    opensslspw.on('close', code => {
      const stdout: Buffer = Buffer.concat(outResult, outLength);
      const stderr: Buffer = Buffer.concat(errResult, errLength);

      if (stdout.toString('utf8') !== '') {
        resolve(stdout.toString('utf8'));
      }
      // console.log('clores:' +stderr.toString('utf8'))
      reject(stderr.toString('utf8'));
    });
  });
}
