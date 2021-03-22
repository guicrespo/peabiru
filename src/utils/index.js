export const formatDateWithoutTime = (date) => new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(date));

export const formatDateWithTime = (date) => {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
  const formattedHour = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(new Date(date));

  return `${formattedDate}, às ${formattedHour}`;
};
