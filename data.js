var APP_DATA = {
  "scenes": [
    {
      "id": "0-entree",
      "name": "entree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3013426944920095
      },
      "linkHotspots": [
        {
          "yaw": -3.0925888884873114,
          "pitch": 0.10413416533739195,
          "rotation": 0,
          "target": "1-dressing"
        },
        {
          "yaw": -1.7569408544444887,
          "pitch": 0.031696727134223224,
          "rotation": 0,
          "target": "2-chambre-1"
        },
        {
          "yaw": -0.056216210262224564,
          "pitch": 0.3070435212805265,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dressing",
      "name": "dressing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5356086851525923,
          "pitch": 0.12152659900667828,
          "rotation": 0,
          "target": "0-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-chambre-1",
      "name": "chambre 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5302449123952613,
          "pitch": 0.05329338307481457,
          "rotation": 0,
          "target": "0-entree"
        },
        {
          "yaw": 0.09192999196121932,
          "pitch": -0.01390826504178122,
          "rotation": 0,
          "target": "3-terrasse-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-terrasse-1",
      "name": "terrasse 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11955329861887698,
          "pitch": 0.07475002501040073,
          "rotation": 0,
          "target": "5-chambre-2"
        },
        {
          "yaw": 1.2009167135285583,
          "pitch": -0.011617399474790346,
          "rotation": 0,
          "target": "2-chambre-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1255875297264133,
          "pitch": 0.33509430733017354,
          "rotation": 0,
          "target": "0-entree"
        },
        {
          "yaw": -1.6783423896517249,
          "pitch": 0.08147323087274572,
          "rotation": 0,
          "target": "5-chambre-2"
        },
        {
          "yaw": 0.4053923686342369,
          "pitch": -0.017963592563685182,
          "rotation": 0,
          "target": "6-chambre-3"
        },
        {
          "yaw": 0.7907952459462475,
          "pitch": -0.016865848504121317,
          "rotation": 0,
          "target": "7-cellier"
        },
        {
          "yaw": 1.8291496220074936,
          "pitch": 0.013277771671296179,
          "rotation": 0,
          "target": "8-sdb"
        },
        {
          "yaw": 2.7620848240664344,
          "pitch": -0.00796020205144643,
          "rotation": 0,
          "target": "9-wc"
        },
        {
          "yaw": -0.044668446499610326,
          "pitch": 0.23291589220082187,
          "rotation": 0,
          "target": "10-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre-2",
      "name": "chambre 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3621422747773675,
          "pitch": -0.033504408219666715,
          "rotation": 0,
          "target": "3-terrasse-1"
        },
        {
          "yaw": -2.0876389891596823,
          "pitch": -0.005003759960725773,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-chambre-3",
      "name": "chambre 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6393826684805948,
          "pitch": 0.06965011501761431,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cellier",
      "name": "cellier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0005978981318853,
          "pitch": 0.06786650479876144,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sdb",
      "name": "s.d.b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3095212331313046,
          "pitch": 0.19907101747914346,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wc",
      "name": "w.c",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0761516861104266,
          "pitch": 0.08712735664467353,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0067044519885861575,
          "pitch": 0.10639052081766387,
          "rotation": 0,
          "target": "11-cuisine"
        },
        {
          "yaw": 2.2866735474372284,
          "pitch": 0.27269114860876087,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cuisine",
      "name": "cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.051728942099338,
          "pitch": 0.2202760337906824,
          "rotation": 0,
          "target": "10-living"
        },
        {
          "yaw": -0.8376328506281148,
          "pitch": 0.02685727666550619,
          "rotation": 0,
          "target": "12-terrasse-2"
        },
        {
          "yaw": 2.748229307391317,
          "pitch": 0.13789672095420258,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-terrasse-2",
      "name": "terrasse 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10502750265953686,
          "pitch": 0.07286904361365032,
          "rotation": 0,
          "target": "11-cuisine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "f5 concept ouvert",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
