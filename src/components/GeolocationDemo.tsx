import { useState, useEffect, useRef } from "react";
import "../styles/components/GeolocationSlides.scss";

interface GeolocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
  cityName?: string;
  countryName?: string;
  timezoneId?: string;
  locale?: string;
  countryCode?: string;
}

interface Translations {
  title: string;
  subtitle: string;
  getLocation: string;
  gettingLocation: string;
  location: string;
  latitude: string;
  longitude: string;
  timezone: string;
  accuracy: string;
  timestamp: string;
}

// Translation mappings
const translations: Record<string, Translations> = {
  en: {
    title: "Geolocation Demo",
    subtitle: "Test how your app responds to different locations",
    getLocation: "Get Current Location",
    gettingLocation: "Getting Location...",
    location: "Location",
    latitude: "Latitude",
    longitude: "Longitude",
    timezone: "Timezone ID",
    accuracy: "Accuracy",
    timestamp: "Timestamp",
  },
  es: {
    title: "Demostración de Geolocalización",
    subtitle: "Prueba cómo responde tu aplicación a diferentes ubicaciones",
    getLocation: "Obtener Ubicación Actual",
    gettingLocation: "Obteniendo Ubicación...",
    location: "Ubicación",
    latitude: "Latitud",
    longitude: "Longitud",
    timezone: "Zona Horaria",
    accuracy: "Precisión",
    timestamp: "Marca de Tiempo",
  },
  fr: {
    title: "Démonstration de Géolocalisation",
    subtitle:
      "Testez comment votre application répond à différents emplacements",
    getLocation: "Obtenir l'Emplacement Actuel",
    gettingLocation: "Obtention de l'Emplacement...",
    location: "Emplacement",
    latitude: "Latitude",
    longitude: "Longitude",
    timezone: "Fuseau Horaire",
    accuracy: "Précision",
    timestamp: "Horodatage",
  },
  de: {
    title: "Geolokalisierungs-Demo",
    subtitle: "Testen Sie, wie Ihre App auf verschiedene Standorte reagiert",
    getLocation: "Aktuellen Standort Abrufen",
    gettingLocation: "Standort wird Abgerufen...",
    location: "Standort",
    latitude: "Breitengrad",
    longitude: "Längengrad",
    timezone: "Zeitzone",
    accuracy: "Genauigkeit",
    timestamp: "Zeitstempel",
  },
  hi: {
    title: "जियोलोकेशन डेमो",
    subtitle: "अपने ऐप की विभिन्न स्थानों पर प्रतिक्रिया का परीक्षण करें",
    getLocation: "वर्तमान स्थान प्राप्त करें",
    gettingLocation: "स्थान प्राप्त हो रहा है...",
    location: "स्थान",
    latitude: "अक्षांश",
    longitude: "देशांतर",
    timezone: "समय क्षेत्र",
    accuracy: "सटीकता",
    timestamp: "समय चिह्न",
  },
  zh: {
    title: "地理位置演示",
    subtitle: "测试您的应用对不同位置的响应",
    getLocation: "获取当前位置",
    gettingLocation: "正在获取位置...",
    location: "位置",
    latitude: "纬度",
    longitude: "经度",
    timezone: "时区",
    accuracy: "准确度",
    timestamp: "时间戳",
  },
  ja: {
    title: "ジオロケーション デモ",
    subtitle: "アプリが異なる場所にどのように反応するかをテスト",
    getLocation: "現在の位置を取得",
    gettingLocation: "位置を取得中...",
    location: "位置",
    latitude: "緯度",
    longitude: "経度",
    timezone: "タイムゾーン",
    accuracy: "精度",
    timestamp: "タイムスタンプ",
  },
};

const countryToLanguage: Record<string, string> = {
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  IE: "en",
  IN: "hi",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  JP: "ja",
  MX: "es",
  ES: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  FR: "fr",
  BE: "fr",
  CH: "de",
  DE: "de",
  AT: "de",
};

