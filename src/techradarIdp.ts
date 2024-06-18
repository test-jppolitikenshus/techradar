import { TechradarData } from "../../lib/main";

const data: TechradarData = {
  "id": "Internal Developer Platform",
  "rings": [
    {
      "id": "adopt",
      "name": "ADOPT"
    },
    {
      "id": "trial",
      "name": "TRIAL"
    },
    {
      "id": "assess",
      "name": "ASSESS"
    },
    {
      "id": "hold",
      "name": "HOLD",
      "color": "#e09b96"
    }
  ],
  "slices": [
    {
      "name": "Frameworks & Ecosystems",
      "blipsByRing": {
        "adopt": [
          {
            "name": "React",
            "icon": "\ue7ba"
          }
        ],
        "trial": [
          {
            "name": "Vue"
          },
          {
            "name": "Angular (2+)"
          }
        ],
        "assess": [],
        "hold": [
          {
            "name": "AngularJS (1)"
          },
          {
            "name": "jQuery"
          }
        ]
      }
    },
    {
      "name": "Linting & Formatting",
      "blipsByRing": {
        "adopt": [
          {
            "name": "ESLint",
            "icon": "\ue655"
          },
          {
            "name": "Prettier"
          }
        ],
        "trial": [],
        "assess": [
          {
            "name": "AirBNB Eslint Config"
          }
        ],
        "hold": []
      }
    },
    {
      "name": "Languages",
      "blipsByRing": {
        "adopt": [
          {
            "name": "CRA (Create React App)"
          }
        ],
        "trial": [],
        "assess": [
          {
            "name": "Next.js"
          },
          {
            "name": "React App Rewired"
          }
        ],
        "hold": []
      }
    },
    {
      "name": "Infrastucture",
      "blipsByRing": {
        "adopt": [
          {
            "name": "AWS CodePipeline",
            "icon": "\uf0ef"
          }
        ],
        "trial": [
          {
            "name": "Jenkins"
          }
        ],
        "assess": [],
        "hold": [
          {
            "name": "Bamboo",
            "state": "down"
          },
          {
            "name": "TeamCity"
          }
        ]
      }
    },
    {
      "name": "Datastores",
      "blipsByRing": {
        "adopt": [
          {
            "name": "Postgres"
          },
          {
            "name": "Redis",
            "state": "up",
            "url": "https://redis.io/"
          }
        ],
        "trial": [
          {
            "name": "MongoDB"
          }
        ],
        "assess": [
          {
            "name": "Cassandra"
          }
        ],
        "hold": [
          {
            "name": "MySQL"
          },
          {
            "name": "SQLite"
          },
          {
            "name": "CouchDB",
            "state": "up"
          }
        ]
      }
    },
    {
      "name": "Data Management",
      "blipsByRing": {
        "adopt": [
          {
            "name": "REST"
          },
          {
            "name": "2 person integrity Vault in Rust",
            "state": "up",
            "url": "https://eb.dk/"
          },
          {
            "name": "hest",
            "url": "https://dygtighest.dk/"
          }
        ],
        "trial": [
          {
            "name": "GraphQL"
          },
          {
            "name": "Apollo Client"
          }
        ],
        "assess": [
          {
            "name": "Falcor"
          }
        ],
        "hold": [
          {
            "name": "SOAP",
            "state": "down"
          }
        ]
      }
    }
  ]
};

export default data;