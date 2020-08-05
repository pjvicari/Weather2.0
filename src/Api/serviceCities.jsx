const cities = [
    { city: "Guatemala City", country: "Guatemala", countryCode: "GT" },
    { city: "Quetzaltenango", country: "Guatemala", countryCode: "GT" },
    { city: "San Marcos", country: "Guatemala", countryCode: "GT" },
    { city: "La Libertad", country: "Mexico", countryCode: "MX" }
]

export const getCities = () => cities

export const getCountryNameByCountryCode = (countryCode) => cities.filter(c => c.countryCode === countryCode)[0].country