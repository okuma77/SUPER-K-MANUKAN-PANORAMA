var APP_DATA = {
  "scenes": [
    {
      "id": "0-eksterior",
      "name": "EKSTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2427066085362064,
          "pitch": 0.131073701440803,
          "rotation": 0,
          "target": "1-parkir-depan"
        },
        {
          "yaw": -0.39205315258537965,
          "pitch": 0.08781861281658365,
          "rotation": 0,
          "target": "2-parkir-samping"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parkir-depan",
      "name": "PARKIR DEPAN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.820220797143614,
          "pitch": 0.1249829477027049,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": -1.0264123432704793,
          "pitch": 0.0322446087343895,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": -0.3916868711989139,
          "pitch": 0.11848199431574713,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": 0.12371730982310325,
          "pitch": 0.10755991208957916,
          "rotation": 0,
          "target": "4-interior2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parkir-samping",
      "name": "PARKIR SAMPING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1765480262530659,
          "pitch": 0.08114482474852025,
          "rotation": 0,
          "target": "1-parkir-depan"
        },
        {
          "yaw": 2.148199016124181,
          "pitch": 0.10231464816214597,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": -0.079264820356574,
          "pitch": 0.1768855840021324,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": 0.3334734327926778,
          "pitch": 0.11489534415886737,
          "rotation": 0,
          "target": "4-interior2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-interior1",
      "name": "INTERIOR1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.82681164331595,
          "pitch": 0.3929961117526428,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": 1.1794612189111024,
          "pitch": 0.23805397059684097,
          "rotation": 0,
          "target": "1-parkir-depan"
        },
        {
          "yaw": 1.7709366824404729,
          "pitch": 0.04706662255617644,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": 0.19774959927907076,
          "pitch": 0.2772155722072043,
          "rotation": 0,
          "target": "4-interior2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-interior2",
      "name": "INTERIOR2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1113747211305594,
          "pitch": 0.2702784081916967,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": -2.332390138671876,
          "pitch": 0.2002390560080105,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": 2.5665858993410264,
          "pitch": 0.25694424394249005,
          "rotation": 0,
          "target": "1-parkir-depan"
        },
        {
          "yaw": 2.7438994621864197,
          "pitch": 0.07641875473839121,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": -0.4949445361415954,
          "pitch": 0.2338517843052177,
          "rotation": 0,
          "target": "5-interior3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-interior3",
      "name": "INTERIOR3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6408755164461226,
          "pitch": 0.2539436367481933,
          "rotation": 0,
          "target": "4-interior2"
        },
        {
          "yaw": -2.1695806276565097,
          "pitch": 0.15500795068558837,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": 0.4395450485574788,
          "pitch": 0.1872004826167455,
          "rotation": 0,
          "target": "6-interior4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-interior4",
      "name": "INTERIOR4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.473260183714019,
          "pitch": 0.33782209382485107,
          "rotation": 0,
          "target": "5-interior3"
        },
        {
          "yaw": 1.477032597129476,
          "pitch": 0.1510236546660888,
          "rotation": 0,
          "target": "4-interior2"
        },
        {
          "yaw": -1.628350969350322,
          "pitch": 0.28757835435346024,
          "rotation": 0,
          "target": "7-interior5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-interior5",
      "name": "INTERIOR5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0129504229854973,
          "pitch": 0.27147716338584793,
          "rotation": 0,
          "target": "6-interior4"
        },
        {
          "yaw": -0.13960081038403338,
          "pitch": 0.3337145811277651,
          "rotation": 0,
          "target": "8-interior6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-interior6",
      "name": "INTERIOR6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6169930427153876,
          "pitch": 0.29511762232290906,
          "rotation": 0,
          "target": "7-interior5"
        },
        {
          "yaw": 2.558429545851567,
          "pitch": 0.43757368500207505,
          "rotation": 0,
          "target": "9-interior7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-interior7",
      "name": "INTERIOR7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21278091285939027,
          "pitch": 0.35264262698050786,
          "rotation": 0,
          "target": "8-interior6"
        },
        {
          "yaw": 2.6758416901824216,
          "pitch": 0.42101033239650576,
          "rotation": 0,
          "target": "10-parkir-belakang"
        },
        {
          "yaw": 1.9886401283294433,
          "pitch": 0.12835923933813298,
          "rotation": 0,
          "target": "11-parkir-belakang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-parkir-belakang",
      "name": "PARKIR BELAKANG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13449458276153692,
          "pitch": 0.1689576446113037,
          "rotation": 0,
          "target": "9-interior7"
        },
        {
          "yaw": 0.3062705924891773,
          "pitch": -0.023164010859607842,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": 1.9911707289480232,
          "pitch": 0.21668910147184306,
          "rotation": 0,
          "target": "11-parkir-belakang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-parkir-belakang",
      "name": "PARKIR BELAKANG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6424868861348045,
          "pitch": 0.12134105515288063,
          "rotation": 0,
          "target": "10-parkir-belakang"
        },
        {
          "yaw": -0.29883732711504507,
          "pitch": 0.11297787118532909,
          "rotation": 0,
          "target": "9-interior7"
        },
        {
          "yaw": 0.462491990617119,
          "pitch": 0.04656303100883363,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": 0.3823663314832171,
          "pitch": -0.05201341215457411,
          "rotation": 0,
          "target": "0-eksterior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
