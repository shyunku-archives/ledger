import("intl");
import('intl/locale-data/jsonp/ko-KR');

export function formatCurrency(amount) {
    // initIntl();

    let formatter = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW',
    });

    return formatter.format(amount);
}

async function initIntl() {
    await import("intl");
    await import('intl/locale-data/jsonp/ko-KR');
}