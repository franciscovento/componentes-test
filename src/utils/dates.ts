const isValidDateString = (dateString: string) => {
  const date = new Date(dateString); // Intenta crear un objeto Date
  // Verificar si la fecha es válida
  return !isNaN(date.getTime()); // Devuelve true si es una fecha válida
};

const getDateFromString = (stringDate: string) => {
  // Descomponer el string en año, mes y día
  const [year, month, day] = stringDate.split('-').map(Number);

  // Crear un objeto Date con la hora establecida a medianoche
  return new Date(year, month - 1, day, 0, 0, 0); // Meses son 0-indexados
};

const getStringFromDate = (date?: Date) => {
  if (!date) return '';

  const day = String(date.getDate()).padStart(2, '0'); // Obtener el día
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtener el mes (0-11)
  const year = date.getFullYear(); // Obtener el año

  return `${year}-${month}-${day}`; // Formato YYYY-MM-DD
};

export { getDateFromString, getStringFromDate, isValidDateString };
