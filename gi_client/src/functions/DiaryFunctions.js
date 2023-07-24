import moment from 'moment';

function isValidMonth(date) {
    const dateFormat = 'YYYY-MM';
    const minDate = '1900-01';
    const maxDate = '2099-12';
    const momentDate = moment(date, dateFormat, true); // strict 모드로 날짜 파싱 시도
    return (
      momentDate.isValid() && // moment 객체가 유효한 날짜인지 확인
      momentDate.isSameOrAfter(minDate) && // 최소 날짜 이후인지 확인
      momentDate.isSameOrBefore(maxDate) // 최대 날짜 이전인지 확인
    );
}

function isValidDate(date) {
    const dateFormat = 'YYYY-MM-DD';
    const minDate = '1900-01-01';
    const maxDate = '2099-12-31';
    const momentDate = moment(date, dateFormat, true); // strict 모드로 날짜 파싱 시도
    return (
        momentDate.isValid() && // moment 객체가 유효한 날짜인지 확인
        momentDate.isSameOrAfter(minDate) && // 최소 날짜 이후인지 확인
        momentDate.isSameOrBefore(maxDate) // 최대 날짜 이전인지 확인
    );
}



export { isValidMonth, isValidDate };