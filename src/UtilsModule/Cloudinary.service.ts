import { Injectable } from '@nestjs/common';
import cloudinary from 'src/config/Cloudinary.config';
import { createReadStream } from 'streamifier';
import { RandomService } from './Random.service';

@Injectable()
export class CloudinaryService {
  private optionsCloud: object;

  constructor(private readonly randomService: RandomService) {
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
          public_id: this.randomService.randomString(10),
        },
        function (error: any, result: any) {
          resolve(result);
          if (error) {
            reject(error);
          }
        },
      );

      createReadStream(fileBuffer).pipe(cld_upload_stream);
    });
  }
}
