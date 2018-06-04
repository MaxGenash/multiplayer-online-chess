export default {
  i18n: {
    ua: {
      login: {
        title: 'Вхід',
        username: 'Логін',
        password: 'Пароль',
        authenticate: 'Увійти',
        createaccount: 'Зареєструватися'
      }
    },
    ru: {
      login: {
        title: 'Вход',
        username: 'Логин',
        password: 'Пароль',
        authenticate: 'Войти',
        createaccount: 'Зарегистрироваться',
        errors: {
          user_not_found: 'Пользователь не найден',
          passw_incorrect: 'Неправильный пароль',
          await: '...'
        }
      },
      register: {
        title: 'Регистрация игрока',
        username: 'Логин',
        password: 'Пароль',
        name: 'Имя',
        email: 'Email',
        firstName: 'Имя',
        lastName: 'Фамилия',
        insert: 'Зарегистрироваться',
        cancel: 'Отмена',
        mascul: 'Мужчина',
        femen: 'Женщина',
        age: 'Возраст',
        passwordRepit: 'Повторите пароль',
        errors: {
          user_not_found: 'Пользователь не найден',
          passw_incorrect: 'Неправильный пароль',
          await: '...'
        }
      },
      account: {
        personalData: {
          title: 'Профиль игрока',
          name: 'Имя',
          username: 'Логин',
          email: 'Email',
          created: 'Создан',
          edit: 'Изменить'
        },
        activity: {
          title: 'Активность',
          vsPC: 'Статистика против компьютера',
          vsOtherUser: 'Статистика против игроков',
          wins: 'Победы',
          draws: 'Ничьи',
          losses: 'Проигрыши',
          whites: 'Белые',
          blacks: 'Черные'
        }
      },
      home: {
        title: 'Главная',
        online: 'Игроки в сети',
        played: 'Публичные матчи',
        upload: 'Файл',
        invite: 'Пригласить',
        send: 'Отправить',
        inviteSend: 'Приглашение отправлено',
        createPart: {
          title: 'Создать матч',
          time: 'Минуты',
          type: 'Тип матча',
          create: 'Создать',
          cancel: 'Отмена',
          black: 'Черные',
          white: 'Белые',
          timePersonal: 'Ввести другое время',
          fieldTime: 'Время',
          public: 'публичный',
          private: 'приватный'
        },
        uploadMens: {
          success: 'Файлы загружены',
          path_not_permit: 'Такой тип файла не поддерживается',
          size_not_permit: 'Файл слишком большой'
        }
      },
      invites: {
        title: 'Приглашения',
        numIn: 'Приглашения',
        vspc: 'Играть против компьютера',
        initgame: 'Игра запускается'
      },
      visor: {
        title: 'История',
        found: 'Найдено',
        whiteName: 'Имя белых',
        blackName: 'Имя черных',
        result: 'Итог',
        wins: 'Побеждает',
        by: ' - '
      },
      puzzles: {
        title: 'Головоломки',
        create: {
          title: 'Создать головоломку',
          description: 'Придумайте свою головоломку',
          create: 'Создать',
          delete: 'Удалить',
          edit: 'Редактировать',
          cancel: 'Отмена',
          add: 'Добавление головоломки',
          fenInit: 'Начальная позиция',
          fenFinish: 'Конечная позиция '
        },
        list: 'Список',
        types: {
          MateIn1: {
            name: 'Мат в 1 ход',
            descript: 'Белые должны выиграть в 1 ход'
          },
          MateIn2: {
            name: 'Мат в 2 хода',
            descript: 'Белые должны выиграть в 2 хода'
          },
          MateIn3: {
            name: 'Мат в 3 хода',
            descript: 'Белые должны выиграть в 3 хода'
          },
          FindFork: {
            name: 'Найти разветвление',
            descript: 'Найдите ход белыми, который приводит к развилке'
          },
          TakePiece: {
            name: 'Забрать фигуру',
            descript: 'Одна из черных фигур не защищена. Заберите ее'
          }
        },
        attention: 'Внимание',
        attMen: 'Выберите головоломку',
        createBy: 'Автор',
        date: 'Дата',
        played: 'Ходят',
        movs: 'Осталось ходов',
        wins: 'Выигрывает',
        lost: 'Вы проиграли',
        reintent: 'Попробовать еще',
        intents: 'Ходы',
        color: {
          black: 'черные',
          white: 'белые'
        }
      },
      game: {
        title: 'Игра',
        chat: 'Игровой чат',
        chatConver: 'Общаться с ',
        chatConverTooltip: 'Выберите игрока Online',
        rend: 'Сдаться',
        pieces: 'Сменить фигуры',
        board: 'Сменить доску',
        invert: 'Развернуть доску',
        text: 'Сообщение',
        descriptiontext: 'Отправить сообщение',
        turnColor: 'Ходят ',
        wins: 'Побеждают',
        incheck: 'шах',
        motives: {
          time: 'по времени',
          rendi: 'по капитуляции',
          login: 'Вход'
        }
      },
      user: {
        title: 'Пользователь',
        logout: 'Выйти',
        login: 'Войти'
      }

    },
    en: {
      login: {
        title: 'user Login',
        username: 'Username',
        password: 'Password',
        authenticate: 'Login',
        createaccount: 'Create account',
        errors: {
          user_not_found: 'user not found',
          passw_incorrect: 'Incorrect password',
          await: '...'
        }
      },
      register: {
        title: 'Register user',
        username: 'Username',
        password: 'Password',
        name: 'Name',
        email: 'Email',
        firstName: 'Surname',
        lastName: 'Second surname',
        insert: 'Insert',
        cancel: 'Cancel',
        mascul: 'Male',
        femen: 'Female',
        age: 'Age',
        passwordRepit: 'Repeat Password',
        errors: {
          user_not_found: 'User not found',
          passw_incorrect: 'Incorrect password',
          await: '...'
        }
      },
      account: {
        personalData: {
          title: 'Personal data',
          name: 'Name',
          username: 'Username',
          email: 'Email',
          created: 'Created',
          edit: 'Edit account'
        },
        activity: {
          title: 'Activity',
          vsPC: 'Stats against CPU',
          vsOtherUser: '2 Player Stats',
          wins: 'Wins',
          draws: 'Draws',
          losses: 'Losses',
          whites: 'Whites',
          blacks: 'Blacks'
        }
      },
      home: {
        title: 'Home',
        online: 'Online',
        played: 'Played',
        upload: 'File',
        invite: 'Invite',
        send: 'Send',
        inviteSend: 'Game invitation sent',
        createPart: {
          title: 'Create match',
          time: 'Time minutes',
          type: 'Match type',
          create: 'Create',
          cancel: 'Cancel',
          black: 'Black',
          white: 'White',
          timePersonal: 'Personal time',
          fieldTime: 'Time',
          public: 'public',
          private: 'private'
        },
        uploadMens: {
          success: 'Files Uploaded Correctly',
          path_not_permit: 'File extension not allowed',
          size_not_permit: 'Exceeds allowed size'
        }
      },
      invites: {
        title: 'Invitations',
        numIn: 'Users invitations',
        vspc: 'Play against PC',
        initgame: 'Starting game'
      },
      visor: {
        title: 'Viewer',
        found: 'Found',
        whiteName: 'White name',
        blackName: 'Black name',
        result: 'Result',
        wins: 'Wins',
        by: 'by'
      },
      puzzles: {
        title: 'Puzzles',
        create: {
          title: 'Created a Puzzle',
          description: 'Add and share a challenging puzzle',
          create: 'Created',
          delete: 'Delete',
          edit: 'Edit',
          cancel: 'Canel',
          add: 'Adding puzzle',
          fenInit: 'Initial position',
          fenFinish: 'Finish position '
        },
        list: 'List',
        types: {
          MateIn1: {
            name: 'Mate in 1',
            descript: 'White wins in one move'
          },
          MateIn2: {
            name: 'Mate in 2',
            descript: 'White wins in two moves'
          },
          MateIn3: {
            name: 'Mate in 3',
            descript: 'White wins in three moves'
          },
          FindFork: {
            name: 'FindFork',
            descript: 'Find white move that results in fork'
          },
          TakePiece: {
            name: 'TakePiece',
            descript: 'Find white move that results in fork'
          }
        },
        attention: 'Attention',
        attMen: 'Select the puzzle to resolver',
        createBy: 'Create by',
        date: 'Date',
        played: 'Played',
        movs: 'Remaining moves',
        wins: 'Wins',
        lost: 'Lost',
        reintent: 'Reintent',
        intents: 'Intents',
        color: {
          black: 'black',
          white: 'white'
        }
      },
      about: {
        title: 'About',
        description: 'About app',
        namegame: 'Online chess game',
        seemore: 'Read more',
        des: 'Online multiplayer chess game that will allow you to face other players in real time and the computer itself. Solve puzzles and create new ones.',
        tecn: 'Technologies',
        dev: 'Developed'
      },
      game: {
        title: 'Game',
        chat: 'Game´s chat',
        chatConver: 'converse with',
        chatConverTooltip: 'Select a user online',
        rend: 'surrend',
        pieces: 'Pieces',
        board: 'Board',
        invert: 'Invert',
        text: 'Text',
        descriptiontext: 'Send message',
        turnColor: 'Played ',
        wins: 'Wins',
        incheck: 'in jaque',
        motives: {
          time: 'by time',
          rendi: 'by capitulation',
          login: 'Login'
        }
      },
      user: {
        title: 'User',
        logout: 'Exit',
        login: 'Login'
      }
    }
  }
}
