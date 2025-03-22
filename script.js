const translations = {
    en: {
        title: "Unit Converter",
        convert: "Convert",
        toText: "to",
        convertButton: "Convert",
        categories: [
            "Length/Distance", "Weight/Mass", "Volume/Capacity", "Area", "Time", "Temperature",
            "Speed/Velocity", "Acceleration", "Force", "Energy/Work", "Power", "Pressure",
            "Angle", "Frequency", "Digital Storage", "Electric Current", "Voltage", "Resistance"
        ],
        units: {
            "Length/Distance": [
                "Nanometers (nm)", "Micrometers (µm)", "Millimeters (mm)", "Centimeters (cm)", "Decimeters (dm)", 
                "Meters (m)", "Kilometers (km)", "Inches (in)", "Feet (ft)", "Yards (yd)", "Miles (mi)", 
                "Nautical miles (nmi)", "Light-years (ly)", "Parsecs (pc)", "Angstroms (Å)", "Chains", 
                "Furlongs", "Rods", "Leagues"
            ],
            "Weight/Mass": [
                "Micrograms (µg)", "Milligrams (mg)", "Grams (g)", "Kilograms (kg)", "Metric tons (t)", 
                "Ounces (oz)", "Pounds (lb)", "Stones (st)", "Short tons", "Long tons", "Carats (ct)", 
                "Grains (gr)", "Drams (dr)", "Hundredweight (cwt)"
            ],
            "Volume/Capacity": [
                "Cubic centimeters (cm³)", "Cubic meters (m³)", "Cubic inches (in³)", "Cubic feet (ft³)", 
                "Cubic yards (yd³)", "Liters (L)", "Milliliters (mL)", "Deciliters (dL)", "Hectoliters (hL)", 
                "Gallons (US gal)", "Gallons (Imperial gal)", "Quarts (qt)", "Pints (pt)", "Fluid ounces (fl oz)", 
                "Cups", "Teaspoons (tsp)", "Tablespoons (tbsp)", "Barrels (bbl)", "Bushels (bu)", "Pecks", "Gills"
            ],
            "Area": [
                "Square millimeters (mm²)", "Square centimeters (cm²)", "Square meters (m²)", "Square kilometers (km²)", 
                "Hectares (ha)", "Ares", "Square inches (in²)", "Square feet (ft²)", "Square yards (yd²)", 
                "Square miles (mi²)", "Acres", "Roods", "Sections", "Townships"
            ],
            "Time": [
                "Nanoseconds (ns)", "Microseconds (µs)", "Milliseconds (ms)", "Seconds (s)", "Minutes (min)", 
                "Hours (h)", "Days (d)", "Weeks (wk)", "Fortnights", "Months (mo)", "Years (yr)", "Decades", 
                "Centuries", "Millennia"
            ],
            "Temperature": ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)"],
            "Speed/Velocity": [
                "Meters per second (m/s)", "Kilometers per hour (km/h)", "Miles per hour (mph)", "Feet per second (ft/s)", 
                "Knots (kn)", "Mach", "Centimeters per second (cm/s)"
            ],
            "Acceleration": ["Meters per second squared (m/s²)", "Feet per second squared (ft/s²)", "Standard gravity (g)"],
            "Force": ["Newtons (N)", "Kilonewtons (kN)", "Dynes (dyn)", "Pounds-force (lbf)", "Kilopounds-force (kip)"],
            "Energy/Work": [
                "Joules (J)", "Kilojoules (kJ)", "Megajoules (MJ)", "Watt-hours (Wh)", "Kilowatt-hours (kWh)", 
                "Megawatt-hours (MWh)", "Calories (cal)", "Kilocalories (kcal)", "British Thermal Units (BTU)", 
                "Therms", "Foot-pounds (ft-lb)", "Electronvolts (eV)"
            ],
            "Power": ["Watts (W)", "Kilowatts (kW)", "Megawatts (MW)", "Horsepower (hp)", "Foot-pounds per second (ft-lb/s)"],
            "Pressure": [
                "Pascals (Pa)", "Kilopascals (kPa)", "Megapascals (MPa)", "Bars", "Millibars (mbar)", "Atmospheres (atm)", 
                "Millimeters of mercury (mmHg)", "Inches of mercury (inHg)", "Pounds per square inch (psi)", "Torr"
            ],
            "Angle": ["Degrees (°)", "Radians (rad)", "Gradians (grad)", "Minutes (')", "Seconds (\")", "Turns"],
            "Frequency": ["Hertz (Hz)", "Kilohertz (kHz)", "Megahertz (MHz)", "Gigahertz (GHz)", "Cycles per second (cps)"],
            "Digital Storage": [
                "Bits (b)", "Bytes (B)", "Kilobytes (KB)", "Megabytes (MB)", "Gigabytes (GB)", "Terabytes (TB)", 
                "Petabytes (PB)", "Exabytes (EB)", "Kibibytes (KiB)", "Mebibytes (MiB)", "Gibibytes (GiB)", "Tebibytes (TiB)"
            ],
            "Electric Current": ["Amperes (A)", "Milliamperes (mA)", "Microamperes (µA)"],
            "Voltage": ["Volts (V)", "Millivolts (mV)", "Kilovolts (kV)"],
            "Resistance": ["Ohms (Ω)", "Kilohms (kΩ)", "Megohms (MΩ)"]
        }
    },
    es: {
        title: "Convertidor de Unidades",
        convert: "Convertir",
        toText: "a",
        convertButton: "Convertir",
        categories: [
            "Longitud/Distancia", "Peso/Masa", "Volumen/Capacidad", "Área", "Tiempo", "Temperatura",
            "Velocidad", "Aceleración", "Fuerza", "Energía/Trabajo", "Potencia", "Presión",
            "Ángulo", "Frecuencia", "Almacenamiento Digital", "Corriente Eléctrica", "Voltaje", "Resistencia"
        ],
        units: {
            "Length/Distance": [
                "Nanómetros (nm)", "Micrómetros (µm)", "Milímetros (mm)", "Centímetros (cm)", "Decímetros (dm)", 
                "Metros (m)", "Kilómetros (km)", "Pulgadas (in)", "Pies (ft)", "Yardas (yd)", "Millas (mi)", 
                "Millas náuticas (nmi)", "Años luz (ly)", "Parsecs (pc)", "Ångstroms (Å)", "Cadenas", 
                "Furlongs", "Varas", "Leguas"
            ],
            "Weight/Mass": [
                "Microgramos (µg)", "Miligramos (mg)", "Gramos (g)", "Kilogramos (kg)", "Toneladas métricas (t)", 
                "Onzas (oz)", "Libras (lb)", "Piedras (st)", "Toneladas cortas", "Toneladas largas", "Quilates (ct)", 
                "Granos (gr)", "Dramas (dr)", "Quintales (cwt)"
            ],
            "Volume/Capacity": [
                "Centímetros cúbicos (cm³)", "Metros cúbicos (m³)", "Pulgadas cúbicas (in³)", "Pies cúbicos (ft³)", 
                "Yardas cúbicas (yd³)", "Litros (L)", "Mililitros (mL)", "Decilitros (dL)", "Hectolitros (hL)", 
                "Galones (US gal)", "Galones (gal imp)", "Cuartos (qt)", "Pintas (pt)", "Onzas fluidas (fl oz)", 
                "Tazas", "Cucharaditas (tsp)", "Cucharadas (tbsp)", "Barriles (bbl)", "Bushels (bu)", "Pecks", "Gills"
            ],
            "Area": [
                "Milímetros cuadrados (mm²)", "Centímetros cuadrados (cm²)", "Metros cuadrados (m²)", "Kilómetros cuadrados (km²)", 
                "Hectáreas (ha)", "Áreas", "Pulgadas cuadradas (in²)", "Pies cuadrados (ft²)", "Yardas cuadradas (yd²)", 
                "Millas cuadradas (mi²)", "Acres", "Roods", "Secciones", "Townships"
            ],
            "Time": [
                "Nanosegundos (ns)", "Microsegundos (µs)", "Milisegundos (ms)", "Segundos (s)", "Minutos (min)", 
                "Horas (h)", "Días (d)", "Semanas (wk)", "Quincenas", "Meses (mo)", "Años (yr)", "Décadas", 
                "Siglos", "Milenios"
            ],
            "Temperature": ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)"],
            "Speed/Velocity": [
                "Metros por segundo (m/s)", "Kilómetros por hora (km/h)", "Millas por hora (mph)", "Pies por segundo (ft/s)", 
                "Nudos (kn)", "Mach", "Centímetros por segundo (cm/s)"
            ]
        }
    },
    fr: {
        title: "Convertisseur d'Unités",
        convert: "Convertir",
        toText: "à",
        convertButton: "Convertir",
        categories: [
            "Longueur/Distance", "Poids/Masse", "Volume/Capacité", "Surface", "Temps", "Température",
            "Vitesse", "Accélération", "Force", "Énergie/Travail", "Puissance", "Pression",
            "Angle", "Fréquence", "Stockage Numérique", "Courant Électrique", "Voltage", "Résistance"
        ],
        units: {
            "Length/Distance": [
                "Nanomètres (nm)", "Micromètres (µm)", "Millimètres (mm)", "Centimètres (cm)", "Décimètres (dm)", 
                "Mètres (m)", "Kilomètres (km)", "Pouces (in)", "Pieds (ft)", "Verges (yd)", "Miles (mi)", 
                "Miles nautiques (nmi)", "Années-lumière (ly)", "Parsecs (pc)", "Angströms (Å)", "Chaînes", 
                "Furlongs", "Cannes", "Lieues"
            ],
            "Weight/Mass": [
                "Microgrammes (µg)", "Milligrammes (mg)", "Grammes (g)", "Kilogrammes (kg)", "Tonnes métriques (t)", 
                "Onces (oz)", "Livres (lb)", "Pierres (st)", "Tonnes courtes", "Tonnes longues", "Carats (ct)", 
                "Grains (gr)", "Drachmes (dr)", "Quintaux (cwt)"
            ],
            "Volume/Capacity": [
                "Centimètres cubes (cm³)", "Mètres cubes (m³)", "Pouces cubes (in³)", "Pieds cubes (ft³)", 
                "Verges cubes (yd³)", "Litres (L)", "Millilitres (mL)", "Décilitres (dL)", "Hectolitres (hL)", 
                "Gallons (US gal)", "Gallons (gal imp)", "Quarts (qt)", "Pintes (pt)", "Onces liquides (fl oz)", 
                "Tasses", "Cuillères à café (tsp)", "Cuillères à soupe (tbsp)", "Barils (bbl)", "Boissaux (bu)", "Pecks", "Gills"
            ],
            "Area": [
                "Millimètres carrés (mm²)", "Centimètres carrés (cm²)", "Mètres carrés (m²)", "Kilomètres carrés (km²)", 
                "Hectares (ha)", "Ares", "Pouces carrés (in²)", "Pieds carrés (ft²)", "Verges carrées (yd²)", 
                "Miles carrés (mi²)", "Acres", "Roods", "Sections", "Townships"
            ],
            "Time": [
                "Nanosecondes (ns)", "Microsecondes (µs)", "Millisecondes (ms)", "Secondes (s)", "Minutes (min)", 
                "Heures (h)", "Jours (d)", "Semaines (wk)", "Quinzaines", "Mois (mo)", "Années (yr)", "Décennies", 
                "Siècles", "Millénaires"
            ],
            "Temperature": ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)"],
            "Speed/Velocity": [
                "Mètres par seconde (m/s)", "Kilomètres par heure (km/h)", "Miles par heure (mph)", "Pieds par seconde (ft/s)", 
                "Nœuds (kn)", "Mach", "Centimètres par seconde (cm/s)"
            ]
        }
    },
    de: {
        title: "Einheitenumrechner",
        convert: "Umrechnen",
        toText: "zu",
        convertButton: "Umrechnen",
        categories: [
            "Länge/Entfernung", "Gewicht/Masse", "Volumen/Kapazität", "Fläche", "Zeit", "Temperatur",
            "Geschwindigkeit", "Beschleunigung", "Kraft", "Energie/Arbeit", "Leistung", "Druck",
            "Winkel", "Frequenz", "Digitaler Speicher", "Elektrischer Strom", "Spannung", "Widerstand"
        ],
        units: {
            "Length/Distance": [
                "Nanometer (nm)", "Mikrometer (µm)", "Millimeter (mm)", "Zentimeter (cm)", "Dezimeter (dm)", 
                "Meter (m)", "Kilometer (km)", "Zoll (in)", "Fuß (ft)", "Yards (yd)", "Meilen (mi)", 
                "Seemeilen (nmi)", "Lichtjahre (ly)", "Parsec (pc)", "Ångström (Å)", "Ketten", 
                "Furlongs", "Ruten", "Leugen"
            ],
            "Weight/Mass": [
                "Mikrogramm (µg)", "Milligramm (mg)", "Gramm (g)", "Kilogramm (kg)", "Metrische Tonnen (t)", 
                "Unzen (oz)", "Pfund (lb)", "Steine (st)", "Kurze Tonnen", "Lange Tonnen", "Karat (ct)", 
                "Gran (gr)", "Dram (dr)", "Zentner (cwt)"
            ],
            "Volume/Capacity": [
                "Kubikzentimeter (cm³)", "Kubikmeter (m³)", "Kubikzoll (in³)", "Kubikfuß (ft³)", 
                "Kubikyard (yd³)", "Liter (L)", "Milliliter (mL)", "Deziliter (dL)", "Hektoliter (hL)", 
                "Gallonen (US gal)", "Gallonen (imp gal)", "Quart (qt)", "Pint (pt)", "Flüssigunzen (fl oz)", 
                "Tassen", "Teelöffel (tsp)", "Esslöffel (tbsp)", "Fässer (bbl)", "Scheffel (bu)", "Pecks", "Gills"
            ],
            "Area": [
                "Quadratmillimeter (mm²)", "Quadratzentimeter (cm²)", "Quadratmeter (m²)", "Quadratkilometer (km²)", 
                "Hektar (ha)", "Ar", "Quadratzoll (in²)", "Quadratfuß (ft²)", "Quadratyard (yd²)", 
                "Quadratmeilen (mi²)", "Acker", "Roods", "Sektionen", "Townships"
            ],
            "Time": [
                "Nanosekunden (ns)", "Mikrosekunden (µs)", "Millisekunden (ms)", "Sekunden (s)", "Minuten (min)", 
                "Stunden (h)", "Tage (d)", "Wochen (wk)", "Vierzehntage", "Monate (mo)", "Jahre (yr)", "Dekaden", 
                "Jahrhunderte", "Jahrtausende"
            ],
            "Temperature": ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)"],
            "Speed/Velocity": [
                "Meter pro Sekunde (m/s)", "Kilometer pro Stunde (km/h)", "Meilen pro Stunde (mph)", "Fuß pro Sekunde (ft/s)", 
                "Knoten (kn)", "Mach", "Zentimeter pro Sekunde (cm/s)"
            ]
        }
    },
    it: {
        title: "Convertitore di Unità",
        convert: "Converti",
        toText: "a",
        convertButton: "Converti",
        categories: [
            "Lunghezza/Distanza", "Peso/Massa", "Volume/Capacità", "Area", "Tempo", "Temperatura",
            "Velocità", "Accelerazione", "Forza", "Energia/Lavoro", "Potenza", "Pressione",
            "Angolo", "Frequenza", "Archiviazione Digitale", "Corrente Elettrica", "Voltaggio", "Resistenza"
        ],
        units: {
            "Length/Distance": [
                "Nanometri (nm)", "Micrometri (µm)", "Millimetri (mm)", "Centimetri (cm)", "Decimetri (dm)", 
                "Metri (m)", "Chilometri (km)", "Pollici (in)", "Piedi (ft)", "Iarde (yd)", "Miglia (mi)", 
                "Miglia nautiche (nmi)", "Anni luce (ly)", "Parsec (pc)", "Ångstrom (Å)", "Catene", 
                "Furlong", "Verghe", "Leghe"
            ],
            "Weight/Mass": [
                "Microgrammi (µg)", "Milligrammi (mg)", "Grammi (g)", "Chilogrammi (kg)", "Tonnellate metriche (t)", 
                "Once (oz)", "Libbre (lb)", "Pietre (st)", "Tonnellate corte", "Tonnellate lunghe", "Carati (ct)", 
                "Grani (gr)", "Drammi (dr)", "Quintali (cwt)"
            ],
            "Volume/Capacity": [
                "Centimetri cubi (cm³)", "Metri cubi (m³)", "Pollici cubi (in³)", "Piedi cubi (ft³)", 
                "Iarde cubiche (yd³)", "Litri (L)", "Millilitri (mL)", "Decilitri (dL)", "Ectolitri (hL)", 
                "Galloni (US gal)", "Galloni (gal imp)", "Quarti (qt)", "Pinte (pt)", "Once fluide (fl oz)", 
                "Tazze", "Cucchiaini (tsp)", "Cucchiai (tbsp)", "Barili (bbl)", "Staia (bu)", "Pecks", "Gills"
            ],
            "Area": [
                "Millimetri quadrati (mm²)", "Centimetri quadrati (cm²)", "Metri quadrati (m²)", "Chilometri quadrati (km²)", 
                "Ettari (ha)", "Are", "Pollici quadrati (in²)", "Piedi quadrati (ft²)", "Iarde quadrate (yd²)", 
                "Miglia quadrate (mi²)", "Acri", "Roods", "Sezioni", "Townships"
            ],
            "Time": [
                "Nanosecondi (ns)", "Microsecondi (µs)", "Millisecondi (ms)", "Secondi (s)", "Minuti (min)", 
                "Ore (h)", "Giorni (d)", "Settimane (wk)", "Quindicine", "Mesi (mo)", "Anni (yr)", "Decenni", 
                "Secoli", "Millenni"
            ],
            "Temperature": ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)"],
            "Speed/Velocity": [
                "Metri al secondo (m/s)", "Chilometri all'ora (km/h)", "Miglia all'ora (mph)", "Piedi al secondo (ft/s)", 
                "Nodi (kn)", "Mach", "Centimetri al secondo (cm/s)"
            ]
        }
    },
    pt: {
        title: "Conversor de Unidades",
        convert: "Converter",
        toText: "para",
        convertButton: "Converter",
        categories: [
            "Comprimento/Distância", "Peso/Massa", "Volume/Capacidade", "Área", "Tempo", "Temperatura",
            "Velocidade", "Aceleração", "Força", "Energia/Trabalho", "Potência", "Pressão",
            "Ângulo", "Frequência", "Armazenamento Digital", "Corrente Elétrica", "Voltagem", "Resistência"
        ],
        units: {
            "Length/Distance": [
                "Nanômetros (nm)", "Micrômetros (µm)", "Milímetros (mm)", "Centímetros (cm)", "Decímetros (dm)", 
                "Metros (m)", "Quilômetros (km)", "Polegadas (in)", "Pés (ft)", "Jardas (yd)", "Milhas (mi)", 
                "Milhas náuticas (nmi)", "Anos-luz (ly)", "Parsecs (pc)", "Ångströms (Å)", "Cadeias", 
                "Furlongs", "Varas", "Léguas"
            ],
            "Weight/Mass": [
                "Microgramas (µg)", "Miligramas (mg)", "Gramas (g)", "Quilogramas (kg)", "Toneladas métricas (t)", 
                "Onças (oz)", "Libras (lb)", "Pedras (st)", "Toneladas curtas", "Toneladas longas", "Quilates (ct)", 
                "Grãos (gr)", "Dramas (dr)", "Quintais (cwt)"
            ],
            "Volume/Capacity": [
                "Centímetros cúbicos (cm³)", "Metros cúbicos (m³)", "Polegadas cúbicas (in³)", "Pés cúbicos (ft³)", 
                "Jardas cúbicas (yd³)", "Litros (L)", "Mililitros (mL)", "Decilitros (dL)", "Hectolitros (hL)", 
                "Galões (US gal)", "Galões (gal imp)", "Quartos (qt)", "Pintas (pt)", "Onças fluidas (fl oz)", 
                "Xícaras", "Colheres de chá (tsp)", "Colheres de sopa (tbsp)", "Barris (bbl)", "Alqueires (bu)", "Pecks", "Gills"
            ],
            "Area": [
                "Milímetros quadrados (mm²)", "Centímetros quadrados (cm²)", "Metros quadrados (m²)", "Quilômetros quadrados (km²)", 
                "Hectares (ha)", "Ares", "Polegadas quadradas (in²)", "Pés quadrados (ft²)", "Jardas quadradas (yd²)", 
                "Milhas quadradas (mi²)", "Acres", "Roods", "Seções", "Townships"
            ],
            "Time": [
                "Nanosegundos (ns)", "Microsegundos (µs)", "Milisegundos (ms)", "Segundos (s)", "Minutos (min)", 
                "Horas (h)", "Dias (d)", "Semanas (wk)", "Quinzenas", "Meses (mo)", "Anos (yr)", "Décadas", 
                "Séculos", "Milênios"
            ],
            "Temperature": ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)"],
            "Speed/Velocity": [
                "Metros por segundo (m/s)", "Quilômetros por hora (km/h)", "Milhas por hora (mph)", "Pés por segundo (ft/s)", 
                "Nós (kn)", "Mach", "Centímetros por segundo (cm/s)"
            ]
        }
    },
    ru: {
        title: "Конвертер Единиц",
        convert: "Конвертировать",
        toText: "в",
        convertButton: "Конвертировать",
        categories: [
            "Длина/Расстояние", "Вес/Масса", "Объём/Ёмкость", "Площадь", "Время", "Температура",
            "Скорость", "Ускорение", "Сила", "Энергия/Работа", "Мощность", "Давление",
            "Угол", "Частота", "Цифровое Хранилище", "Электрический Ток", "Напряжение", "Сопротивление"
        ],
        units: {
            "Length/Distance": [
                "Нанометры (nm)", "Микрометры (µm)", "Миллиметры (mm)", "Сантиметры (cm)", "Дециметры (dm)", 
                "Метры (m)", "Километры (km)", "Дюймы (in)", "Футы (ft)", "Ярды (yd)", "Мили (mi)", 
                "Морские мили (nmi)", "Световые годы (ly)", "Парсеки (pc)", "Ангстремы (Å)", "Цепи", 
                "Фурлонги", "Сажени", "Лье"
            ],
            "Weight/Mass": [
                "Микрограммы (µg)", "Миллиграммы (mg)", "Граммы (g)", "Килограммы (kg)", "Метрические тонны (t)", 
                "Унции (oz)", "Фунты (lb)", "Стоуны (st)", "Короткие тонны", "Длинные тонны", "Караты (ct)", 
                "Гран (gr)", "Драхмы (dr)", "Центнеры (cwt)"
            ],
            "Volume/Capacity": [
                "Кубические сантиметры (cm³)", "Кубические метры (m³)", "Кубические дюймы (in³)", "Кубические футы (ft³)", 
                "Кубические ярды (yd³)", "Литры (L)", "Миллилитры (mL)", "Децилитры (dL)", "Гектолитры (hL)", 
                "Галлоны (US gal)", "Галлоны (имп гал)", "Кварты (qt)", "Пинты (pt)", "Жидкие унции (fl oz)", 
                "Чашки", "Чайные ложки (tsp)", "Столовые ложки (tbsp)", "Баррели (bbl)", "Бушели (bu)", "Пеки", "Гиллы"
            ],
            "Area": [
                "Квадратные миллиметры (mm²)", "Квадратные сантиметры (cm²)", "Квадратные метры (m²)", "Квадратные километры (km²)", 
                "Гектары (ha)", "Ары", "Квадратные дюймы (in²)", "Квадратные футы (ft²)", "Квадратные ярды (yd²)", 
                "Квадратные мили (mi²)", "Акры", "Руды", "Секции", "Тауншипы"
            ],
            "Time": [
                "Наносекунды (ns)", "Микросекунды (µs)", "Миллисекунды (ms)", "Секунды (s)", "Минуты (min)", 
                "Часы (h)", "Дни (d)", "Недели (wk)", "Двухнедельные периоды", "Месяцы (mo)", "Годы (yr)", "Десятилетия", 
                "Века", "Тысячелетия"
            ],
            "Temperature": ["Цельсий (°C)", "Фаренгейт (°F)", "Кельвин (K)", "Ранкин (°R)"],
            "Speed/Velocity": [
                "Метры в секунду (m/s)", "Километры в час (km/h)", "Мили в час (mph)", "Футы в секунду (ft/s)", 
                "Узлы (kn)", "Мах", "Сантиметры в секунду (cm/s)"
            ]
        }
    },
    zh: {
        title: "单位转换器",
        convert: "转换",
        toText: "至",
        convertButton: "转换",
        categories: [
            "长度/距离", "重量/质量", "体积/容量", "面积", "时间", "温度",
            "速度", "加速度", "力", "能量/功", "功率", "压力",
            "角度", "频率", "数字存储", "电流", "电压", "电阻"
        ],
        units: {
            "Length/Distance": [
                "纳米 (nm)", "微米 (µm)", "毫米 (mm)", "厘米 (cm)", "分米 (dm)", 
                "米 (m)", "千米 (km)", "英寸 (in)", "英尺 (ft)", "码 (yd)", "英里 (mi)", 
                "海里 (nmi)", "光年 (ly)", "秒差距 (pc)", "埃 (Å)", "链", 
                "浪", "竿", "里"
            ],
            "Weight/Mass": [
                "微克 (µg)", "毫克 (mg)", "克 (g)", "千克 (kg)", "公吨 (t)", 
                "盎司 (oz)", "磅 (lb)", "石 (st)", "短吨", "长吨", "克拉 (ct)", 
                "格令 (gr)", "打兰 (dr)", "担 (cwt)"
            ],
            "Volume/Capacity": [
                "立方厘米 (cm³)", "立方米 (m³)", "立方英寸 (in³)", "立方英尺 (ft³)", 
                "立方码 (yd³)", "升 (L)", "毫升 (mL)", "分升 (dL)", "公石 (hL)", 
                "加仑 (US gal)", "加仑 (imp gal)", "夸脱 (qt)", "品脱 (pt)", "液盎司 (fl oz)", 
                "杯", "茶匙 (tsp)", "汤匙 (tbsp)", "桶 (bbl)", "蒲式耳 (bu)", "配克", "吉尔"
            ],
            "Area": [
                "平方毫米 (mm²)", "平方厘米 (cm²)", "平方米 (m²)", "平方千米 (km²)", 
                "公顷 (ha)", "公亩", "平方英寸 (in²)", "平方英尺 (ft²)", "平方码 (yd²)", 
                "平方英里 (mi²)", "英亩", "路德", "分区", "乡镇"
            ],
            "Time": [
                "纳秒 (ns)", "微秒 (µs)", "毫秒 (ms)", "秒 (s)", "分钟 (min)", 
                "小时 (h)", "天 (d)", "周 (wk)", "两周", "月 (mo)", "年 (yr)", "十年", 
                "世纪", "千年"
            ],
            "Temperature": ["摄氏度 (°C)", "华氏度 (°F)", "开尔文 (K)", "兰金 (°R)"],
            "Speed/Velocity": [
                "米每秒 (m/s)", "千米每小时 (km/h)", "英里每小时 (mph)", "英尺每秒 (ft/s)", 
                "节 (kn)", "马赫", "厘米每秒 (cm/s)"
            ]
        }
    },
    ja: {
        title: "単位変換器",
        convert: "変換",
        toText: "へ",
        convertButton: "変換",
        categories: [
            "長さ/距離", "重さ/質量", "体積/容量", "面積", "時間", "温度",
            "速度", "加速度", "力", "エネルギー/仕事", "電力", "圧力",
            "角度", "周波数", "デジタルストレージ", "電流", "電圧", "抵抗"
        ],
        units: {
            "Length/Distance": [
                "ナノメートル (nm)", "マイクロメートル (µm)", "ミリメートル (mm)", "センチメートル (cm)", "デシメートル (dm)", 
                "メートル (m)", "キロメートル (km)", "インチ (in)", "フィート (ft)", "ヤード (yd)", "マイル (mi)", 
                "海里 (nmi)", "光年 (ly)", "パーセク (pc)", "オングストローム (Å)", "チェーン", 
                "ファーロング", "ロッド", "リーグ"
            ],
            "Weight/Mass": [
                "マイクログラム (µg)", "ミリグラム (mg)", "グラム (g)", "キログラム (kg)", "メトリックトン (t)", 
                "オンス (oz)", "ポンド (lb)", "ストーン (st)", "ショートトン", "ロングトン", "カラット (ct)", 
                "グレイン (gr)", "ドラム (dr)", "ハンドレッドウェイト (cwt)"
            ],
            "Volume/Capacity": [
                "立方センチメートル (cm³)", "立方メートル (m³)", "立方インチ (in³)", "立方フィート (ft³)", 
                "立方ヤード (yd³)", "リットル (L)", "ミリリットル (mL)", "デシリットル (dL)", "ヘクトリットル (hL)", 
                "ガロン (US gal)", "ガロン (imp gal)", "クォート (qt)", "パイント (pt)", "液量オンス (fl oz)", 
                "カップ", "小さじ (tsp)", "大さじ (tbsp)", "バレル (bbl)", "ブッシェル (bu)", "ペック", "ギル"
            ],
            "Area": [
                "平方ミリメートル (mm²)", "平方センチメートル (cm²)", "平方メートル (m²)", "平方キロメートル (km²)", 
                "ヘクタール (ha)", "アール", "平方インチ (in²)", "平方フィート (ft²)", "平方ヤード (yd²)", 
                "平方マイル (mi²)", "エーカー", "ルード", "セクション", "タウンシップ"
            ],
            "Time": [
                "ナノ秒 (ns)", "マイクロ秒 (µs)", "ミリ秒 (ms)", "秒 (s)", "分 (min)", 
                "時間 (h)", "日 (d)", "週 (wk)", "2週間", "月 (mo)", "年 (yr)", "十年", 
                "世紀", "千年"
            ],
            "Temperature": ["摂氏 (°C)", "華氏 (°F)", "ケルビン (K)", "ランキン (°R)"],
            "Speed/Velocity": [
                "メートル毎秒 (m/s)", "キロメートル毎時 (km/h)", "マイル毎時 (mph)", "フィート毎秒 (ft/s)", 
                "ノット (kn)", "マッハ", "センチメートル毎秒 (cm/s)"
            ]
        }
    }
};

