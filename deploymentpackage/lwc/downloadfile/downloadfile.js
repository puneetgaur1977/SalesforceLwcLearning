import { LightningElement } from 'lwc';
import RECEIPT_FILE from '@salesforce/contentAssetUrl/PayTMPaymentReceiptpdf';
export default class Downloadfile extends LightningElement {
    file = RECEIPT_FILE;
}