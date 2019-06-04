import { format } from '../src/dateFormatter';

describe('Testing Format function', () => {
  it('when the system date and the date to format are the same day formats as "TODAY"', () => {
    const dateTimeToFormat = new Date(2018, 11, 15, 12, 50).getTime();
    const systemDateTime = new Date(2018, 11, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
  });

  it('When the date is not current system date return a formatted date string in the format DD/MM/YYYY', () => {
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    const systemDateTime = new Date(2018, 11, 15, 10, 5).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBe('15/1/2018');
  });

  it('When the dateToFormatTimeMillis is a decimal number returns the date with format DD/MM/YYYY', () => {
    const dateTimeToFormat = 1239187236192873.2134124;
    const systemDateTime = new Date(2018, 11, 15, 10, 5).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBe('12/3/41238');
  });

  it('When the dateToFormatTimeMillis is a negative number returns the date with format DD/MM/YYYY', () => {
    const dateTimeToFormat = -1234612342134;
    const systemDateTime = new Date(2018, 11, 15, 10, 5).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBe('17/10/1930');
  });

  it('When the systemDateTimeMillis is a decimal number returns the date with format DD/MM/YYYY', () => {
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    const systemDateTime = 1239187236192873.2134124;
    expect(format(dateTimeToFormat, systemDateTime)).toBe('15/1/2018');
  });

  it('When the systemDateTimeMillis is a negative number returns the date with format DD/MM/YYYY', () => {
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    const systemDateTime = -1234612342134;
    expect(format(dateTimeToFormat, systemDateTime)).toBe('15/1/2018');
  });

  it('Returns undefined if dateToFormatTimeMillis is string', () => {
    const dateTimeToFormat = 'Hello Error!';
    const systemDateTime = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is string', () => {
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    const systemDateTime = 'Hello Error!';
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if both arguments are strings', () => {
    const dateTimeToFormat = 'Hello Error!';
    const systemDateTime = 'Hello super error!';
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if dateToFormatTimeMillis is NaN', () => {
    const dateTimeToFormat = NaN;
    const systemDateTime = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if dateToFormatTimeMillis is an Object', () => {
    const dateTimeToFormat = { error: 'Hello error' };
    const systemDateTime = 'Hello super error!';
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if dateToFormatTimeMillis is an empty Object', () => {
    const dateTimeToFormat = {};
    const systemDateTime = 'Hello super error!';
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if dateToFormatTimeMillis is an Array', () => {
    const dateTimeToFormat = [44, 'hello', 'world'];
    const systemDateTime = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if dateToFormatTimeMillis is an empty Array', () => {
    const dateTimeToFormat = [];
    const systemDateTime = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is NaN', () => {
    const systemDateTime = NaN;
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is an Object', () => {
    const systemDateTime = { error: 'Hello error' };
    const dateTimeToFormat = 'Hello super error!';
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is an empty Object', () => {
    const systemDateTime = {};
    const dateTimeToFormat = 'Hello super error!';
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is an Array', () => {
    const systemDateTime = [12, 'hello', 'world'];
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is an empty Array', () => {
    const systemDateTime = [];
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if dateToFormatTimeMillis is a boolean', () => {
    const dateTimeToFormat = true;
    const systemDateTime = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is a boolean', () => {
    const systemDateTime = false;
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });

  it('Returns undefined if systemDateTimeMillis is a function', () => {
    const systemDateTime = function hello() {
      let variable = 'hello im a function';
    };
    const dateTimeToFormat = new Date(2018, 1, 15, 12, 50).getTime();
    expect(format(dateTimeToFormat, systemDateTime)).toBeUndefined();
  });
});
