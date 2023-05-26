// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var adress = 'Ukraine,Kharkiv'
var header = {
  adress,
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
}
var footer = {
  social: {
    email: {
      href: 'mailto:dmytro@mail.com',
      text: 'dmytro@mail.com',
    },
    phone: {
      href: 'tel:+380670000123',
      text: '+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    title: 'Resume',
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: { title: 'Resume | Summary' },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
          experience in development.Whenever I start to
          work on a new project I learn the domain and try
          to understand the idea of the project.Good team
          player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from
          different platforms ( odds ) and sport statistics
          ( tournament position, goals etc), analyzing by
          simple mathematics models and preparing
          probability for such events like: money line -
          first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: { title: 'Resume | Skills' },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 0,
          isTop: false,
        },
        {
          name: 'VS-code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 10,
        },
        {
          name: 'Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 10,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Singing',
          isMain: false,
        },
        {
          name: 'Riding a bike',
          isMain: true,
        },
        {
          name: 'Travelling',
          isMain: true,
        },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: { title: 'Resume | Education' },
    header,
    main: {
      educations: [
        {
          name: 'school 17',
          isEnd: true,
        },
        {
          name: 'Kharkiv National University of Karazina',
          isEnd: true,
        },
        {
          name: 'IT - BRAINS course',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'ggg',
          id: 123,
        },
        {
          name: 'rrr',
          id: 456,
        },
        {
          name: 'kkk',
          id: 789,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: { title: 'Resume | Work' },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT BRAINS',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about: 'Something about me',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'Beautifull',
                },
                {
                  name: 'Excellent',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
