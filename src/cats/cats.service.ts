import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {

    private cats: Cat[] = [
        { id: 1, name: 'Boris', age: 3, weight: 4, color: 'blanco' },
        { id: 2, name: 'Cristobal', age: 5, weight: 3.5, color: 'negro' },
        { id: 3, name: 'Bicho', age: 1, weight: 2, color: 'naranja' },
    ];

    findAll(): Cat[] {
        return this.cats;
    }
}
