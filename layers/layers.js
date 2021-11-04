var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_shp_1 = new ol.format.GeoJSON();
var features_shp_1 = format_shp_1.readFeatures(json_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_1.addFeatures(features_shp_1);
var lyr_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shp_1, 
                style: style_shp_1,
                interactive: true,
                title: '<img src="styles/legend/shp_1.png" /> shp'
            });
var lyr_acc_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8348396.510422, -1328229.348287, -8323252.867825, -1309407.317128]
                            })
                        });
var format_c_rios_3 = new ol.format.GeoJSON();
var features_c_rios_3 = format_c_rios_3.readFeatures(json_c_rios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_rios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_3.addFeatures(features_c_rios_3);
var lyr_c_rios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_3, 
                style: style_c_rios_3,
                interactive: true,
                title: '<img src="styles/legend/c_rios_3.png" /> c_rios'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_shp_1.setVisible(true);lyr_acc_2.setVisible(true);lyr_c_rios_3.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_shp_1,lyr_acc_2,lyr_c_rios_3];
lyr_shp_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'area': 'area', });
lyr_c_rios_3.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_shp_1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'area': 'TextEdit', });
lyr_c_rios_3.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_shp_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'area': 'no label', });
lyr_c_rios_3.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});