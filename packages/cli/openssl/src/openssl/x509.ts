import {commandSync} from 'execa';
import {getOsComandBin} from '../utils'
import * as execa from "execa";
import {CliShare} from "./cliShare";

class X509 extends CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public command = 'x509';
    public opensslBin = '';

    constructor() {
        super();
        this.opensslBin = getOsComandBin();
        this.commandline = this.opensslBin + ' '+ this.command;
    }

    public help() {

    }

    public digest() {
        this.commandline += ` -digest`;
        this.commandlineArray.push(`-digest`);
        return this;
    }

    public rand(file: any) {
        this.commandline += ` -rand ${file}`;
        this.commandlineArray.push(`-rand ${file}`);
        return this;
    }

    public writerand(file: any) {
        this.commandline += ` -writerand ${file}`;
        this.commandlineArray.push(`-writerand ${file}`);
        return this;
    }

    public engine(id: string | number) {
        this.commandline += ` -engine ${id}`;
        this.commandlineArray.push(`-engine ${id}`);
        return this;
    }

    public preserve_dates() {
        // todo validate if use options days
        this.commandline += ` -preserve_dates`;
        this.commandlineArray.push(`-preserve_dates`);
        return this;
    }

    public text() {
        this.commandline += ` -text`;
        this.commandlineArray.push(`-text`);
        return this;
    }

    public ext(extensions: string) {
        this.commandline += ` -ext  ${extensions}`;
        this.commandlineArray.push(`-ext  ${extensions}`);
        return this;
    }

    public certopt(option: string) {
        this.commandline += ` -certopt  ${option}`;
        this.commandlineArray.push(`-certopt  ${option}`);
        return this;
    }

    public noout() {
        this.commandline += ` -noout`;
        this.commandlineArray.push(`-noout`);
        return this;
    }

    public pubkey() {
        this.commandline += ` -pubkey`;
        this.commandlineArray.push(`-pubkey`);
        return this;
    }

    public modulus() {
        this.commandline += ` -modulus`;
        this.commandlineArray.push(`-modulus`);
        return this;
    }


    public serial() {
        this.commandline += ` -serial`;
        this.commandlineArray.push(`-serial`);
        return this;
    }

    public subject_hash() {
        this.commandline += ` -subject_hash`;
        this.commandlineArray.push(`-subject_hash`);
        return this;
    }

    public issuer_hash() {
        this.commandline += ` -issuer_hash`;
        this.commandlineArray.push(`-issuer_hash`);
        return this;
    }

    public ocspid() {
        this.commandline += ` -ocspid`;
        this.commandlineArray.push(`-ocspid`);
        return this;
    }

    public hash() {
        this.commandline += ` -hash`;
        this.commandlineArray.push(`-hash`);
        return this;
    }

    public subject_hash_old() {
        this.commandline += ` -subject_hash_old`;
        this.commandlineArray.push(`-subject_hash_old`);
        return this;
    }

    public issuer_hash_old() {
        this.commandline += ` -issuer_hash_old`;
        this.commandlineArray.push(`-issuer_hash_old`);
        return this;
    }

    public subject() {
        this.commandline += ` -subject`;
        this.commandlineArray.push(`-subject`);
        return this;
    }

    public issuer() {
        this.commandline += ` -issuer`;
        this.commandlineArray.push(`-issuer`);
        return this;
    }

    public nameopt(option: any) {
        this.commandline += ` -nameopt ${option}`;
        this.commandlineArray.push(`-nameopt ${option}`);
        return this;
    }

    public email() {
        this.commandline += ` -email`;
        this.commandlineArray.push(`-email`);
        return this;
    }

    public ocsp_uri() {
        this.commandline += ` -ocsp_uri`;
        this.commandlineArray.push(`-ocsp_uri`);
        return this;
    }

    public startdate() {
        this.commandline += ` -startdate`;
        this.commandlineArray.push(`-startdate`);
        return this;
    }

    public enddate() {
        this.commandline += ` -enddate`;
        this.commandlineArray.push(`-enddate`);
        return this;
    }

    public dates() {
        this.commandline += ` -dates`;
        this.commandlineArray.push(`-dates`);
        return this;
    }

    public checkend(num: string | number) {
        this.commandline += ` -checkend ${num}`;
        this.commandlineArray.push(`-checkend ${num}`);
        return this;
    }

    public fingerprint() {
        this.commandline += ` -fingerprint`;
        this.commandlineArray.push(`-fingerprint`);
        return this;
    }

    public C() {
        this.commandline += ` -C`;
        this.commandlineArray.push(`-C`);
        return this;
    }

    public trustout() {
        this.commandline += ` -trustout`;
        this.commandlineArray.push(`-trustout`);
        return this;
    }


    public setalias(arg: string) {
        this.commandline += ` -setalias ${arg}`;
        this.commandlineArray.push(`-setalias ${arg}`);
        return this;
    }


    public alias() {
        this.commandline += ` -alias`;
        this.commandlineArray.push(`-alias`);
        return this;
    }

    public clrtrust() {
        this.commandline += ` -clrtrust`;
        this.commandlineArray.push(`-clrtrust`);
        return this;
    }

    public clrreject() {
        this.commandline += ` -clrreject`;
        this.commandlineArray.push(`-clrreject`);
        return this;
    }

    public addtrust(arg: string) {
        this.commandline += ` -addtrust ${arg}`;
        this.commandlineArray.push(`-addtrust ${arg}`);
        return this;
    }

    public addreject(arg: string) {
        this.commandline += ` -addreject ${arg}`;
        this.commandlineArray.push(`-addreject ${arg}`);
        return this;
    }

    public purpose() {
        this.commandline += ` -purpose`;
        this.commandlineArray.push(`-purpose`);
        return this;
    }

    public sigopt(arg: string) {
        // todo
        return this;
    }

    public clrext() {
        this.commandline += ` -clrext`;
        this.commandlineArray.push(`-clrext`);
        return this;
    }

    public keyform(options: 'DER' | 'PEM' | 'ENGINE') {
        this.commandline += ` -keyform ${options}`;
        this.commandlineArray.push(`-keyform ${options}`);
        return this;
    }

    public days(arg: string) {
        this.commandline += ` -days ${arg}`;
        this.commandlineArray.push(`-days ${arg}`);
        return this;
    }

    public x509toreq() {
        this.commandline += ` -x509toreq`;
        this.commandlineArray.push(`-x509toreq`);
        return this;
    }

    public req() {
        this.commandline += ` -req`;
        this.commandlineArray.push(`-req`);
        return this;
    }

    public set_serial(n: string) {
        this.commandline += ` -set_serial ${n}`;
        this.commandlineArray.push(`-set_serial ${n}`);
        return this;
    }

    public CA(filename: string) {
        this.commandline += ` -CA ${filename}`;
        this.commandlineArray.push(`-CA ${filename}`);
        return this;
    }


    public CAkey(filename: string) {
        this.commandline += ` -CAkey ${filename}`;
        this.commandlineArray.push(`-CAkey ${filename}`);
        return this;
    }

    public CAserial(filename: string) {
        this.commandline += ` -CAserial ${filename}`;
        this.commandlineArray.push(`-CAserial ${filename}`);
        return this;
    }

    public CAcreateserial() {
        this.commandline += ` -CAcreateserial`;
        this.commandlineArray.push(`-CAcreateserial`);
        return this;
    }

    public extfile(filename: string) {
        this.commandline += ` -extfile ${filename}`;
        this.commandlineArray.push(`-extfile ${filename}`);
        return this;
    }

    public extensions(section: string) {
        this.commandline += ` -extensions ${section}`;
        this.commandlineArray.push(`-extensions ${section}`);
        return this;
    }

    public force_pubkey(key: string) {
        this.commandline += ` -force_pubkey ${key}`;
        this.commandlineArray.push(`-force_pubkey ${key}`);
        return this;
    }

}

export const x509 = new X509();
