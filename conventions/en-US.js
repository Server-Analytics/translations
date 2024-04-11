/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = {
    date: {
        short: function(day, month, year) {
            return `${month ? datePadding(month) + '/' : ''}${day ? datePadding(day) : ''}${year ? '/' + year : ''}`;
        },
        long: function(day, month, year) {
            return `${month ? month + ' ' : ''}${day}${year ? ' ' + year : ''}`;
        },
        semilong: function(day, month, year) {
            return `${month ? month + ' ' : ''}${day}${year ? ' ' + year : ''}`;
        }
    }
};

/**
 * Date padding convention
 */
function datePadding(value) {
    return value.toString().padStart(2, '0');
}
