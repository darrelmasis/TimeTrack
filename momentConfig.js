import moment from 'moment';
import 'moment/locale/es';

moment.locale('es', {
  months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthsShort: ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.","Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."],
  weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  weekdaysShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
  weekdaysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"]
}
)

export default moment