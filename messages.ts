export enum MessageTypes {
    ecstaticMeet,
    ecstaticFriends,
    ecstaticMarket,
    whatATrack,
}
export const MessagesDict: { [key in MessageTypes]: string } = {
    [MessageTypes.ecstaticMeet]:
        "Добрые утро, танцоры!💃🏻\n Сегодня во вторник вы можете позвать здесь на #экстатиквстречи 🤗\nЭто формат живых встреч-тематических, музыкальных,танцевальных, творческих. Пишите здесь ваше вкусное😋 предложение и для сбора приглашайте в ЛИЧКУ или другой чат. \n‼️ Встречи только не коммерческого/рекламного формата‼️ \n⛷ Также, чтобы находить больше поводов для совместных активностей, именно спорт, отдых, можете использовать чат https://t.me/ecstaticactivities \n💨 Мы каждую неделю ходим в Ecstatic баню, обычно в среду и пятницу вечером,а бывает в другие дни, подробнее в банном чате: https://t.me/joinchat/S9y0RfEFqjNlffxN",
    [MessageTypes.ecstaticFriends]:
        "Доброе утро ,друзья!\n Сегодня среда (на связи рубрика #ecstaticfriends ) 👫, а это значит,что мы можем знакомиться в этом чате,рассказывать о себе в свободной форме или предложенной👉🏻: https://t.me/ecstaticwilddance/2698\nТакже вы можете рассказать чем вы профессионально занимаетесь и чем можете быть полезны нашему сообществу.\n Не забываем подписывать хэштег 👉🏻#ecstaticfriends к своему тексту,чтобы ваши сообщения не потерялись ❤️",
    [MessageTypes.ecstaticMarket]:
        "Привет ! 💫\nСегодня Чт.  - рубрика:   #ecstaticmarket 👗👠👕🛍🏡🦄\nСамое время отдать/продать дорогую вашему сердцу вещь (но уже вам не нужную), снять/сдать жилье, отдать в добрые руки котят/щенят (или другую живность) и т.п. - пишите под этим тегом #ecstaticmarket",
    [MessageTypes.whatATrack]:
        "Друзья-танцоры,доброе утро!🤸🏻‍♀️\nПо понедельникам у людей играет музыка в голове после Экстатика 🎧 \n Пишите скорее волшебную фразу:  #чезатрексэкстатика",
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
