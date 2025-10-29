import { useState } from "react";
import "./GeolocationSlides.scss";

interface GeolocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
  cityName?: string;
  countryName?: string;
  timezoneId?: string;
}

const GeolocationDemo = () => {
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCityName = async (
    latitude: number,
    longitude: number
  ): Promise<{ city: string; country: string; timezone: string }> => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();
      return {
        city: data.city || data.locality || "Unknown City",
        country: data.countryName || "Unknown Country",
        timezone:
          data.localityInfo?.administrative?.[0]?.timezoneId ||
          Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
    } catch {
      return {
        city: "Unknown City",
        country: "Unknown Country",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
    }
  };

  const getCurrentLocation = async () => {
    setIsLoading(true);
    setError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationInfo = await getCityName(latitude, longitude);

          setCurrentPosition({
            latitude,
            longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
            cityName: locationInfo.city,
            countryName: locationInfo.country,
            timezoneId: locationInfo.timezone,
          });
          setIsLoading(false);
        },
        (error) => {
          let errorMessage = "Unknown error occurred";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access denied by user";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out";
              break;
          }
          setError(errorMessage);
          setIsLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
      setIsLoading(false);
    }
  };

  return (
    <div className="slide demo-slide">
      <div className="slide-header">
        <h2>🚀 Geolocation Demo</h2>
      </div>

      <div className="demo-content">
        <div className="geolocation-section">
          <h3>📍 Current Geolocation</h3>
          <div className="location-display">
            <button
              className="get-location-btn"
              onClick={getCurrentLocation}
              disabled={isLoading}
            >
              {isLoading ? "Getting Location..." : "Get Current Location"}
            </button>

            {currentPosition && (
              <div className="location-data">
                <div className="data-item location-name-item">
                  <label>📍 Location:</label>
                  <span>
                    {currentPosition.cityName}, {currentPosition.countryName}
                  </span>
                </div>
                <div className="data-item">
                  <label>Latitude:</label>
                  <span>{currentPosition.latitude.toFixed(6)}</span>
                </div>
                <div className="data-item">
                  <label>Longitude:</label>
                  <span>{currentPosition.longitude.toFixed(6)}</span>
                </div>
                <div className="data-item">
                  <label>Timezone ID:</label>
                  <span>{currentPosition.timezoneId}</span>
                </div>
                <div className="data-item">
                  <label>Accuracy:</label>
                  <span>{currentPosition.accuracy.toFixed(2)} meters</span>
                </div>
                <div className="data-item">
                  <label>Timestamp:</label>
                  <span>
                    {new Date(currentPosition.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {error && (
              <div className="error-message">
                <strong>Error:</strong> {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeolocationDemo;
