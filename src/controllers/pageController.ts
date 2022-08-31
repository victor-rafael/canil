import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      titulo: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list
  })
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog');

  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      titulo: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    list
  })
}

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat');

  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      titulo: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list
  })
}

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish');

  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      titulo: 'Peixes',
      background: 'banner_fish.jpg'
    },
    list
  })
}