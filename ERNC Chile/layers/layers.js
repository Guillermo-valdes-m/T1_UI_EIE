var wms_layers = [];

var format_Chileporregiones_0 = new ol.format.GeoJSON();
var features_Chileporregiones_0 = format_Chileporregiones_0.readFeatures(json_Chileporregiones_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chileporregiones_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chileporregiones_0.addFeatures(features_Chileporregiones_0);
var lyr_Chileporregiones_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chileporregiones_0, 
                style: style_Chileporregiones_0,
                popuplayertitle: 'Chile por regiones',
                interactive: false,
                title: '<img src="styles/legend/Chileporregiones_0.png" /> Chile por regiones'
            });
var format_biomasa_1 = new ol.format.GeoJSON();
var features_biomasa_1 = format_biomasa_1.readFeatures(json_biomasa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_biomasa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_biomasa_1.addFeatures(features_biomasa_1);
var lyr_biomasa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_biomasa_1, 
                style: style_biomasa_1,
                popuplayertitle: 'biomasa',
                interactive: true,
                title: '<img src="styles/legend/biomasa_1.png" /> biomasa'
            });
var format_csp_2 = new ol.format.GeoJSON();
var features_csp_2 = format_csp_2.readFeatures(json_csp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_csp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_csp_2.addFeatures(features_csp_2);
var lyr_csp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_csp_2, 
                style: style_csp_2,
                popuplayertitle: 'csp',
                interactive: true,
                title: '<img src="styles/legend/csp_2.png" /> csp'
            });
var format_eolica_3 = new ol.format.GeoJSON();
var features_eolica_3 = format_eolica_3.readFeatures(json_eolica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eolica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eolica_3.addFeatures(features_eolica_3);
var lyr_eolica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eolica_3, 
                style: style_eolica_3,
                popuplayertitle: 'eolica ',
                interactive: true,
                title: '<img src="styles/legend/eolica_3.png" /> eolica '
            });
var format_geotermica_4 = new ol.format.GeoJSON();
var features_geotermica_4 = format_geotermica_4.readFeatures(json_geotermica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geotermica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geotermica_4.addFeatures(features_geotermica_4);
var lyr_geotermica_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geotermica_4, 
                style: style_geotermica_4,
                popuplayertitle: 'geotermica ',
                interactive: true,
                title: '<img src="styles/legend/geotermica_4.png" /> geotermica '
            });
var format_Minihidraullica_5 = new ol.format.GeoJSON();
var features_Minihidraullica_5 = format_Minihidraullica_5.readFeatures(json_Minihidraullica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minihidraullica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minihidraullica_5.addFeatures(features_Minihidraullica_5);
var lyr_Minihidraullica_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minihidraullica_5, 
                style: style_Minihidraullica_5,
                popuplayertitle: 'Mini hidraullica',
                interactive: true,
                title: '<img src="styles/legend/Minihidraullica_5.png" /> Mini hidraullica'
            });
var format_solarfotovoltaica_6 = new ol.format.GeoJSON();
var features_solarfotovoltaica_6 = format_solarfotovoltaica_6.readFeatures(json_solarfotovoltaica_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_solarfotovoltaica_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_solarfotovoltaica_6.addFeatures(features_solarfotovoltaica_6);
var lyr_solarfotovoltaica_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_solarfotovoltaica_6, 
                style: style_solarfotovoltaica_6,
                popuplayertitle: 'solar fotovoltaica',
                interactive: true,
                title: '<img src="styles/legend/solarfotovoltaica_6.png" /> solar fotovoltaica'
            });
var group_ERNCChile = new ol.layer.Group({
                                layers: [lyr_biomasa_1,lyr_csp_2,lyr_eolica_3,lyr_geotermica_4,lyr_Minihidraullica_5,lyr_solarfotovoltaica_6,],
                                fold: 'open',
                                title: 'ERNC Chile'});

