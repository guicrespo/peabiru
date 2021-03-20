const fomartDate = (date) => new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(date));

export default fomartDate;
