const insertStringZero = (stringifyDate: string) => stringifyDate.padStart(2, '0');
const isString = (date: Date | string) => typeof date === 'string';

const formattedDate = ({ startDate, endDate }: { startDate: Date; endDate: Date | string }) => {
	const start = `${startDate.getFullYear()}.${insertStringZero(startDate.getMonth() + 1 + '')}`;

	const end = `${isString(endDate) ? endDate : (endDate as Date).getFullYear()}${isString(endDate) ? '' : '.'}${
		isString(endDate) ? '' : insertStringZero((endDate as Date).getMonth() + 1 + '')
	}`;

	return `${start} ${isString(endDate) && endDate === '' ? '' : '-'} ${end}`;
};

export default formattedDate;
