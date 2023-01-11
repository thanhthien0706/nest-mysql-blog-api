import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseHttpService {
  customResponeHttp(statusData: boolean, message: string, data: any) {
    return {
      status: statusData || true,
      message: message || '',
      data: data || null,
    };
  }
}
