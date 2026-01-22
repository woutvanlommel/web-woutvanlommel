// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

// Interface voor strict typing (geen 'any'!)
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // We gebruiken async/await voor leesbaarheid
  async sendContactEmail(data: ContactFormData): Promise<EmailJSResponseStatus> {
    try {
      // De 'send' methode van EmailJS v4
      // Let op: De keys in het object (to_name, from_name, etc.)
      // moeten overeenkomen met de variabelen in je EmailJS Template Dashboard!
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Wout', // Of dynamisch als je dat wilt
      };

      const response = await emailjs.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        templateParams,
        environment.emailJs.publicKey,
      );

      return response;
    } catch (error) {
      // Error logging of integratie met Sentry zou hier kunnen
      console.error('EmailJS Error:', error);
      throw error; // Gooi de fout terug zodat de component UI kan updaten
    }
  }
}
