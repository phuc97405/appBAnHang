const APPID = '7904635dae4a7c586f8c087f73646e5b';

export const getCurrentWeather = async (lat, long) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APPID}`;
  try {
    const response = await fetch(URL);
    const weatherData = await response.json();
    if (weatherData) {
      console.log('weatherData: ' + weatherData.main.temp);
      return {
        result: true,
        message: 'Lấy dữ liệu thời tiết thành công',
      };
    }
  } catch (error) {
    console.log('getDataWeatherErr: ' + error);
    return {result: false, message: 'Lỗi khi lấy dữ liệu thời tiết'};
  }
};
