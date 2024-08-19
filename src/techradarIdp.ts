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
      "name": "Networking & Security",
      "blipsByRing": {
        "adopt": [
          {
            "name": "Cilium",
            "icon": "\ue7ba"
          }
        ],
        "trial": [
          {
            "name": "Istio"
          },
          {
            "name": "Cilium"
          }
        ],
        "assess": [
          {
            "name": "Falco"
          },
          {
            "name": "Trivy"
          },
        ],
        "hold": [
          {
            "name": "SPIRE / SPIFFE"
          },
          {
            "name": "Kyverno"
          }
        ]
      }
    },
    {
      "name": "Workloads",
      "blipsByRing": {
        "adopt": [
          {
            "name": "Containers",
            "icon": "\ue655"
          },
         ],
        "trial": [],
        "assess": [
          {
            "name": "Lambda"
          },
          {
            "name": "Karpenter"
          },
        ],
        "hold": []
      }
    },
    {
      "name": "Persistent Storage",
      "blipsByRing": {
        "adopt": [
          {
            "name": "RDS Postgres"
          },
          {
            "name": "EBS"
          },
          {
            "name": "EFS"
          },
        ],
        "trial": [],
        "assess": [
        ],
        "hold": []
      }
    },
    {
      "name": "Infrastucture",
      "blipsByRing": {
        "adopt": [
          {
            "name": "Github Enterprise Cloud",
            "icon": "\uf0ef"
          },
          {
            "name": "ArgoCD"
          },
        ],
        "trial": [
          {
            "name": "backstage"
          },
        ],
        "assess": [
        ],
        "hold": [
          {
            "name": "TeamCity"
          }
        ]
      }
    },
    {
      "name": "Cloud Providers",
      "blipsByRing": {
        "adopt": [
          {
            "name": "AWS"
          }
        ],
        "trial": [
        ],
        "assess": [
          {
            "name": "EKS-anywhere"
          },
          {
            "name": "Azure"
          },
          {
            "name": "Google Cloud Platform"
          },
        ],
        "hold": [
        ]
      }
    },
    {
      "name": "Infrastructure as code",
      "blipsByRing": {
        "adopt": [
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
        ],
        "assess": [
          {
            "name": "Terraform"
          },
          {
            "name": "Crossplane"
          },
          {
            "name": "CDK"
          }
        ],
        "hold": [
        ]
      }
    },
    {
      "name": "Observability",
      "blipsByRing": {
        "adopt": [
          {
            "name": "Grafana",
            "state": "up",
            "url": "https://grafana.com/"
          },
          {
            "name": "OpenTelemetry",
            "url": "https://opentelemetry.org/"
          },
        ],
        "trial": [
        ],
        "assess": [
        ],
        "hold": [
        ]
      }
    }
    
  ]
};

export default data;
