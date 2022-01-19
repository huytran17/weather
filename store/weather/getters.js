export const getters = {
    weather: (state) => state.weather,
    k_to_c: (state) => state.k_to_c,
    m_to_km: (state) => state.m_to_km,
    cities: (state) => state.cities,
    city_id: (state) => state.city_id,
    city_name: (state) => state.city_name,
}

export default getters;