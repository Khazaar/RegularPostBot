export enum MessageTypes {
    ecstaticMeet,
    ecstaticFriends,
    ecstaticMarket,
    whatATrack,
}
const ecstaticFriendsArch =
    'Доброе утро, друзья! Сегодня среда (на связи рубрика #ecstaticfriends ) 👫, а это значит, что мы можем знакомиться в этом чате, рассказывать о себе в свободной форме или предложенной👉🏻: https://t.me/ecstaticwilddance/2698 \n❗Важное - сегодня и до 9️⃣ сентября действует пробный период. В рамках этой рубрики каждую среду вы можете ПРОРЕКЛАМИРОВАТЬ свои услуги, события и мероприятия. ВАЖНО сделать это строго с 15:00 до 18:00 (по МСК). хэштег 👉🏻#ecstaticуслуги \n И давайте заботиться о том, чтобы это было не спамом, а реально интересно всем! И даже недовольные хотели бы к вам прийти🤪\nПопробуем месяц и решим, подходит ли нам такой формат 😉 \nНе забываем подписывать хэштеги 👉🏻#ecstaticfriends и #ecstaticуслуги к своему тексту, чтобы ваши сообщения не потерялись ❤️';
export const MessagesDict: { [key in MessageTypes]: string } = {
    [MessageTypes.ecstaticMeet]:
        'Доброе утро, танцоры!💃🏻\nСегодня во вторник вы можете позвать здесь на #экстатиквстречи 🤗\nЭто формат живых встреч-тематических, музыкальных,танцевальных, творческих. Пишите здесь ваше вкусное😋 предложение и для сбора приглашайте в ЛИЧКУ или другой чат. \n‼️ Встречи только не коммерческого/рекламного формата‼️ \n⛷ Также, чтобы находить больше поводов для совместных активностей, именно спорт, отдых, можете использовать чат https://t.me/ecstaticactivities \n💨 Мы каждую неделю ходим в Ecstatic баню, обычно в среду и пятницу вечером,а бывает в другие дни, подробнее в банном чате: https://t.me/joinchat/S9y0RfEFqjNlffxN',
    [MessageTypes.ecstaticFriends]:
        'Доброе утро, друзья!\nСегодня среда (на связи рубрика #ecstaticfriends) 👫, а это значит,что мы можем знакомиться в этом чате,рассказывать о себе в свободной форме или предложенной👉🏻: https://t.me/ecstaticwilddance/2698\nТакже вы можете рассказать чем вы профессионально занимаетесь и чем можете быть полезны нашему сообществу.\nНе забываем подписывать хэштег 👉🏻#ecstaticfriends к своему тексту,чтобы ваши сообщения не потерялись ❤️',
    [MessageTypes.ecstaticMarket]:
        'Привет! 💫\nСегодня четверг  - рубрика:   #ecstaticmarket 👗👠👕🛍🏡🦄\nСамое время отдать/продать дорогую вашему сердцу вещь (но уже вам не нужную), снять/сдать жилье, отдать в добрые руки котят/щенят (или другую живность) и т.п. - пишите под этим тегом #ecstaticmarket',
    [MessageTypes.whatATrack]:
        'Друзья-танцоры, доброе утро!🤸🏻‍♀️\nПо понедельникам у людей играет музыка в голове после Экстатика 🎧 \nПишите скорее волшебную фразу:  #чезатрексэкстатика',
};

export const IntervalsDict: { [key in MessageTypes]: string } = {
    [MessageTypes.ecstaticMeet]: "0 * * * * *",
    [MessageTypes.ecstaticFriends]: "15 * * * * *",
    [MessageTypes.ecstaticMarket]: "30 * * * * *",
    [MessageTypes.whatATrack]: "0 * * * * *",
};

// [MessageTypes.ecstaticMeet]: "* * 12 * * 2",
//     [MessageTypes.ecstaticFriends]: "* * 12 * * 3",
//     [MessageTypes.ecstaticMarket]: "* * 12 * * 4",
//     [MessageTypes.whatATrack]: "* * * * * *",
