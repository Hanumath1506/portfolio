export default function ForestBackground() {
  return (
    <div
      className="forest-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 6000"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8D5B0" stopOpacity="1" />
            <stop offset="40%" stopColor="#D4BC8A" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#C4A870" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B6B40" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1440" height="6000" fill="#0D1018" />

        <circle cx="1100" cy="180" r="90" fill="url(#moonGlow)" />

        {/* Tree 1 — far left, full height */}
        <g strokeLinecap="round" fill="none">
          <line
            x1="80"
            y1="0"
            x2="80"
            y2="6000"
            stroke="#0A0C10"
            strokeWidth="18"
          />
          <line
            x1="80"
            y1="420"
            x2="170"
            y2="300"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="170"
            y1="300"
            x2="210"
            y2="240"
            stroke="#0A0C10"
            strokeWidth="5"
          />
          <line
            x1="80"
            y1="650"
            x2="10"
            y2="520"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="80"
            y1="900"
            x2="165"
            y2="750"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="80"
            y1="1200"
            x2="20"
            y2="1050"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="20"
            y1="1050"
            x2="-15"
            y2="990"
            stroke="#0A0C10"
            strokeWidth="5"
          />
        </g>

        {/* Tree 2 — left */}
        <g strokeLinecap="round" fill="none">
          <line
            x1="220"
            y1="400"
            x2="220"
            y2="6000"
            stroke="#0C0E13"
            strokeWidth="12"
          />
          <line
            x1="220"
            y1="500"
            x2="140"
            y2="380"
            stroke="#0C0E13"
            strokeWidth="6"
          />
          <line
            x1="140"
            y1="380"
            x2="105"
            y2="330"
            stroke="#0C0E13"
            strokeWidth="4"
          />
          <line
            x1="220"
            y1="750"
            x2="310"
            y2="620"
            stroke="#0C0E13"
            strokeWidth="6"
          />
          <line
            x1="220"
            y1="1100"
            x2="150"
            y2="960"
            stroke="#0C0E13"
            strokeWidth="6"
          />
          <line
            x1="150"
            y1="960"
            x2="118"
            y2="910"
            stroke="#0C0E13"
            strokeWidth="4"
          />
        </g>

        {/* Tree 3 — center-left, faint */}
        <g strokeLinecap="round" fill="none" opacity="0.4">
          <line
            x1="520"
            y1="800"
            x2="520"
            y2="6000"
            stroke="#111520"
            strokeWidth="8"
          />
          <line
            x1="520"
            y1="900"
            x2="450"
            y2="780"
            stroke="#111520"
            strokeWidth="4"
          />
          <line
            x1="450"
            y1="780"
            x2="415"
            y2="730"
            stroke="#111520"
            strokeWidth="3"
          />
          <line
            x1="520"
            y1="1200"
            x2="595"
            y2="1080"
            stroke="#111520"
            strokeWidth="4"
          />
          <line
            x1="595"
            y1="1080"
            x2="630"
            y2="1030"
            stroke="#111520"
            strokeWidth="3"
          />
        </g>

        {/* Tree 4 — center-right, faint */}
        <g strokeLinecap="round" fill="none" opacity="0.35">
          <line
            x1="920"
            y1="1000"
            x2="920"
            y2="6000"
            stroke="#111520"
            strokeWidth="8"
          />
          <line
            x1="920"
            y1="1100"
            x2="995"
            y2="980"
            stroke="#111520"
            strokeWidth="4"
          />
          <line
            x1="995"
            y1="980"
            x2="1030"
            y2="930"
            stroke="#111520"
            strokeWidth="3"
          />
          <line
            x1="920"
            y1="1350"
            x2="845"
            y2="1230"
            stroke="#111520"
            strokeWidth="4"
          />
          <line
            x1="845"
            y1="1230"
            x2="808"
            y2="1180"
            stroke="#111520"
            strokeWidth="3"
          />
        </g>

        {/* Tree 5 — right */}
        <g strokeLinecap="round" fill="none">
          <line
            x1="1220"
            y1="300"
            x2="1220"
            y2="6000"
            stroke="#0C0E13"
            strokeWidth="14"
          />
          <line
            x1="1220"
            y1="350"
            x2="1305"
            y2="230"
            stroke="#0C0E13"
            strokeWidth="7"
          />
          <line
            x1="1305"
            y1="230"
            x2="1340"
            y2="175"
            stroke="#0C0E13"
            strokeWidth="4"
          />
          <line
            x1="1220"
            y1="600"
            x2="1140"
            y2="470"
            stroke="#0C0E13"
            strokeWidth="7"
          />
          <line
            x1="1220"
            y1="950"
            x2="1295"
            y2="820"
            stroke="#0C0E13"
            strokeWidth="7"
          />
          <line
            x1="1220"
            y1="1250"
            x2="1160"
            y2="1120"
            stroke="#0C0E13"
            strokeWidth="7"
          />
          <line
            x1="1160"
            y1="1120"
            x2="1130"
            y2="1070"
            stroke="#0C0E13"
            strokeWidth="4"
          />
        </g>

        {/* Tree 6 — far right, full height */}
        <g strokeLinecap="round" fill="none">
          <line
            x1="1380"
            y1="0"
            x2="1380"
            y2="6000"
            stroke="#0A0C10"
            strokeWidth="18"
          />
          <line
            x1="1380"
            y1="250"
            x2="1470"
            y2="130"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="1470"
            y1="130"
            x2="1505"
            y2="75"
            stroke="#0A0C10"
            strokeWidth="5"
          />
          <line
            x1="1380"
            y1="480"
            x2="1305"
            y2="360"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="1380"
            y1="720"
            x2="1460"
            y2="590"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="1460"
            y1="590"
            x2="1495"
            y2="535"
            stroke="#0A0C10"
            strokeWidth="5"
          />
          <line
            x1="1380"
            y1="1000"
            x2="1315"
            y2="870"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="1380"
            y1="1300"
            x2="1465"
            y2="1160"
            stroke="#0A0C10"
            strokeWidth="9"
          />
          <line
            x1="1465"
            y1="1160"
            x2="1500"
            y2="1100"
            stroke="#0A0C10"
            strokeWidth="5"
          />
        </g>

        <ellipse
          cx="720"
          cy="5880"
          rx="700"
          ry="55"
          fill="#7A9AAE"
          opacity="0.07"
        />
        <ellipse
          cx="350"
          cy="5820"
          rx="480"
          ry="45"
          fill="#7A9AAE"
          opacity="0.05"
        />
        <ellipse
          cx="1100"
          cy="5850"
          rx="520"
          ry="50"
          fill="#7A9AAE"
          opacity="0.06"
        />
      </svg>
    </div>
  );
}
