export default function getFlights() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve([
            {
                id: 0,
                from: 'Tel-Aviv',
                to: 'New-York',
                departureTime: 55,
                landingTime: 55,
                price: 300,
            },
            {
                id: 1,
                from: 'Tel-Aviv',
                to: 'Amsterdam',
                departureTime: 55,
                landingTime: 55,
                price: 300,
            },
            {
                id: 2,
                from: 'Tel-Aviv',
                to: 'New-York',
                departureTime: 55,
                landingTime: 55,
                price: 300,
            }
        ]), 2000);
    });
}