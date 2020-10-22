'use strict'

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers.filter(i => i.length > 0 && i.trim() != '')
	.map(i => i.toLowerCase().trim())
	.map(i => i[0].toUpperCase() + i.slice(1))

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own) => own.reduce((acc,curr) => acc + curr)

let lesson = calcCash(data.cash);


function makeBusiness(director, teacher, allModule, gang, course) {
	teacher = teacher || 'Максим';

	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим: ${sumTech}`);
}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
