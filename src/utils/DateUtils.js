// @arg month: 1-based month
function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

export function getMonthRange(year, month) {
  const lastDay = daysInMonth(year, month);
  return [
    `${month}-1-${year}`,
    `${month}-${lastDay}-${year}`
  ];
}

export function getYearRange(year) {
  return [
    `1-1-${year}`,
    `12-31-${year}`
  ];
}

// JS says Sunday is 0, python says Monday is 0
// I like Monday being 0
export function getDayOfWeek(date) {
  // const date = new Date(year, month, day);
  return (date.getDay() + 6) % 7;
}


export function padNumber(number, required_padding=2) {
	let nString = number.toString();
	while (nString.length < required_padding) {
		nString = "0" + nString;
	}
	return nString;
}
