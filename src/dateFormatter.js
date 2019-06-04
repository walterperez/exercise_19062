export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  if (
    typeof dateToFormatTimeMillis !== 'number' ||
    typeof systemDateTimeMillis !== 'number' ||
    Number.isNaN(dateToFormatTimeMillis) ||
    Number.isNaN(systemDateTimeMillis)
  ) {
    return undefined;
  }

  if (dateToFormatTimeMillis !== systemDateTimeMillis) {
    let newDateToFormat = new Date(dateToFormatTimeMillis);
    let day = newDateToFormat.getDate();
    let month = newDateToFormat.getMonth();
    let year = newDateToFormat.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return 'TODAY';
};
