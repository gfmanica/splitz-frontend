export function money(value: number) {
    return value?.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

export function formatDate(date: string): string {
    const formated = date.replace('Z', '');

    return new Date(formated).toLocaleDateString();
}
