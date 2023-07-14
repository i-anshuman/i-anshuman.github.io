export const dateRangeToPeriod = (from: string, to: string): string => {
  const start = Date.parse(from);
  const end = /present/i.test(to) ? Date.now() : Date.parse(to);
  const difference = Math.floor((end - start) / 1000 / 60 / 60 / 24);
  const years = Math.floor(difference / 365);
  const months = Math.floor((difference % 365) / 30);
  let period = years ? `${years} year${years > 1 ? 's' : ''}` : '';
  period += months ? `${period ? ' and ' : ''}${months} month${months > 1 ? 's' : ''}` : '';
  return period;
};
