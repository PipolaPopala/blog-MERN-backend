import { body } from 'express-validator'

export const loginValidation = [
  body('email', 'Некорректный email').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
]

export const registerValidation = [
  body('email', 'Некорректный email').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите полное имя').isLength({ min: 3 }),
  body('avatarUrl', 'Некорректная ссылка на аватар').optional().isURL(),
]

export const postCreateValidation = [
  body('title', 'Название поста не может быть пустым').isLength({ min: 3 }).isString(),
  body('text', 'Текст поста не может быть пустым').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тегов (укажите массив)').optional().isString(),
  body('imageUrl', 'Некорректная ссылка на изображение').optional().isString()
]