const GeolocationDemo = () => {
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");
  const watchIdRef = useRef<number | null>(null);

  const getTranslations = (lang: string = "en"): Translations => {
    return translations[lang] || translations.en;
  };

  const t = getTranslations(currentLanguage);

  // Detect language from country code
  const detectLanguageFromCountry = (countryCode?: string): string => {
    if (!countryCode) return "en";
    return countryToLanguage[countryCode] || "en";
  };

  const getCityName = async (
    latitude: number,
    longitude: number
  ): Promise<{
    city: string;
    country: string;
    timezone: string;
    locale?: string;
    countryCode?: string;
  }> => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();

      // Get locale from API if available, otherwise derive from country
      const locale = data.locale || data.countryCode?.toLowerCase() || "en";
      const countryCode = data.countryCode || "";

      return {
        city: data.city || data.locality || "Unknown City",
        country: data.countryName || "Unknown Country",
        timezone:
          data.localityInfo?.administrative?.[0]?.timezoneId ||
          Intl.DateTimeFormat().resolvedOptions().timeZone,
        locale,
        countryCode,
      };
    } catch {
      return {
        city: "Unknown City",
        country: "Unknown Country",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        locale: "en",
        countryCode: "",
      };
    }
  };

  // Handle position update (used by both single get and watch)
  const handlePositionUpdate = async (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    const locationInfo = await getCityName(latitude, longitude);

    // Detect language from country code
    const detectedLanguage = detectLanguageFromCountry(
      locationInfo.countryCode
    );
    setCurrentLanguage(detectedLanguage);

    const newPosition: GeolocationData = {
      latitude,
      longitude,
      accuracy: position.coords.accuracy,
      timestamp: position.timestamp,
      cityName: locationInfo.city,
      countryName: locationInfo.country,
      timezoneId: locationInfo.timezone,
      locale: locationInfo.locale,
      countryCode: locationInfo.countryCode,
    };

    setCurrentPosition(newPosition);
  };

  const getCurrentLocation = async () => {
    setError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handlePositionUpdate,
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
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  };

  // Silent refresh - updates location without showing loading or errors
  const silentRefreshLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      handlePositionUpdate,
      () => {
        // Silently fail - don't show error to user
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0, // Force fresh data
      }
    );
  };

  // Automatically fetch location on component mount
  useEffect(() => {
    getCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  return (
    <div className="slide demo-slide">
      <div className="slide-header">
        <h2>🚀 {t.title}</h2>
        <p>{t.subtitle}</p>
      </div>

      <div className="demo-content">
        <div className="geolocation-section">
          <h3>📍 {t.location}</h3>

          <div className="location-display">
            <div className="button-group">
              <button
                className="get-location-btn"
                onClick={silentRefreshLocation}
              >
                {t.getLocation}
              </button>
              {currentPosition && (
                <span className="language-badge">
                  🌐 Language: {currentLanguage.toUpperCase()}
                </span>
              )}
            </div>

            <div className="location-data">
              <div className="data-item location-name-item">
                <label>📍 {t.location}:</label>
                <span className={!currentPosition ? "placeholder" : ""}>
                  {currentPosition
                    ? `${currentPosition.cityName}, ${currentPosition.countryName}`
                    : "—"}
                </span>
              </div>
              <div className="data-item">
                <label>{t.latitude}:</label>
                <span className={!currentPosition ? "placeholder" : ""}>
                  {currentPosition ? currentPosition.latitude.toFixed(6) : "—"}
                </span>
              </div>
              <div className="data-item">
                <label>{t.longitude}:</label>
                <span className={!currentPosition ? "placeholder" : ""}>
                  {currentPosition ? currentPosition.longitude.toFixed(6) : "—"}
                </span>
              </div>
              <div className="data-item">
                <label>{t.timezone}:</label>
                <span className={!currentPosition ? "placeholder" : ""}>
                  {currentPosition ? currentPosition.timezoneId : "—"}
                </span>
              </div>
              <div className="data-item">
                <label>{t.accuracy}:</label>
                <span className={!currentPosition ? "placeholder" : ""}>
                  {currentPosition
                    ? `${currentPosition.accuracy.toFixed(2)} meters`
                    : "—"}
                </span>
              </div>
              <div className="data-item">
                <label>{t.timestamp}:</label>
                <span className={!currentPosition ? "placeholder" : ""}>
                  {currentPosition
                    ? new Date(currentPosition.timestamp).toLocaleString(
                        currentLanguage === "hi" ||
                          currentLanguage === "zh" ||
                          currentLanguage === "ja"
                          ? "en-US"
                          : `${currentLanguage}-${
                              currentPosition.countryCode || "US"
                            }`
                      )
                    : "—"}
                </span>
              </div>
            </div>

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
