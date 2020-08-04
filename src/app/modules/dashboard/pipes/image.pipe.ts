import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from 'src/app/config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, collection: string = 'products'): string {

    let url = URL_SERVICE + '/api/file';

    if (!image) {
      return `${url}/products/noimage`;
    } else {
      switch (collection) {
        case 'products':
          url += `/${collection}/${image}`;
          break;

        default:
          console.log('El tipo de imagen debe ser : products')
          url += '/products/' + image;
          break;
      }

    }

    return url;
  }

}
