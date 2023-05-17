export const DateFilterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    const dateParts = cellValue.split('/');
    if (dateParts.length > 1) {
      cellValue = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    }
    const cellValueDateZeroTime = new Date(new Date(cellValue).setHours(0, 0, 0, 0)).getTime();
    const filterValueDateZeroTime = new Date(filterLocalDateAtMidnight).getTime();
    if (filterValueDateZeroTime === cellValueDateZeroTime) {
      return 0;
    }
    if (filterValueDateZeroTime < cellValueDateZeroTime) {
      return 1;
    }
    if (filterValueDateZeroTime > cellValueDateZeroTime) {
      return -1;
    }
  },
  filterOptions: ['equals', 'greaterThan', 'lessThan'],
  buttons: ['clear'],
  suppressAndOrCondition: true,
};

export const TextFilterParams = {
  filterOptions: ['contains', 'startsWith', 'endsWith'],
  buttons: ['clear'],
  suppressAndOrCondition: true,
};

export const NumberFilterParams = {
  filterOptions: ['equals', 'greaterThan', 'lessThan'],
  buttons: ['clear'],
  suppressAndOrCondition: true,
};


