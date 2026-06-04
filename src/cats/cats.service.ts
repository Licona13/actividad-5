import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';

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

    //obtener cat por id
    getCat(id: number): Cat {
        const cat = this.cats.find((item) => item.id === id);

        if (!cat) {
            throw new Error('Gato no encontrado');
        }

        return cat;
    }

    //Crear elemento cat
    createCat(CreateCatDto: CreateCatDto): Cat {
        const newCat: Cat = {
            ...CreateCatDto,
            id: Date.now()
        }

        this.cats.push(newCat)

        return newCat;
    }

    //Actualizar elemento cat
    updateCat(id: number, UpdateCatDto: UpdateCatDto): Cat {
        const catIndex = this.cats.findIndex(
            (item) => item.id === id)

        if (catIndex === -1) {
            throw new Error('Gato no encontrado');
        }

        const updatedCat: Cat = {
            ...this.cats[catIndex],
            ...UpdateCatDto,
            id: id,
        }
        //Reemplazar cat
        this.cats[catIndex] = updatedCat;
        console.log(id, UpdateCatDto);

        return updatedCat;

    }
}
