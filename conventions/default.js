/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = {
    date: {
        short: function(day, month, year) {
            return `${day ? datePadding(day) + '/' : ''}${month ? datePadding(month) : ''}${year ? '/' + year : ''}`;
        },
        long: function(day, month, year) {
            return `${day ? day + ' ' : ''}${month}${year ? ' ' + year : ''}`;
        },
        semilong: function(day, month, year) {
            return `${day ? day + ' ' : ''}${month}${year ? ' ' + year : ''}`;
        }
    }
};

/**
 * Date padding convention
 */
function datePadding(value) {
    return value.toString().padStart(2, '0');
}