lyr_Chileporregiones_0.setVisible(true);lyr_biomasa_1.setVisible(true);lyr_csp_2.setVisible(true);lyr_eolica_3.setVisible(true);lyr_geotermica_4.setVisible(true);lyr_Minihidraullica_5.setVisible(true);lyr_solarfotovoltaica_6.setVisible(true);
var layersList = [lyr_Chileporregiones_0,group_ERNCChile];
lyr_Chileporregiones_0.set('fieldAliases', {'objectid': 'objectid', 'cir_sena': 'cir_sena', 'codregion': 'codregion', 'area_km': 'area_km', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', });
lyr_biomasa_1.set('fieldAliases', {'nombre': 'nombre', 'region': 'region', 'potencial bruto (MW)': 'potencial bruto (MW)', 'potencial tecnico (MW)': 'potencial tecnico (MW)', 'potencial economico (MW)': 'potencial economico (MW)', 'estado': 'estado', 'empresa': 'empresa', 'tipo': 'tipo', 'descripcion': 'descripcion', 'combustible': 'combustible', 'capacidad (MW)': 'capacidad (MW)', });
lyr_csp_2.set('fieldAliases', {'nombre': 'nombre', 'region': 'region', 'potencial bruto (MW)': 'potencial bruto (MW)', 'potencial tecnico (MW)': 'potencial tecnico (MW)', 'potencial economico (MW)': 'potencial economico (MW)', 'estado': 'estado', 'empresa': 'empresa', 'tipo': 'tipo', 'descripcion': 'descripcion', 'kwh/m2/año': 'kwh/m2/año', 'almacenamiento (horas)': 'almacenamiento (horas)', 'tecnologia': 'tecnologia', });
lyr_eolica_3.set('fieldAliases', {'nombre': 'nombre', 'region': 'region', 'potencial bruto (MW)': 'potencial bruto (MW)', 'potencial tecnico (MW)': 'potencial tecnico (MW)', 'potencial economico (MW)': 'potencial economico (MW)', 'estado': 'estado', 'empresa': 'empresa', 'tipo': 'tipo', 'descripcion': 'descripcion', 'factor planta': 'factor planta', });
lyr_geotermica_4.set('fieldAliases', {'nombre': 'nombre', 'region': 'region', 'potencial bruto (MW)': 'potencial bruto (MW)', 'potencial tecnico (MW)': 'potencial tecnico (MW)', 'potencial economico (MW)': 'potencial economico (MW)', 'estado': 'estado', 'empresa': 'empresa', 'tipo': 'tipo', 'descripcion': 'descripcion', 'temperatura yacimiento (°C)': 'temperatura yacimiento (°C)', 'profundidad pozo (m)': 'profundidad pozo (m)', });
lyr_Minihidraullica_5.set('fieldAliases', {'nombre': 'nombre', 'region': 'region', 'potencial bruto (MW)': 'potencial bruto (MW)', 'potencial tecnico (MW)': 'potencial tecnico (MW)', 'potencial economico (MW)': 'potencial economico (MW)', 'estado': 'estado', 'empresa': 'empresa', 'tipo': 'tipo', 'descripcion': 'descripcion', 'capacidad instalada (MW)': 'capacidad instalada (MW)', });
lyr_solarfotovoltaica_6.set('fieldAliases', {'nombre': 'nombre', 'region': 'region', 'potencial bruto (MW)': 'potencial bruto (MW)', 'potencial tecnico (MW)': 'potencial tecnico (MW)', 'potencial economico (MW)': 'potencial economico (MW)', 'estado': 'estado', 'empresa': 'empresa', 'tipo': 'tipo', 'descripcion': 'descripcion', 'potencia instalada (MWp)': 'potencia instalada (MWp)', 'kwh/m2/año': 'kwh/m2/año', 'tecnologia': 'tecnologia', });
lyr_Chileporregiones_0.set('fieldImages', {'objectid': 'Range', 'cir_sena': 'Range', 'codregion': 'Range', 'area_km': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', });
lyr_biomasa_1.set('fieldImages', {'nombre': 'TextEdit', 'region': 'TextEdit', 'potencial bruto (MW)': 'Range', 'potencial tecnico (MW)': 'Range', 'potencial economico (MW)': 'Range', 'estado': 'TextEdit', 'empresa': 'TextEdit', 'tipo': 'TextEdit', 'descripcion': 'TextEdit', 'combustible': 'TextEdit', 'capacidad (MW)': 'TextEdit', });
lyr_csp_2.set('fieldImages', {'nombre': 'TextEdit', 'region': 'TextEdit', 'potencial bruto (MW)': 'Range', 'potencial tecnico (MW)': 'Range', 'potencial economico (MW)': 'Range', 'estado': 'TextEdit', 'empresa': 'TextEdit', 'tipo': 'TextEdit', 'descripcion': 'TextEdit', 'kwh/m2/año': 'Range', 'almacenamiento (horas)': 'TextEdit', 'tecnologia': 'TextEdit', });
lyr_eolica_3.set('fieldImages', {'nombre': 'TextEdit', 'region': 'TextEdit', 'potencial bruto (MW)': 'Range', 'potencial tecnico (MW)': 'Range', 'potencial economico (MW)': 'Range', 'estado': 'TextEdit', 'empresa': 'TextEdit', 'tipo': 'TextEdit', 'descripcion': 'TextEdit', 'factor planta': 'TextEdit', });
lyr_geotermica_4.set('fieldImages', {'nombre': 'TextEdit', 'region': 'TextEdit', 'potencial bruto (MW)': 'Range', 'potencial tecnico (MW)': 'Range', 'potencial economico (MW)': 'Range', 'estado': 'TextEdit', 'empresa': 'TextEdit', 'tipo': 'TextEdit', 'descripcion': 'TextEdit', 'temperatura yacimiento (°C)': 'Range', 'profundidad pozo (m)': 'Range', });
lyr_Minihidraullica_5.set('fieldImages', {'nombre': 'TextEdit', 'region': 'TextEdit', 'potencial bruto (MW)': 'Range', 'potencial tecnico (MW)': 'Range', 'potencial economico (MW)': 'Range', 'estado': 'TextEdit', 'empresa': 'TextEdit', 'tipo': 'TextEdit', 'descripcion': 'TextEdit', 'capacidad instalada (MW)': 'TextEdit', });
lyr_solarfotovoltaica_6.set('fieldImages', {'nombre': 'TextEdit', 'region': 'TextEdit', 'potencial bruto (MW)': 'Range', 'potencial tecnico (MW)': 'Range', 'potencial economico (MW)': 'Range', 'estado': 'TextEdit', 'empresa': 'TextEdit', 'tipo': 'TextEdit', 'descripcion': 'TextEdit', 'potencia instalada (MWp)': 'Range', 'kwh/m2/año': 'Range', 'tecnologia': 'TextEdit', });
lyr_Chileporregiones_0.set('fieldLabels', {'objectid': 'no label', 'cir_sena': 'no label', 'codregion': 'no label', 'area_km': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', });
lyr_biomasa_1.set('fieldLabels', {'nombre': 'header label - always visible', 'region': 'header label - always visible', 'potencial bruto (MW)': 'header label - always visible', 'potencial tecnico (MW)': 'header label - always visible', 'potencial economico (MW)': 'header label - always visible', 'estado': 'header label - always visible', 'empresa': 'header label - always visible', 'tipo': 'header label - always visible', 'descripcion': 'header label - always visible', 'combustible': 'header label - always visible', 'capacidad (MW)': 'header label - always visible', });
lyr_csp_2.set('fieldLabels', {'nombre': 'header label - always visible', 'region': 'header label - always visible', 'potencial bruto (MW)': 'header label - always visible', 'potencial tecnico (MW)': 'header label - always visible', 'potencial economico (MW)': 'header label - always visible', 'estado': 'header label - always visible', 'empresa': 'header label - always visible', 'tipo': 'header label - always visible', 'descripcion': 'header label - always visible', 'kwh/m2/año': 'header label - always visible', 'almacenamiento (horas)': 'header label - always visible', 'tecnologia': 'header label - always visible', });
lyr_eolica_3.set('fieldLabels', {'nombre': 'header label - always visible', 'region': 'header label - always visible', 'potencial bruto (MW)': 'header label - always visible', 'potencial tecnico (MW)': 'header label - always visible', 'potencial economico (MW)': 'header label - always visible', 'estado': 'header label - always visible', 'empresa': 'header label - always visible', 'tipo': 'header label - always visible', 'descripcion': 'header label - always visible', 'factor planta': 'header label - always visible', });
lyr_geotermica_4.set('fieldLabels', {'nombre': 'header label - always visible', 'region': 'header label - always visible', 'potencial bruto (MW)': 'header label - always visible', 'potencial tecnico (MW)': 'header label - always visible', 'potencial economico (MW)': 'header label - always visible', 'estado': 'header label - always visible', 'empresa': 'header label - always visible', 'tipo': 'header label - always visible', 'descripcion': 'header label - always visible', 'temperatura yacimiento (°C)': 'header label - always visible', 'profundidad pozo (m)': 'header label - always visible', });
lyr_Minihidraullica_5.set('fieldLabels', {'nombre': 'header label - always visible', 'region': 'header label - always visible', 'potencial bruto (MW)': 'header label - always visible', 'potencial tecnico (MW)': 'header label - always visible', 'potencial economico (MW)': 'header label - always visible', 'estado': 'header label - always visible', 'empresa': 'header label - always visible', 'tipo': 'header label - always visible', 'descripcion': 'header label - always visible', 'capacidad instalada (MW)': 'header label - always visible', });
lyr_solarfotovoltaica_6.set('fieldLabels', {'nombre': 'header label - always visible', 'region': 'header label - visible with data', 'potencial bruto (MW)': 'header label - always visible', 'potencial tecnico (MW)': 'header label - always visible', 'potencial economico (MW)': 'header label - always visible', 'estado': 'header label - always visible', 'empresa': 'header label - always visible', 'tipo': 'header label - always visible', 'descripcion': 'header label - always visible', 'potencia instalada (MWp)': 'header label - always visible', 'kwh/m2/año': 'header label - always visible', 'tecnologia': 'header label - always visible', });
lyr_solarfotovoltaica_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});