const conversionFactors = {
    "Length/Distance": {
        "Nanometers (nm)": 1e-9, "Micrometers (µm)": 1e-6, "Millimeters (mm)": 0.001, 
        "Centimeters (cm)": 0.01, "Decimeters (dm)": 0.1, "Meters (m)": 1, "Kilometers (km)": 1000,
        "Inches (in)": 0.0254, "Feet (ft)": 0.3048, "Yards (yd)": 0.9144, "Miles (mi)": 1609.34,
        "Nautical miles (nmi)": 1852, "Light-years (ly)": 9.461e15, "Parsecs (pc)": 3.086e16,
        "Angstroms (Å)": 1e-10, "Chains": 20.1168, "Furlongs": 201.168, "Rods": 5.0292, "Leagues": 4828.03
    },
    "Weight/Mass": {
        "Micrograms (µg)": 1e-9, "Milligrams (mg)": 1e-6, "Grams (g)": 0.001, "Kilograms (kg)": 1,
        "Metric tons (t)": 1000, "Ounces (oz)": 0.0283495, "Pounds (lb)": 0.453592,
        "Stones (st)": 6.35029, "Short tons": 907.185, "Long tons": 1016.05, "Carats (ct)": 0.0002,
        "Grains (gr)": 0.0000647989, "Drams (dr)": 0.00177185, "Hundredweight (cwt)": 50.8023
    },
    "Volume/Capacity": {
        "Cubic centimeters (cm³)": 0.001, "Cubic meters (m³)": 1000, "Cubic inches (in³)": 0.0163871,
        "Cubic feet (ft³)": 28.3168, "Cubic yards (yd³)": 764.555, "Liters (L)": 1,
        "Milliliters (mL)": 0.001, "Deciliters (dL)": 0.1, "Hectoliters (hL)": 100,
        "Gallons (US gal)": 3.78541, "Gallons (Imperial gal)": 4.54609, "Quarts (qt)": 0.946353,
        "Pints (pt)": 0.473176, "Fluid ounces (fl oz)": 0.0295735, "Cups": 0.236588,
        "Teaspoons (tsp)": 0.00492892, "Tablespoons (tbsp)": 0.0147868, "Barrels (bbl)": 158.987,
        "Bushels (bu)": 35.2391, "Pecks": 8.80977, "Gills": 0.118294
    },
    "Area": {
        "Square millimeters (mm²)": 1e-6, "Square centimeters (cm²)": 0.0001, "Square meters (m²)": 1,
        "Square kilometers (km²)": 1e6, "Hectares (ha)": 10000, "Ares": 100,
        "Square inches (in²)": 0.00064516, "Square feet (ft²)": 0.092903, "Square yards (yd²)": 0.836127,
        "Square miles (mi²)": 2.58999e6, "Acres": 4046.86, "Roods": 1011.71,
        "Sections": 2.58999e6, "Townships": 9.32396e7
    },
    "Time": {
        "Nanoseconds (ns)": 1e-9, "Microseconds (µs)": 1e-6, "Milliseconds (ms)": 0.001,
        "Seconds (s)": 1, "Minutes (min)": 60, "Hours (h)": 3600, "Days (d)": 86400,
        "Weeks (wk)": 604800, "Fortnights": 1209600, "Months (mo)": 2.628e6,
        "Years (yr)": 3.156e7, "Decades": 3.156e8, "Centuries": 3.156e9, "Millennia": 3.156e10
    },
    "Temperature": {
        "Celsius (°C)": "C", "Fahrenheit (°F)": "F", "Kelvin (K)": "K", "Rankine (°R)": "R"
    },
    "Speed/Velocity": {
        "Meters per second (m/s)": 1, "Kilometers per hour (km/h)": 0.277778,
        "Miles per hour (mph)": 0.44704, "Feet per second (ft/s)": 0.3048,
        "Knots (kn)": 0.514444, "Mach": 343, "Centimeters per second (cm/s)": 0.01
    },
    "Acceleration": {
        "Meters per second squared (m/s²)": 1, "Feet per second squared (ft/s²)": 0.3048, "Standard gravity (g)": 9.80665
    },
    "Force": {
        "Newtons (N)": 1, "Kilonewtons (kN)": 1000, "Dynes (dyn)": 1e-5, "Pounds-force (lbf)": 4.44822, "Kilopounds-force (kip)": 4448.22
    },
    "Energy/Work": {
        "Joules (J)": 1, "Kilojoules (kJ)": 1000, "Megajoules (MJ)": 1e6, "Watt-hours (Wh)": 3600,
        "Kilowatt-hours (kWh)": 3.6e6, "Megawatt-hours (MWh)": 3.6e9, "Calories (cal)": 4.184,
        "Kilocalories (kcal)": 4184, "British Thermal Units (BTU)": 1055.06, "Therms": 1.05506e8,
        "Foot-pounds (ft-lb)": 1.35582, "Electronvolts (eV)": 1.60218e-19
    },
    "Power": {
        "Watts (W)": 1, "Kilowatts (kW)": 1000, "Megawatts (MW)": 1e6, "Horsepower (hp)": 745.7,
        "Foot-pounds per second (ft-lb/s)": 1.35582
    },
    "Pressure": {
        "Pascals (Pa)": 1, "Kilopascals (kPa)": 1000, "Megapascals (MPa)": 1e6, "Bars": 1e5,
        "Millibars (mbar)": 100, "Atmospheres (atm)": 101325, "Millimeters of mercury (mmHg)": 133.322,
        "Inches of mercury (inHg)": 3386.39, "Pounds per square inch (psi)": 6894.76, "Torr": 133.322
    },
    "Angle": {
        "Degrees (°)": 1, "Radians (rad)": 57.2958, "Gradians (grad)": 0.9, "Minutes (')": 0.0166667,
        "Seconds (\")": 0.000277778, "Turns": 360
    },
    "Frequency": {
        "Hertz (Hz)": 1, "Kilohertz (kHz)": 1000, "Megahertz (MHz)": 1e6, "Gigahertz (GHz)": 1e9,
        "Cycles per second (cps)": 1
    },
    "Digital Storage": {
        "Bits (b)": 1, "Bytes (B)": 8, "Kilobytes (KB)": 8000, "Megabytes (MB)": 8e6,
        "Gigabytes (GB)": 8e9, "Terabytes (TB)": 8e12, "Petabytes (PB)": 8e15, "Exabytes (EB)": 8e18,
        "Kibibytes (KiB)": 8192, "Mebibytes (MiB)": 8.38861e6, "Gibibytes (GiB)": 8.58993e9, "Tebibytes (TiB)": 8.79609e12
    },
    "Electric Current": {
        "Amperes (A)": 1, "Milliamperes (mA)": 0.001, "Microamperes (µA)": 1e-6
    },
    "Voltage": {
        "Volts (V)": 1, "Millivolts (mV)": 0.001, "Kilovolts (kV)": 1000
    },
    "Resistance": {
        "Ohms (Ω)": 1, "Kilohms (kΩ)": 1000, "Megohms (MΩ)": 1e6
    }
};

