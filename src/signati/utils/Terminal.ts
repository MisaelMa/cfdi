import {spawn, exec} from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const sudo = inpathSync('sudo');

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

export async function terminalSudo(bin: string, options: string[], withResult: boolean): Promise<string> {
    return await new Promise((resolve, reject) => {
        const opensslspw = spawn('sudo', options);
        const outResult: any[] = [];
        let outLength = 0;
        const errResult: any[] = [];
        let errLength = 0;
        opensslspw.stdout.on('data', data => {
            outLength += data.length;
            // console.log(data);
            outResult.push(data);
        });
        let prompts = 0;
        opensslspw.stderr.on('data', data => {
            errLength += data.length;
            // console.log(data);
            errResult.push(data);
            data.toString().trim().split('\n').forEach((line: any) => {
                if (line === prompt) {
                    if (++prompts > 1) {
                        console.log(true, {code: 1, msg: 'Password is invalid'}, outResult);
                        opensslspw.stdin.write('\n\n\n\n');
                    } else {
                        opensslspw.stdin.write('marin' + '\n');
                    }
                }
            });
        });

        opensslspw.on('error', err => {
            // console.log('error:' +err.message)
            reject(err.message);
        });

        if (withResult) {

            opensslspw.on('close', code => {
                const stdout: Buffer = Buffer.concat(outResult, outLength);
                const stderr: Buffer = Buffer.concat(errResult, errLength);

                if (stdout.toString('utf8') !== '') {
                    resolve(stdout.toString('utf8'));
                }
                // console.log('clores:' +stderr.toString('utf8'))
                reject(stderr.toString('utf8'));
            });
        }
    });
}

function inpathSync(target: any, dirs?: any) {
    var i, l, pos;

    if (!dirs) {
        // @ts-ignore
        dirs = process.env['PATH'].split(':');
    }

    for (i = 0, l = dirs.length; i < l; i++) {
        pos = path.join(dirs[i], target)
        if (fs.existsSync(pos)) {
            return pos;
        }
    }

    return null;
}
