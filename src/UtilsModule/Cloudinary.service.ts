import { Injectable } from '@nestjs/common';
import cloudinary from 'src/config/Cloudinary.config';
import { createReadStream } from 'streamifier';

@Injectable()
export class CloudinaryService {
  private optionsCloud: object;

  constructor() {
    this.optionsCloud = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder: 'nest-blog',
    };
  }

  uploadFileBuffer(fileBuffer: any, options?: object): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const cld_upload_stream = cloudinary.uploader.upload_stream(
        {
          ...this.optionsCloud,
          ...options,
        },
        function (error: any, result: any) {
          resolve(result);
        },
      );

      createReadStream(fileBuffer).pipe(cld_upload_stream);
    });
  }
}