const defaultUnits = {
    "Length/Distance": { from: "Meters (m)", to: "Feet (ft)" },
    "Weight/Mass": { from: "Kilograms (kg)", to: "Pounds (lb)" },
    "Volume/Capacity": { from: "Liters (L)", to: "Gallons (US gal)" },
    "Area": { from: "Square meters (m²)", to: "Square feet (ft²)" },
    "Time": { from: "Seconds (s)", to: "Minutes (min)" },
    "Temperature": { from: "Celsius (°C)", to: "Fahrenheit (°F)" },
    "Speed/Velocity": { from: "Kilometers per hour (km/h)", to: "Miles per hour (mph)" },
    "Acceleration": { from: "Meters per second squared (m/s²)", to: "Feet per second squared (ft/s²)" },
    "Force": { from: "Newtons (N)", to: "Pounds-force (lbf)" },
    "Energy/Work": { from: "Joules (J)", to: "Calories (cal)" },
    "Power": { from: "Watts (W)", to: "Horsepower (hp)" },
    "Pressure": { from: "Pascals (Pa)", to: "Pounds per square inch (psi)" },
    "Angle": { from: "Degrees (°)", to: "Radians (rad)" },
    "Frequency": { from: "Hertz (Hz)", to: "Kilohertz (kHz)" },
    "Digital Storage": { from: "Megabytes (MB)", to: "Gigabytes (GB)" },
    "Electric Current": { from: "Amperes (A)", to: "Milliamperes (mA)" },
    "Voltage": { from: "Volts (V)", to: "Millivolts (mV)" },
    "Resistance": { from: "Ohms (Ω)", to: "Kilohms (kΩ)" }
};

let selectedCategory = "Length/Distance"; // Default category

function updateLanguage() {
    const lang = document.getElementById("language").value;
    const t = translations[lang];
    document.getElementById("title").innerText = t.title;
    document.getElementById("convert").innerText = t.convert;
    document.getElementById("toText").innerText = t.toText;
    document.getElementById("convertButton").innerText = t.convertButton;

    const grid = document.getElementById("categoryGrid");
    grid.innerHTML = "";
    t.categories.forEach((cat, index) => {
        const button = document.createElement("button");
        button.className = "category-button";
        button.innerText = cat;
        button.onclick = () => selectCategory(cat);
        if (cat === selectedCategory || (lang === "en" && translations["en"].categories[index] === selectedCategory)) {
            button.classList.add("active");
        }
        grid.appendChild(button);
    });

    updateUnits();
}

function selectCategory(category) {
    const lang = document.getElementById("language").value;
    const t = translations[lang];
    selectedCategory = category;
    const buttons = document.getElementsByClassName("category-button");
    for (let button of buttons) {
        button.classList.remove("active");
        if (button.innerText === category) button.classList.add("active");
    }
    updateUnits();
}

function updateUnits() {
    const lang = document.getElementById("language").value;
    const t = translations[lang];
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    const unitList = t.units[selectedCategory] || translations["en"].units[selectedCategory] || [];
    unitList.forEach(unit => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.text = unit;
        option2.text = unit;
        fromUnit.add(option1);
        toUnit.add(option2);
    });

    // Set default units based on the selected language
    const englishUnits = translations["en"].units[selectedCategory];
    const defaults = defaultUnits[selectedCategory] || defaultUnits["Length/Distance"];
    const fromIndex = englishUnits.indexOf(defaults.from);
    const toIndex = englishUnits.indexOf(defaults.to);
    fromUnit.value = unitList[fromIndex] || unitList[0];
    toUnit.value = unitList[toIndex] || unitList[1];
}

function convert() {
    const lang = document.getElementById("language").value;
    const t = translations[lang];
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (selectedCategory === "Temperature") {
        const tempUnits = t.units["Temperature"];
        const fromIndex = tempUnits.indexOf(fromUnit);
        const toIndex = tempUnits.indexOf(toUnit);
        const englishTempUnits = translations["en"].units["Temperature"];
        const fromEnglish = englishTempUnits[fromIndex];
        const toEnglish = englishTempUnits[toIndex];

        if (fromEnglish === "Celsius (°C)" && toEnglish === "Fahrenheit (°F)") {
            result = (inputValue * 9/5) + 32;
        } else if (fromEnglish === "Fahrenheit (°F)" && toEnglish === "Celsius (°C)") {
            result = (inputValue - 32) * 5/9;
        } else if (fromEnglish === "Celsius (°C)" && toEnglish === "Kelvin (K)") {
            result = inputValue + 273.15;
        } else if (fromEnglish === "Kelvin (K)" && toEnglish === "Celsius (°C)") {
            result = inputValue - 273.15;
        } else if (fromEnglish === "Fahrenheit (°F)" && toEnglish === "Kelvin (K)") {
            result = ((inputValue - 32) * 5/9) + 273.15;
        } else if (fromEnglish === "Kelvin (K)" && toEnglish === "Fahrenheit (°F)") {
            result = ((inputValue - 273.15) * 9/5) + 32;
        } else if (fromEnglish === "Rankine (°R)" && toEnglish === "Fahrenheit (°F)") {
            result = inputValue - 459.67;
        } else if (fromEnglish === "Fahrenheit (°F)" && toEnglish === "Rankine (°R)") {
            result = inputValue + 459.67;
        } else {
            result = inputValue; // Same unit conversion
        }
    } else if (translations["en"].categories.includes(selectedCategory)) {
        const baseUnits = translations["en"].units[selectedCategory];
        const translatedUnits = t.units[selectedCategory];
        const fromIndex = translatedUnits.indexOf(fromUnit);
        const toIndex = translatedUnits.indexOf(toUnit);
        const fromEnglish = baseUnits[fromIndex];
        const toEnglish = baseUnits[toIndex];
        const valueInBase = inputValue * conversionFactors[selectedCategory][fromEnglish];
        result = valueInBase / conversionFactors[selectedCategory][toEnglish];
    } else {
        result = "Conversion logic for this category is not yet implemented.";
    }

    document.getElementById("result").innerText = isNaN(result) ? 
        (t.invalid || "Please enter a valid number") : 
        `${inputValue} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
}

// Update copyright dynamically
function updateCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerText = `© ${currentYear} unitsconvertsonline.com`;
}

// Initialize
updateLanguage();
updateCopyright();